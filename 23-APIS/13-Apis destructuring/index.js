/* API DESTRUCTURING
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

    La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos para
    utilizarlo de manera mas comoda
*/

const person=
{
    name:'Maximiliano',
    age:28,
    email:'maxyg22@outlook.es'
}
//DE LA MANERA NORMAL PARA VER ESTE OBJETO
console.log('manera normal : ',person.name,person.email);

console.log('CON DESTRUCTURAZION');

//DESTRUCTURACION
// entre llaves el nombre de las variables que queremos utilizar(simepre tienen que coincidir con el nombre de el objeto) y
// le decimos que es igual al objeto(person) simpre utilizar const antes de todo
// le podemos dar otro nombre si queremos en ves de que sea igual a la del objeto por ejemplo si queremos cambiar age por edad
// solo tenemos que usar los dos puntos osea age:edad y pasara a llamarse esa propiedad edad para poder mostrar su valor
const{name,age:edad,email}=person;

console.log(name,edad,email);


console.log('CON DESTRUCTURAZION pero con los arrays');

const number=[1,2,3,4];

// para ver los numeros en este caso con destructuracion habria que asignarle un nombre a cada posicion 
const[primerNum,segundoNum,tercerNum,cuartoNum]=number;

console.log(primerNum,segundoNum)




// --------------------------------------------------------------------------------------------------------------
// con esto mostrara el objeto entero con las propiedades de el objeto person
console.log('---------------funcion normal para mostar objeto-------------');
const damePerosna=(persona)=>
{
    console.log(persona);
}
damePerosna(person);


//pero si queremos mostar solo el nombre por parametro a la funcion destructuramos poniendo el nombre de una de las propiedades
// del objeto person
console.log('---------destructuracion a traves de una funcion-------------');
const damePerosna2=({name})=>
{
    console.log(name);
}
damePerosna2(person);
console.log('--------------------------------------------------------------');
// --------------------------------------------------------------------------------------


console.log('-------DESTRUCTURACION CON PETICION AXIOS---------------------')
//utilizamos axios para peticion de una api y utilizamos asinc y await 
const getUser= async()=>
{
    // la peticion de la api devuelve un objeto y que tiene una propiedad llamada data que es donde tiene la info de la api
    // es este caso de usuarios y destructuramos a data como usuarios 
    // con await le decimos que que pare todo hasta noo ejecutarse la peticion get
    const{data:users}=await axios('https://jsonplaceholder.typicode.com/users')
    console.log(users);
}
getUser();

