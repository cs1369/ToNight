const inicioSesion=document.querySelector("#inicio-sesion");
const registro=document.querySelector("#registro");

registro.addEventListener("click",()=>{
    document.querySelector(".login__caja").classList.remove("mover_izquierda2");
    document.querySelector(".login__caja-form").classList.remove("mover_derecha2");
    document.querySelector(".login__caja").classList.add("mover_izquierda1");
    document.querySelector(".login__caja-form").classList.add("mover_derecha1");
});
inicioSesion.addEventListener("click",()=>{
    document.querySelector(".login__caja").classList.remove("mover_izquierda1");
    document.querySelector(".login__caja-form").classList.remove("mover_derecha1");
    document.querySelector(".login__caja").classList.add("mover_izquierda2");
    document.querySelector(".login__caja-form").classList.add("mover_derecha2");
});