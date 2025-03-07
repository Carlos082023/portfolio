//funcion maquina de escribir
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
    const navList = document.getElementById("nav-list");

    menuIcon.addEventListener("click", () => {
        navList.classList.toggle("show");
    });
});

//ScroolReveal para los efectos
const sr = ScrollReveal({
    distance : '64px',
    duration :2000,
    delay : 450,
    reset :true
})


sr.reveal('.hero-text', {delay: 200, origin: 'top'})
sr.reveal('.hero-img', {delay: 450, origin: 'top'})
sr.reveal('.icons', {delay: 500, origin: 'left'})
sr.reveal('.portfolio-item', {delay: 300, origin: 'right'})
sr.reveal('.footer', {delay: 200, origin: 'top'})



// funcion para el movimiento del scrool
document.querySelectorAll("a[href^='#']").forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = anchor.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;

        if (targetId === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }

        // Cerrar menú hamburguesa siempre después de hacer clic
        const navlist = document.getElementById('nav-list');
        if (navlist.classList.contains('show')) {
            navlist.classList.remove('show');
        }
    });
});