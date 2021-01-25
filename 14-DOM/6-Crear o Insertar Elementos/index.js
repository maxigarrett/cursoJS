/*DOM CREAR E INSERTAR ELEMENTOS
    
    Crear un elemnto:document.createElement(element) es lo mismo que crear una etiqueta
    
    Escribir texto en un elemento: element.textContent=texto
    Escribir HTMLen un elemento: element.innerHTML=codigo HTML
    
    Añadir un elemento al DOM: parent.appendChild(element/hijo)//paren se refiere al padre osea el nombre de la etiqueta padre
    
    Fragmentos de codigo: document.createDocumentFragment()
*/

const days=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    
const title=document.getElementById('title');
const daysList=document.getElementById('daysList');
const selectDays=document.getElementById('daysSelect');


//creamos elemento de tipo li osea etiqueta html li
const itemList= document.createElement('li');
// creamos una etiqueta link
const link=document.createElement('a');
// creamos atributo 
link.setAttribute('href','#');
// ponemos el a como hijo de li
itemList.appendChild(link);
//escribimos en el elemento con textContent que sirve para rescatar o insertar informaciono datos
link.textContent='lunes';

//añadimos este elemento a la lista la etiqueta padre es el ul capturado en la variable dayList. Entonces llamamos a la funcion 
// appendChild y por parametro le ponemos el hijo a introducir que lo tenemos almacenado en la variable itemList
daysList.appendChild(itemList);
console.dir(itemList);

//agregamos un SPAN al h1
title.innerHTML='DOM-<span>crear e insertar elementos 1</span>';



// -----------------------------------IMPORTANTE LEER LA FORMA INCORRCTA Y PORQUE ES INCORRECTA--------------------------
// ------------------------------FORMA INCORRECTA DE INTRODUCIR LOS DIAS DE FORMA INCORRECTA---------------------------------------------

// forma incorrecta ya que cada vuelta de bucle el arbol del dom se redibuja entero  porque cada vuelta estamos insertando html en 
// el DOM y es un gasto de recursos enormes del navegador.
//para eso se creo  Fragmentos de codigo: document.createDocumentFragment() para evitar que el navegador se sobrecargue para este
// tipo de operaciones
// for(const day of days )
// {
//     daysList.innerHTML+=`<li> ${day}</li>`//hay que poner += para ir agregando el valor anterior mas el nuevo sino solo se vera el ultimo
// }
// ---------------------------------------------------------------------------------------------------------------------------------



// -----------------------------------FORMA CORRECTA----------------------------------------------
// creamos nuestro fragmento de codigo que basicamente un fragmento de codigo es una variable o un contenedor donde nosotros vamos a 
// escribir todo el html que queremos inyectar en el documento y unva ves tenemos este html lo iuqe hacemos es inyectar de una ves 
// TODO el codigo de golpe y desta forma ahorramos muchos recursos al navegador.
const fragment=document.createDocumentFragment()
{
    for(const day of days )
    {
       
        // cada vuelta de bucle creamos un elemento li
        const itemList= document.createElement('li');
        const a=document.createElement('a');
        a.setAttribute('href','#');
        //y lo llenamos con el texto del array
        a.textContent=day;
        itemList.appendChild(a);
        fragment.appendChild(itemList);//metemos el contenido del itemlist en el fragmento
    }
} 
daysList.appendChild(fragment);//inyectamos codigo html de un solo saque
//-----------------------------------------------------------------------------------------------------------------------------



const fragment2= document.createDocumentFragment()
{
    // llenamos la etiqueta SELECT (despleglable) 
    for(const day of days)
    {
        //el option tiene el value que es la informacion que se envia no el texto en si por eso tenemos que piner el mismo nombre
        // en el value que lo que pusimos como texto para que se vea en la web por eso necesitamos un setAtribute para lograrlo
        const selectItem= document.createElement('option');

        //primer parametro el atributo y segundo el valor que es day el contenido del array toLowerCase para que sea simpre minusculas
        selectItem.setAttribute('value',day.toLowerCase());
        selectItem.textContent=day;
        selectItem.setAttribute('name','dias');
        selectItem.setAttribute('id','dias');
        selectItem.classList.add('dias');
        
        fragment2.appendChild(selectItem);
    }
}



selectDays.appendChild(fragment2);
