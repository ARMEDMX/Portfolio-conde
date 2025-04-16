let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    // Si el scroll está en la parte superior, aseguramos que el navbar se vea
    if (currentScrollPos === 0) {
        navbar.classList.remove("hidden");
    }
    // Si el usuario ha subido (se detecta una disminución de scroll)
    else if (prevScrollPos > currentScrollPos) {
        navbar.classList.remove("hidden");
    } else {
        // Si el usuario está bajando, se oculta el navbar
        navbar.classList.add("hidden");
    }
    
    prevScrollPos = currentScrollPos;
});
