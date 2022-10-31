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
        document.addEventListener("DOMContentLoaded", (e) =>{
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
    
    