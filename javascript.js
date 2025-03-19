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

//funcion llamado de api para mostrar el clima 
const temperature = document.querySelector(".tem");
const summary = document.querySelector(".summary");
const loc = document.querySelector(".location");

const API_KEY = "550f7276f1afa4b5d83e52bc4fcd3f91";

window.addEventListener("load", async () => {
    if (!navigator.geolocation) {
        console.error("Geolocalización no es soportada por este navegador.");
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude: lat, longitude: lon } = position.coords;
        await fetchWeatherData(lat, lon);
    }, (error) => {
        console.error("Error obteniendo ubicación:", error);
    });
});

async function fetchWeatherData(lat, lon) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        
        if (!response.ok) throw new Error("Error al obtener datos del clima");

        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        console.error(error.message);
    }
}

function updateWeatherUI(data) {
    const { temp } = data.main;
    const { description } = data.weather[0];
    const { name, sys: { country } } = data;

    temperature.textContent = `${kelvinToCelsius(temp)}°C`;
    summary.textContent = capitalizeFirstLetter(description);
    loc.textContent = `${name}, ${country}`;
}

function kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


