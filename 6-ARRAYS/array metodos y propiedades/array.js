/*Array- propiedades
    .length- devuelve el numero de posiciones que contiene el array
    
Array-netodos
    Array.isArray()- devuelve true si la variable es un array
    
    Eliminar un elemento
        .shift()- Elimina el primer elemento del array y devuelve ese elemento.(se puede guardar el elemento eliminado en variable)
        .pop()- Elimina el ultimo elemento de un array y devuelve ese elemento.
        
        
    Añadir elementos
        .push(element1, element2,...)- Añade uno o mas elementos al final del array y devuelve la nueva longitud.
        .unishift(element1, element2.....)- añade uno o mas elementos al comienzo del array y devuelve la nueva longitud.

    
    indexOf()- devuelve el primer indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado

    lastIndexOf()- devuelve el ultimo indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado

    reverse()- invierte el orden de los elementos del array.

    .join(separator)-devuelve un String con el separator que indiquemos por defecto son comas

    .splice(a,b,items)- cambia el contenido de un array eliminado, elementos existentes y/o agregando nuevos elementos
        a-indice de inicio.
        b- numero de elemento.(opcional)
        item- elementos a añadir en el caso de que se añadan.(opcional)

    slice(a,b)- extrae elementos de un array desde el indice a hasta el indice b. si no existe b lo hace desde a hasta el final,
    sino existe ni a ni b hace una copia del original
*/

// PROPIEDADES-------------------------------------------------------------------
let number=[1,2,3,4,5];
console.log('longitud del array '+number.length);
// --------------------------------------------------------------------------------


// ARRAY METODOS ELIMINAR ELEMENTO--------------------------------------------------------------------
console.log('comprobacion de si es un array '+Array.isArray(number)); 


console.log('los elementos de l array: '+number);


number.shift();
console.log('eliminamos el primer elemento '+number);

number.pop();
console.log('eliminamos el ultimo elemento '+number);


number=[1,2,3,4,5];

console.log(number);
let deleteNumber= number.shift();//guardamos el primer elemento eliminado
console.log('primer elemento eliminado '+number);
console.log('recuperamos el elemente eliminado '+deleteNumber);
// ----------------------------------------------------------------------------------------------------


// ARRAY METODOS AGREGAR ELEMENTOS----------------------------------------------------------------------

number=[1,2,3,4,5];

number.push(6);
console.log('añadimos el numero 6 al array '+number);//se puede guardar tambien en una variable al agregar un nuevo elemento

 number.unshift(0);
 console.log('añadimos el numero 0 al principio del array '+number);

// ---------------------------------------------------------------------------------------------------


// BUSCAR UN ELEMENTO EN EL ARRAY--------------------------------------------------------------------------
number=[1,2,3,4,5,1];
console.log(number);
console.log('numero 2 se encontro en la poisicion: '+number.indexOf(1));

// con .log solo muestra el primer 1 ya que busca el primer numero que coincida con el q le dijimos si hay mas 1 no los muestra
// con .lastIndexOf() muestra el ultimo indice que coincida conel numero que le especifiquemos
number=[1,2,3,4,5,1];
console.log(number);
console.log(' '+number.lastIndexOf(1));


console.log(number.reverse());//revertimos el array
// -----------------------------------------------------------------------------------------------------------------------





// separamos los numeros por lo que indiquemos en el .join
console.log('imprimimos array '+number);

console.log('cambiamos los separadores: '+number.join('-'));



// ---------------------------------------------------------------------------------------------------------------------------
/** .splice(a,b,items)- cambia el contenido de un array eliminado, elementos existentes y/o agregando nuevos elementos
        a-indice de inicio.
        b- numero de elemento.(opcional)
        item- elementos a añadir en el caso de que se añadan.(opcional)
 */
// 1 solo parametro
number=[1,2,3,4,5];
console.log(number);
number.splice(3);//elimina de la posicion 3 en adelante
console.log('de la posicion 3 en adelante eliminamos todo' +number);

// 2 parametros
number=[1,2,3,4,5,];
console.log(number);
number.splice(2,2);//elimina de la psocicion2 donde inicia y va dos posiciones mas adelante y elimina esos dos cuenta de donde inicia
console.log(number);

// 3 parametros
number=[1,2,3,4,5];
console.log(number);
//elimina de la psocicion2 donde inicia y va dos posiciones mas adelante y elimina esos dos y mete el numero 10 en esa posicion
//eliminada,es decir a partir de la segunda coma son todos los elementos que se vana a añadir.
// en caso de no querer eliminar numeros y solo agregar en el segundo 2 osea el b ponemos 0
// eliminemos o no los numeros se ubicaran despues de el primer parametro osea si decimos 2 a partir de la posicion 2 si ponemos
// 4 a partir de la posicion 4.(en el primer parametro osea a).
number.splice(2,2,10,34,55);

console.log(number);
// ----------------------------------------------------------------------------------------------------------------------------


/** slice(a,b)- extrae elementos de un array desde el indice a hasta el indice b. si no existe b lo hace desde a hasta el final,
    sino existe ni a ni b hace una copia del original */
 number=[1,2,3,4,5];
 console.log(number); 
let newNumber= number.slice(2);//nuevo array contando desde la posicion 2
console.log('empieza a contar desde la posicion 2 en adelante ' +newNumber);


number=[1,2,3,4,5];
 console.log(number); 
let newNumber1= number.slice(2,4);//nuevo array contando desde la posicion 2 y extrae hasta la poisicion 4(no considera la ultima
                                    //posicion sino que extrae uno antes de la posicion 4)
console.log('"empieza a contar desde la posicion 2 y extrae la posicion 4" ' +newNumber1);


