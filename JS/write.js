const typewriter = document.getElementById("typewriter");
const textArray = ["Web Developer", "Web Designer", "Programmer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textArray[textIndex];
    const speed = isDeleting ? 50 : 90; // Velocidad de borrado y escritura

    typewriter.textContent = currentText.substring(0, charIndex);

    if (isDeleting) {
        charIndex--;
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }
    } else {
        charIndex++;
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Espera antes de borrar
            return;
        }
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});
