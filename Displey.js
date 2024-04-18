/*Esta clase le da vida a la calculadora*/ 
class Display{
    constructor(displayValorAnterior, displayValorActual)
    {
        /*Estas son las propiedades de la clase*/ 
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
           /*Las inicializo como String vacias*/ 
        this.valorActual = '';
        this.valorAnterior = '';
    }

   /*Esto es para crear números*/ 
    agregarNumero(numero){
   /*Recibe numeros como parametros*/ 
         this.valorActual = numero;
         this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;

    }
}