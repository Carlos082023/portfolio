// Light/Dark Mode
let root = document.documentElement; // Getting CSS Variables access
var dark_switch = document.getElementById("dark_switch");
var toggleLight=true; // 1 = Light
dark_switch.addEventListener("change",()=>{
    toggleLight=!toggleLight;
    if(!toggleLight){
      document.body.classList.add('dark-mode');
      efectoMaquinaEscribir()
        root.style.setProperty('--background', "#1c1d21");
        root.style.setProperty('--opposite_background', "#ffffff");
        root.style.setProperty('--text_and_details', "#ffffff");
        root.style.setProperty('--section_background', "#161616");
        
    }
    else if(toggleLight){
      document.body.classList.remove('dark-mode');
      efectoMaquinaEscribir()
        root.style.setProperty('--background', "#ffffff");
        root.style.setProperty('--opposite_background', "#1c1d21");
        root.style.setProperty('--text_and_details', "#121212");
        root.style.setProperty('--section_background', "#e4e4e4");
    }
})



var nav_items = document.querySelectorAll(".nav-item");
var hamburger_checkbox = document.querySelector("#hamburger_checkbox")
nav_items.forEach((item)=>{
    item.addEventListener("mouseover",(e)=>{
        cursor.style.display='block'
    })
    item.addEventListener("click",()=>{
        //Active
        nav_items.forEach(i=>{
            if(i!=item){
                i.style.color= "var(--text_and_details)";
                i.style.paddingBottom='0px';
                i.style.borderBottom='0px';
            }
            else{
                i.style.color='var(--blue_contrast)';
                i.style.textShadow= "rgba(0, 0, 0, 0.5) 0px 0 10px";
                i.style.borderBottom='1px solid var(--blue_contrast)';
            }
        })
        hamburger_checkbox.checked=false
    })
})



function efectoMaquinaEscribir(){
const app = document.getElementById('typewriter');
const typewriter = new Typewriter(app,{loop:false, delay:200});
typewriter
.typeString('Carlos Vladislavic')
.pauseFor(2000)
.start();
}
document.addEventListener('DOMContentLoaded', function() {
efectoMaquinaEscribir();
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    var togglerButton = document.querySelector('.navbar-toggler');
    var closeIcon = document.getElementById('close-icon');
  
    togglerButton.addEventListener('click', function() {
      closeIcon.classList.toggle('d-none');
    });
  });