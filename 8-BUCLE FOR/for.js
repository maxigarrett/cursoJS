/* BUCLE FOR (DETERMINADO) sabemos la cantidad de veces a ejecutar EXISTEN 4 TIPOS DE FOR

sintaxis:
i=0: primer parametro donde inicializamos la variable
i<10: segundo parametro donde pregunta si i es menor a 10 mientras sea verdad se repetira
i++: incrementa en 1 la i y se repetira hasta que la i sea igual a 10  y pregunte si i<10 cosa q va a ser falso y se saldrá del bucle
    for(let i=0;i<10;i++) 
    {
        codigo a ejecutar 
    }*/


    // for(let i=0; i<10;i++)
    // {
    //     console.log(i);
    // }


// let numeros=[23,11,42,53,74,50];

// for (let i = 0; i < numeros.length; i++) 
// {
//     i
//     console.log(`i vale ${i} y  el valor de esa posicion en el array  es ${numeros[i]}`);    
// }




let names=['paco','jose','paula','maria'];

// BUCLE FOR NORMAL
for(let i=0; i<names.length;i++)
{
    if(names[i]=='paula')//cuando llegue a encontrar a paula entrara en el if
    {
        break;//el break rompera  el bucle y solo imprimirá lo anterior a paula lo que sigue despues no se imprimirá

        //continue; este salta la posicion de paula y sigue con el bucle y no se imprimirá paula (suplanta a i++) 
    }
    console.log(names[i]);
}
console.log('------------------');




// Otros bucles son BUCLE FOR OF /  FOR IN
//simplifica el bucle for tradicional sin tener que darle un número de vueltas ni realizar un incremento
// BUCLE FOR OF (obtenemos el valor de cada posicion)
// primero se crea una variable(let name) sin igual a nada la palabra reservada of y el array a reccorer en este caso names
for(let name of names)
{
    if(name=='paula')
    {
        continue;
    }
    
    console.log(name);//muestra el valor de la posicion
    // para sacar las posiciones
    console.log(names.indexOf(name));
}


console.log('------------------');
// BUCLE FOR IN (se usa para objetos no para arrays se obtiene el indice del array)
for(let name in names)
{
    if(names[name]=='paula')
    {
        break;
    }
    console.log(name);//en este caso imprimrira en la primer vuelta 0,1,2,..... en ves de los nombres(los indices)
    //si quisieramos sacar el valor de cada posicion
    console.log(names[name]);
}


