/*escribe un programa que permita ir introduciendo una serie indeterminada de numeros mientras su suma no supere 50. cunado 
esto ocurra, se debe mostrar el total acumuladoy el contador de cuantos numeros se han introducido*/

let suma=0;//para llevar la suma

let cont=0;//para contar los numero introducidos 

//como el numero va a ser indeterminado y no sabemoslas vueltas del bucle entonces usamos un while pero cuando supere 50 se saldra
while(suma<50)
{
    //cada ves que introducimos un numero que sumado al anterior introducido no pase los 50 se seguira repitiendo
    suma+=parseInt(prompt('intrduce un numero'));
    //contador para saber los intentos
    cont++;
}

console.log(`la suma es total es${suma}`);
console.log(`el total de numeros introducidos${cont}`);

