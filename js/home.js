window.addEventListener("scroll", function(){
    var contenedorNavegador = document.querySelector(".contenedor-navegador");
    contenedorNavegador.classList.toggle("abajo", window.scrollY > 82);
});


const carrusel = document.querySelector('.carrusel');
const circulo = document.querySelectorAll('.circulo');

circulo.forEach( (cadaCirculo , i) => {
    circulo[i].addEventListener('click', () => {
        let posicion = i;
        let operacion = posicion * -25;

        carrusel.style.transform = `translateX(${ operacion }%)`;

        circulo.forEach( (cadaCirculo , i) => {
            circulo[i].classList.remove('activo');
        });
        circulo[i].classList.add('activo');
    });
});