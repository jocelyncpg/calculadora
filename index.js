const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

/*const calculadora = new Calculadora();*/


/* Console para ver en consola en la pagina*/ 
/*console.log(calculadora.sumar(2,3))*/

const display = new Display(displayValorActual, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));

});

