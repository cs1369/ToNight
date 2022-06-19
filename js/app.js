const btnMenu= document.querySelector(".mobile__menu-icon");
const menuListas=document.querySelectorAll(".mobile__menu-items");
const menu= document.querySelector(".mobile__menu");
btnMenu.addEventListener("click",()=>{
    menu.classList.toggle("mobile__menu-visibility");
    for(let lista of menuListas){
        lista.classList.toggle("mobile__menu-items-animation");
    }
});