// JavaScript para agregar clase 'visible' cuando la sección entra en la vista
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.fadeInSection');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // La sección se anima cuando el 50% está en la vista

    sections.forEach(section => {
        observer.observe(section);
    });
});
