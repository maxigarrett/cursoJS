/*Spread Operator (operador de expancion)

su sintaxis es: ...
*/

const numero=[-12,2,3,45,6,7,98,100];
//  console.log(...numero);  muestra cada valor por separado


//-------------------enviar elementos en un array a una funcion con SPREAT OPERATOR----------------------------------------------------
const todosNumeros= (a,b,c)=>
{
    console.log(a+b+c);
}

let numerosAdd=[1,2,3];
// todosNumeros(1,2,3);

todosNumeros(...numerosAdd);//agregamos elementos de un array a la funcion 

// ----------------------------------------------------------------------------------------------------------


// -----------------------------------AÑADIR UN ARRAY A OTRO ARRAY SPREAT OPERATOR-------------------------------------------------------
let nuevoUsuario=['marta','jaime','laura'];
let usuario=['javier','david','rosa','juan','mercedes'];

// usuario.push(nuevoUsuario[0],nuevoUsuario[1],nuevoUsuario[2]);//forma no utilizable

usuario.push(...nuevoUsuario);
// usuario.splice(2,0,nuevoUsuario); que agrege de la posicion 2,0 que no borre ninguno y agregue nuevousuario
console.log(usuario);

// ---------------------------------------------------------------------------------------------------------------


//--------------------------------------------COPIAR ARRAY SPREAT OPERATOR-------------------------------------------------------------
let array1=[1,2,3,4];
let array2=[...array1];
console.log(array2);

// otra forma mas dificil de acerlo:
// let array= array1.slice();
// console.log(array);

//-------------------------------------------------------------------------------------------------------------------------------





// ---------------------------------------------CONCATENAR ARRAY SPREAT OPERATOR------------------------------------------
let numeritos=[11,3,56,89];
let numeritos2=[4,4,4,4,4];

//de una forma sin splace operator
// let concatenar= numeritos.concat(numeritos2);

let concatenar=[...numeritos,...numeritos2];
console.log(concatenar);

// ---------------------------------------------------------------------------------------------------------------------------


// --------------------ENVIAR NUMEROS INDEFINIDOS DE ARGUMENTOS EN UNA FUNCION(PARAMETROS RESET) SPREAT OPERATOR-------------------------------
const parametrosIndefinidos=(...numbers)=>
{
    console.log(numbers);// podemos pasarle un ..., un map,reduce,etc podemos hacer lo que sea
}
parametrosIndefinidos();//le podemos pasar cualquier cantidad de parametros que querramos o ninguno se convierte en un array


// -------------------------------------------------------------------------------------------------





// --------------------------------------TRABAJAR CON LA LIBRERIA MATH SPREAT OPERATOR---------------------------------------------
let numeritosNuevos=[11,3,56,89];
console.log(Math.max(...numeritosNuevos));//sin los tres puntos de spreat operator daria un error porq no puede sacar el max del array


// ----------------------------------------------------------------------------------------------------------------------------------




// ---------------------------------------ELIMINAR DUPLICADOS DE UN ARRAY SPREAT OPERATOR------------------------------------------
let numeritosNuevos2=[11,3,56,89,3,11,11];
console.log([...new Set(numeritosNuevos2)]);//set no permite numero duplicados


