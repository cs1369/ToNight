const btnMenu= document.querySelector(".mobile__menu-icon");
const menuListas=document.querySelectorAll(".mobile__menu-items");
const menuIcono = document.querySelectorAll(".mobile__menu-line");
const menu= document.querySelector(".mobile__menu");
btnMenu.addEventListener("click",()=>{
    menu.classList.toggle("mobile__menu-visibility");
    menuIcono[0].classList.toggle("mobile__menu-line-animation1");
    menuIcono[1].classList.toggle("mobile__menu-line-animation2");
    menuIcono[2].classList.toggle("mobile__menu-line-animation3");
    for(let lista of menuListas){
        lista.classList.toggle("mobile__menu-items-animation");
    }
});