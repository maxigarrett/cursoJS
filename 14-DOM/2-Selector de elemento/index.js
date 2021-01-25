/*document.getElementById('id')- acceder a un elemento a travez de su id

document.|| element.querySelector('selector css')- accede al primer elemento que coincida con el selector css

document.|| element.querySelectorAll('selector css')- accede a todos los elementos que coincidan con el selector css, devulve un nodelist*/


// const title= document.getElementById('title');//capturamos el id del H1

// textContent nos permite leer o editar contenido de las etiquetas o nodos si borramos esto el html vulve a s estado natural
// title.textContent='Dom -accediendo a nodos';

console.dir(title);

// si pasamos el nombre de clase de los elementos de html dara como respuesta null osea pide por parametro un selector css por lo 
// tanto va el pnto despues el nombre de la clase .parrafo en este caso y podemos seleccionar el segundo parrafo con la pseudoclase
const parrafo= document.querySelector('.parrafo:nth-child(2)');
console.log(parrafo);
//accedemos al segundo parrafo que tiene la etiqueta span va sin punto.hace referenciaa ala etiqueta
const span= parrafo.querySelector('span');
console.log(span.textContent);//muestra el contenido del span


// accedemos al id de h1 y seleccionamos el primer elemento que se llame span que esta dentro del h1
const otrospan=document.getElementById('title').querySelector('span');
console.log(otrospan.textContent);


const parrafos=document.querySelectorAll('.parrafo');//esto se mostrara en el dom como un array pero no lo es
parrafos[0].style.color='red';//accdemos al elemento 0 que es el parrafo primero y le cambiamos el color


const parrafosSpread=[...document.querySelectorAll('.parrafo')];//lo hacemos array conspreat operator
parrafosSpread.map((p)=>p.style.color='green');//hacemos un map para recorrer el array de parrafos y lo modificamos cambiamos color


//utilizamos from que es mas sosportado por los navegadores
const parrafosArray=Array.from(document.querySelectorAll('.parrafo'));
parrafosArray.map((pa)=> pa.style.color='blue');


console.log(parrafos);

