document.addEventListener("DOMContentLoaded", function () {
    const aboutMeSection = document.getElementById('about-me');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se añade la clase 'animate' cuando la sección está visible en el viewport
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 }); // Se activa cuando el 50% de la sección es visible

    // Observar la sección About Me
    observer.observe(aboutMeSection);
});
