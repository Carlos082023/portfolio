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