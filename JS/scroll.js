// JavaScript para agregar clase 'visible' cuando la sección entra en la vista
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todas las secciones que deseas observar
    const sections = document.querySelectorAll('.fadeInSection');
    
    // Crea un nuevo IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si la sección es visible en la pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Agrega la clase 'visible'
                observer.unobserve(entry.target); // Deja de observar la sección
            }
        });
    }, { threshold: 0.1 }); // Activar cuando el 10% de la sección esté en la vista

    // Observa cada sección
    sections.forEach(section => {
        observer.observe(section);
    });
});
