/*ARRAY
callaba es una funcion que la esta ejecutando otra funcion, es decir, las funciones si la esjecuta una clase u objeto se llaman
metodos y si la ejecuta otra funcion se llaman callback

.from(iterable):convierte en array el elemento iterable(todo aquel que se pueda recorrer es decir un String) se usa muchisimo en DOM

.sort([callback]): ordena los elementos de un array alfabeticamente(valor unicode). si le pasamos un callback lo ordena en funcion
del algoritmo que le pasamos.el valor unicode se denomina al valor asignado que ya tienen cada una de las letras

.foreach(callback(currentvalue,[index])):ejecuta la funcion indicada una vez por cada elemento del array

.some(callback): compruebe si al manos un elemento del array cumple la condicion.

.every(callback): comprueba si todos los elementos del array cumplen la condicion.

.map(callback): transforma todos los elementos del array y devuleve un nuevo array.

.flter(callback): filtra todos los elementos del array que cuplan la condicion y devulve un nuevo array.

.reduce(callback): reduce todos los elementos del array a un unico valor.

.split():El método split() sirve para dividir o cortar una cadena de texto en sub-cadenas y luego retornar un arreglo(array)*/

// ---------------------------------------.FROM---------------------------------------------------------------------------
let word='hola mundo';

console.log(Array.from(word));
console.log(word.split(''));
// --------------------------------------------------------------------------------------------------------------------------


// -------------------------------.SORT-----------------------------------------------------------------------------------------
const letras=['b','a','c','z'];
const numeros=[1,8,34,100,6];
console.log(`orden alfabetico`);
console.log( letras.sort());

// si queremos ordenar numeros con sort no lo ara porque los ordena por valor unicode y ordenara primero el 1 depues el 100 porque
// empieza por el 1 y despues le sigue el 0 por lo que toma que es otro valor menor a 34 que epieza por el 3 entonces para
// ordenarlos tenemos que usar un callback osea a la funcion sort le pasamos un parametro dentro de otros parentesis que son a,b
// estos dos comparan por cada vuelta de ese array dos posiciones 1 y 8 y despues los resta a-b y si esto daun numero mayor que 0
// determina que es a mayor que b si da 0 a es igual a b y si da resultado menor que 0 a es menor que b
console.log(numeros.sort((a,b)=>a-b));//de mayor a menor (b-a)
// ---------------------------------------------------------------------------------------------------------------------------


// -----------------------------------------.FORECH--------------------------------------------------------------------------

const numeros2=[1,8,34,100,6];
numeros2.forEach((num)=>console.log(numeros2));
numeros2.forEach((num,index)=>console.log(`${num} esta en la posicion ${index}`));
// -----------------------------------------------------------------------------------------------------------------------------



// ----------------------------.SOME y .EVERY--------------------------------------------------------------------------------
const array=['html','css','php','javascript'];
console.log(array.some(arr => arr.length>3));//dara true porque todas las palabras tienen mas de 2 letras o almenos 1 lo tiene
console.log(array.every(arr => arr.lengh>3));//dara false porque ni css ni php tienen una longitud mayor a 3

// ----------------------------------------------------------------------------------------------------------------------------



// -------------------------------------.MAP----------------------------------------------------------------------------

const numeros3=[2,55,4,1,798];
numeros3.map((num)=>
 {
    console.log(num*2)
 });


// -----------------------------------------------------------------------------------------------------------------------



// ---------------------------------------FILTER----------------------------------------------------------------------------
let numeros4=[2,55,4,1,798];
let variable= numeros4.filter((num)=> num>40);
console.log(variable);//mostrara los numero que cumplen con la condicion osea ser mayor a 40

// ---------------------------------------------------------------------------------------------------------------------------


// --------------------------------------.REDUCE-------------------------------------------------------------------------
const numeros5=[2,55,4,1,798];
console.log(numeros5);
console.log(`suma de todos los numeros del array `+numeros5.reduce((a,b)=> a+b));//podemos sumarlos restarlo etc. oculaquier cosa.

//array de objetos de usuarios
const users =
[
    {   
        name:'user 1',
        online:true
    },
    {   
        name:'user 2',
        online:true
    },
    {   
        name:'user 3',
        online: false
    },
    {   
        name:'user 4',
        online:true
    },
    {   
        name:'user 5',
        online:false
    },
    {   
        name:'user 6',
        online:true
    },
]
// vamos a usar reduce para ver los usuarios en linea primer parametro de contador y segunda para saber los us uarios conectados
const usuariosConectador= users.reduce((cont,us)=>
{
    if(us.online==true)
    {
        cont++;
        
    }
    return cont;
},0);//sin ese 0 no muestra ningun valor porque le damos a cont un valor inicial

console.log(`hay ${usuariosConectador} usuarios conectados`);


