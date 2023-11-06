window.addEventListener("scroll", function(){
    var contenedorNavegador = document.querySelector(".contenedor-navegador");
    contenedorNavegador.classList.toggle("abajo", window.scrollY > 82);
});
