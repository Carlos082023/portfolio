let lon;
let lat;
const temperature = document.querySelector(".tem");
const summary = document.querySelector(".summary");
const loc = document.querySelector(".location");

window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const apiKey = '550f7276f1afa4b5d83e52bc4fcd3f91';
            const urlBase = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

            fetch(urlBase)
                .then(response => response.json())
                .then(data => {
                    temperature.textContent = celsius(data.main.temp) + "°C";
                    summary.textContent = data.weather[0].description;
                    loc.textContent = `${data.name}, ${data.sys.country}`;
                });
        });
    }
});

function celsius(kelvin) {
    return Math.round(kelvin - 273.15);
}
