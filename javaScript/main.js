
const imagenes = ['./images/reparacionnn.jpg',`./images/redes1.jpg`,`./images/teclado.webp`]
let cont = 0;

function carrousel (contenedor){
contenedor.addEventListener(`click`, (e) => {
    let atras = contenedor.querySelector(".atras")
    let adelante = contenedor.querySelector(".adelante")
    let img = contenedor.querySelector("#img")
    let tgt = e.target;
    

    if (tgt == atras){
        if (cont > 0){
            img.src = imagenes[cont - 1];
            cont--;
        } else {
            img.src = imagenes[imagenes.length - 1];
            cont = imagenes.length - 1;
        }
    } else if (tgt == adelante) {
        if (cont < imagenes.length - 1){
            img.src = imagenes[cont + 1];
            cont++;
        } else {
            img.src = imagenes[0];
            cont = 0;
        }
    }
});
}
function botonSubir (){;
    const subir = document.getElementById("subir");
    subir.addEventListener(`click`, () => {;
        window.scrollTo({
            top: 0,
            behavior: `smooth`
        })
    })
}
botonSubir();
    window.onscroll = () =>{
        if (window.scrollY < 100){
            subir.classList.remove("botonsubirr")
           
        } else {
            subir.classList.add("botonsubirr")
            
        }
    }


    const acordeon = document.querySelector(".panel-btn")
    const navegacion = document.querySelector(".barradenavegacion")
    acordeon.addEventListener("click", () => {
        navegacion.classList.toggle("activo")   
    })

    

function darkThemee (btn,classDark) {
    const $themeBtn = document.querySelector(btn)
    const $selectors = document.querySelectorAll("[data-dark]");

    let moon = "🌙";
    let sun = "☀️";

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        localStorage.setItem("theme","light");
    }

    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        localStorage.setItem("theme","dark");
    }
    document.addEventListener("click", (e) => {
        if(e.target.matches(btn)) {
           if ($themeBtn.textContent === moon) {
            darkMode();
           } else {
            lightMode();
           }
        }
    })
    document.addEventListener("DOMContentLoaded", () =>{
        let contenedor = document.querySelector(`.contenedor`)
        carrousel(contenedor); 
        if (localStorage.getItem("theme") === null) {
         localStorage.setItem("theme","light");
        }
        if (localStorage.getItem("theme") === "light") {
            lightMode();
        }
        if (localStorage.getItem("theme") === "dark") {
           darkMode();
        }
        });
    
}

darkThemee(".dark-theme-btn","dark-mode");




    