let root = document.documentElement; // Getting CSS Variables access
let dark_switch = document.getElementById("dark_switch");
let toggleLight = true; // true = Light

dark_switch.addEventListener("change", () => {
    toggleLight = !toggleLight;

    if (!toggleLight) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    efectoMaquinaEscribir();

    root.style.setProperty('--background', toggleLight ? "#ffffff" : "#1c1d21");
    root.style.setProperty('--opposite_background', toggleLight ? "#1c1d21" : "#ffffff");
    root.style.setProperty('--text_and_details', toggleLight ? "#121212" : "#ffffff");
    root.style.setProperty('--section_background', toggleLight ? "#e4e4e4" : "#161616");
});



let nav_items = document.querySelectorAll(".nav-item");
let hamburger_checkbox = document.querySelector("#hamburger_checkbox");

nav_items.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
        cursor.style.display = 'block';
    });

    item.addEventListener("click", () => {
        // Reset all nav items
        nav_items.forEach(i => {
            i.style.color = "var(--text_and_details)";
            i.style.paddingBottom = '0px';
            i.style.borderBottom = '0px';
        });

        // Set styles for the clicked nav item
        item.style.color = 'var(--blue_contrast)';
        item.style.textShadow = "rgba(0, 0, 0, 0.5) 0px 0 10px";
        item.style.borderBottom = '1px solid var(--blue_contrast)';

        hamburger_checkbox.checked = false;
    });
});


  document.addEventListener('DOMContentLoaded', function() {
    let togglerButton = document.querySelector('.nav-toggle');
    let closeIcon = document.getElementById('close-icon');
    
    if (togglerButton) {
        togglerButton.addEventListener('click', function() {
            closeIcon.classList.toggle('d-none');
        });
    }
});



 
     function efectoMaquinaEscribir() {
        const app = document.getElementById('typewriter');
        if (app) {
            new Typewriter(app, {
                loop: false,
                delay: 200
            })
            .typeString('Carlos Vladislavic')
            .pauseFor(2000)
            .start();
        }
    }
    
    document.addEventListener('DOMContentLoaded', efectoMaquinaEscribir);
    
  