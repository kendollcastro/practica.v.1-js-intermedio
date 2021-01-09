/**
 * Ejercicio #1: La Calculadora
 *
 * ¿Como funciona?:
 * El usuario ingresa los números en los campos, selecciona la operación
 * y hace click en el botón "Calcular" para obtener el resultado.
 *
 * ¿Que tengo que hacer?
 * Tienes que escribir todas las funciones que consideres necesarias para
 * calcular el total de la operación.
 *
 * Considera:
 * 1. Si el usuario no completa todos los campos tienes que imprimir un
 *    mesaje de error. Ya existe la funcion que lo hace "imprimirError"
 * 2. Ya tienes variables para obtener los valores de los campos: input1,
 *    input2 y operacion. Para obtener el valor usas la propiedad "value".
 *    Por ejemplo: input1.value
 * 3. El valor de los campos de texto va a venir como un string, debes
 *    usar parseInt() para convertirlos a numeros y poder hacer operaciones
 *    matematicas. Por ejemplo parseInt(input1.value, 10)
 *
 * ¿Donde empiezo?:
 * Comiezas en la funcion "hacerOperacion". Ya está escrito el código para
 * que cuando el usuario haga click en el boton "Calcular" se llame a la
 * funcion "hacerOperacion".
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 */

// BOILERPLATE: NO TOCAR ESTE CODIGO
document.querySelector("button").addEventListener("click", hacerOperacion);

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const operacion = document.querySelector("#operacion");

function imprimirResultado(total) {
  const resultado = document.querySelector("#resultado");
  resultado.innerText = `El resultado de tu operación es ${total}`;
}

function imprimirError(mensaje) {
  const error = document.querySelector("#error");
  error.innerText = mensaje;
}

// TERMINA EL BOILERPLATE

// COMIENZA ACA

//Funcion de sumar
function sumar(numero1, numero2){
  return numero1 + numero2;
}

//Funcion de restar
function restar(numero1, numero2){
  return numero1 - numero2;
}

//Funcion de Multiplicar
function multiplicar(numero1, numero2){
  return numero1 * numero2;
}

//Funcion de Dividir
function dividir(numero1, numero2) {
  return numero1 / numero2;
}

//Funcion para calcular los resultados
function calcularResultados () {
  const numero1 = parseInt(input1.value, 10);
  const numero2 = parseInt(input2.value, 10);
  if(operacion.value === 'sumar'){
    imprimirResultado(sumar(numero1, numero2));
  } else if(operacion.value === 'restar'){
    imprimirResultado(restar(numero1, numero2));
  }else if(operacion.value === 'multiplicar'){
    imprimirResultado(multiplicar(numero1, numero2));
  }else {
    imprimirResultado(dividir(numero1, numero2));
  }
}

//Funcion de usabilidad
function hacerOperacion() {
  if(input1.value === ""){
    imprimirError('Ingrese un numero en el campo numero uno')
  } else if(input2.value === ""){
    imprimirError('Ingrese un numero en el campo numero dos')
  } else if(operacion.value === ""){
    imprimirError('Seleccione un metodo de operación')
  } else {
    calcularResultados();
  }
};

document.querySelector("button").addEventListener("click", hacerOperacion);
  
