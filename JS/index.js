
    let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            navbar.classList.remove("hidden"); // Scroll hacia arriba -> mostrar navbar
        } else {
            navbar.classList.add("hidden"); // Scroll hacia abajo -> ocultar navbar
        }

        prevScrollPos = currentScrollPos;
    });

