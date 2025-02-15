function MyName() {
    const app = document.getElementById('typewriter');
    if (app) {
        new Typewriter(app, {
            loop: true,
            delay: 200,
            cursor:""
        })
        .typeString('CARLOS VLADISLAVIC')
        .pauseFor(2000)
        .start();
    }
}

document.addEventListener('DOMContentLoaded', MyName);

// Capturar el botón y el menú
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.getElementById("navlist");

    menuIcon.addEventListener("click", () => {
        navList.classList.toggle("show");
    });
});

const sr = ScrollReveal({
    distance : '64px',
    duration :2000,
    delay : 450,
    reset :true
})


sr.reveal('.hero-text', {delay: 200, origin: 'top'})
sr.reveal('.hero-img', {delay: 450, origin: 'top'})
sr.reveal('.icons', {delay: 500, origin: 'left'})
sr.reveal('.scroll-down', {delay: 450, origin: 'right'})



