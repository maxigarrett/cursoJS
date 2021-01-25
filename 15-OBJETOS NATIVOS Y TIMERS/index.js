/*Objeto window - Es el objeto global, de el descienden todos los objetos todas pausan la pagina
    alert(). - mensaje rapido
    prompt(). - almacenar texto
    confirm(). - ventana para confirmar devuelve un boolean

*/


// alert('Hola');
// if(confirm('acepta?'))
// {
//     console.log('el usuario acepto');
// }
// else console.log('no ecpto');




 /*   
Objeto console - es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/web/API/Console
    
    console.log(). - aveces no despliega por consola
    console.dir(). - se usa este para que despligue si console.log() no anda
    console.error().- sacar por consola por un mensaje de error
    console.table(). - visualiza en una tabla para visualizar por consola nada mas y verlo mucho mas legible
*/


const Persona=
{
    name:'Dorian',
    age:30,
    email: 'maxig@outlook.es',
}

console.log(Persona);
console.table(Persona);
console.table([1,2,3,4]);





/*
    
Objeto location - Es el objeto que contiene la barra de direcciones
https://developer.mozilla.org/es/docs/web/API/Location

location.href - muestra por la pagina url en la que estamos. tambien podemos redirigir a una pagina
location.protocol - muestra si la pagina es http o https o ftp
location.host - el dominio principal que estamos visualizando osea 127.8.67.09 o cualquier otra
location.pathname - muestra los subdiretorios donde estamos
location.hash - es una forma de pasar parametros entre paginas podemos utilizarlo para tener un solo html y en funcion del hash que 
    pasemos podemos cargar una informacion u otra

location.reload - recarga la pagina continuamente se suele poner dentro de un if por si algo sucede recargamos la pagina
*/

console.log(location.href);
// location.href='http://www.google.com';
console.dir(location.protocol);
console.log(location.host);
console.log(location.pathname)
console.log(location.hash);
// location.reload();







/*

Objeto history -  trabaja con el historial de la pagina que estamos navegando pponemos por consola hitory 
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    back() - para ir hacia atra
    forward() - para ir hacia adelante
    go(n|-n) - recibe por parametro un numero negativo o uno positivo para decirle cuantas pagina adelantarse del historial
    legth - para saber cuantas pagina tenemos cargadas en el historial de forma temporal
*/
history.back();
history.go(-2);
history.length;







/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
    para usarlo necesitamos instanciarlo
    usan el calendario anglosajon osea que el mes 0 es enero y 11 es diciembre. Como el dia 0 es domingo y el 6 es sabado
*/

let date= new Date();
console.log("dia:" + date.getDate());
console.log(date);




/*Timers
 Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
     setTimeout(()=>{code}, delay-in-miliseconds) - hace que se ejecute la funcion despues de delay. Si lo referenciamos mediante una
    variable/constante podemos pararlo con clearTimeout(referencia)
*/  

const buttom=document.getElementById('buttom');

buttom.addEventListener('click', (e)=> 
{
    setTimeout(saludar,3000) //cuando llamamos una funcion externa solamente ponemos el nombre


    // en caso de crearla aca dentro si se crea la flecha y parentesis es de esta manera:
   const timeout= setTimeout(()=>
    {
        console.log('ADIOS');
    },3000)
  
   
})

// funcion que llamamos dentro del tiemout
const saludar= ()=>
{
    console.log('Hola');
}


// ----------------------------------------------------EJEMPLO CON CLEARTIMEOUT--------------------------------------------------
//HACEMOS QUE SE EJECUTE EL ADIOS
const timeout= setTimeout(()=>
{
    console.log('ADIOS');
},3000)

// HACEMOS QUE SE PARE CON EL BOTON ANTES DE EJECUTAR
buttom.addEventListener('click', (e)=> 
{
    clearTimeout(timeout);
})

// ----------------------------------------------------------------------------------------------------------------------------------










/*
Interval:
    https://developer.mozilla.org/en-US/docs/web/API/WindowOrworkerGlobalScope/setInterval
    
    setInterval(()=>{code}, delay-in-miliseconds) - HAce que s e ejecute la funcion de cada delay milisegundos. Si lo referenciamos
    mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/
const saludo = () => 
{
    console.log('HOLA MUNDO');
}


const interval= setInterval(saludo,3000);//cada 3 segundos se ejecutara sin parar la funcion saludo


let cont=0;
const time=setInterval(() => 
{
    console.log(cont);// cada tres segundo se ejecutará y aumentara en uno el contador  
    cont++;
}, 3000);

buttom.addEventListener('click',(e)=> //parara la ejecucion infinita
{
    clearTimeout(time);
    clearTimeout(interval);
})