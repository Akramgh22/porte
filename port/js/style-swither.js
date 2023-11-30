const StyleSwitcherToggle = document.querySelector(".style-swither-toggler");
StyleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-swither").classList.toggle("open");
})
//hide style switcher on scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-swither").classList.contains("open"))
    (document.querySelector(".style-swither").classList.remove("open"))
})
//////theme colors 
const alternatstyles = document.querySelectorAll(".alternat-style");
function SetActivestyle(color)
{
    alternatstyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");   
        }
    })
}



//=======theme light===========================
const daynight = document.querySelector(".day-night");
daynight.addEventListener("click", () => {
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        daynight.querySelector("i").classList.add("fa-moon");
    }
})
