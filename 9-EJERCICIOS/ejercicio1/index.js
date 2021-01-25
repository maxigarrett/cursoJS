/* solicita un nombre,la edad y muestre por consola el mensaje "hola____. tienes______años y el año que viene tendras____años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template string*/

let nombre= prompt("ingrese su nombre","nombre");
let edad=parseInt( prompt("introduce tu edad","edad"));


console.log(`hola, ${nombre} tienen ${edad} y el año que viene tendras ${edad+1}`);