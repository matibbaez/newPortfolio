// Obtén todos los elementos con el atributo data-tooltip
const tooltips = document.querySelectorAll('[data-tooltip]');

// Agrega un event listener a cada elemento
tooltips.forEach((tooltip) => {
  let tooltipElement; // Almacena el elemento del tooltip

  tooltip.addEventListener('mouseenter', () => {
    // Muestra el tooltip solo si no existe ya
    if (!tooltipElement) {
      const tooltipText = tooltip.getAttribute('data-tooltip');
      tooltipElement = document.createElement('div');
      tooltipElement.classList.add('tooltip');
      tooltipElement.textContent = tooltipText;
      tooltip.appendChild(tooltipElement);
    }
  });

  tooltip.addEventListener('mouseleave', () => {
    // Oculta el tooltip al eliminar el elemento
    if (tooltipElement) {
      tooltipElement.remove();
      tooltipElement = null; // Restablece el valor a null para futuras interacciones
    }
  });
});



