document.querySelectorAll('.scroll-horizontal').forEach(container => {
        let isDragging = false;
        let startX, scrollLeft;

        // Evitar seleção de texto durante o arrasto
        container.addEventListener('mousedown', (e) => {
          isDragging = true;
          container.classList.add('dragging');
          startX = e.pageX - container.offsetLeft;
          scrollLeft = container.scrollLeft;
          e.preventDefault();
        });

        container.addEventListener('mouseleave', () => {
          isDragging = false;
          container.classList.remove('dragging');
        });

        container.addEventListener('mouseup', () => {
          isDragging = false;
          container.classList.remove('dragging');
        });

        container.addEventListener('mousemove', (e) => {
          if (!isDragging) return;
          e.preventDefault();
          const x = e.pageX - container.offsetLeft;
          const walk = (x - startX) * 1.5; // Ajuste de velocidade
          container.scrollLeft = scrollLeft - walk;
        });

        // Garantir suavidade no toque
        container.addEventListener('touchstart', () => {
          container.style.scrollBehavior = 'auto';
        });

        container.addEventListener('touchend', () => {
          container.style.scrollBehavior = 'smooth';
        });
      });
    