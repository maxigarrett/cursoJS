/*OBJETO EVENTO:
    vive siempre y cuando aya un evento */
//EVENTO SOBRE EL FORMULARIO
const formu= document.getElementById('form');
const input= document.getElementById('input');
const button= document.getElementById('button');

//al escribir cuando salen las opciones para ver toda la informacion vemos que dice key: y la letra,es decir, que si hacemos
// un console.log(e.key) veremos solo las letras apretadas sirve por ejemplo para videojuegos para saber la letra que apreta
// o la flecha que apreta.... tambien para saber que letra apreto o bloquear algun caracter etc
// dentro de todo la informacion del evento la mas utilizada es target que es para saber donde se origino el evento
input.addEventListener('keyup',(e)=>
{
    // console.log(event);   muestra la tecla apretada con otras cosa pero no soporta todos los navegadores
    // console.log(e.key);

    // para acceder al evento con la depues en el desplegable es un array donde las posicion 0 contiene el inputy sale otras informacion
    // donde se encuentra el atribute que es una array que en su posicion 0 contiene informacion como su nodeValue que es de tipo text
    // donde la posicion 0 muestra o hace referencia al input que su node value tambien se encunyra
    //esto es para acceder a valores que estan muy escondidos caundo trabajemos con APIS como youtube entre otras
    console.log(e.path[0].attributes[0].nodeValue);
   console.log(e);


})


//---------------------------------------------EVENTO DE BOTON TARGET POR CONSOLA-------------------------------------------------------------------------------
    // muestra informacion de donde se origino el evento clic y demas coas por consola
button.addEventListener('click',(e)=>
{
    console.dir(e.target);
    input.value='has echo click';//con el value insertamos informacion previa al input
})
// ---------------------------------------------------------------------------------------------------------------------
const link=document.getElementById('link');
link.addEventListener('click',(e)=>{
    button.click();//pasamo el evento como funcion para que cuando haga clic ejecute lo que hace el evento del boton que programamos
})
//  button.click() si lo ponemos fuera de la funcion al recargar la pagina ejecutara el evento clic del boton programado mas arriba
// es decir forzamos el evento sin que el usuario haya echo clic



// ----------------------------------SABER EN QUE DIV DE LA GALERIA HICIMOS CLIC------------------------------------------
   
//podriamos hacer un bucle y agregarle un evento a cada div pero es mejor poner a la escucha al padre osea a la etiqueta
    // galelry y averiguar en que nodo o div hijo se ah echo clic
const gallery= document.getElementById('gallery');

gallery.addEventListener('click',(e)=>
{
    // si el que le damos clic al contenido devulve 1 que es el primer div entonces 
    if(e.target.textContent=='1')
    {
        e.target.classList.add('red');
    }
    console.log(e.target.textContent);//de esta forma hacemos clic en un div hijo y por consola te dice a cual hiciste clic
    
    
})
// -----------------------------------------------------------------------------------------------------------------------




// ----------------------------------------BOTON SUBMIT--------------------------------------------------------------
    // al dar clic en el boton submit el formulario se reinicia autoaticamente por lo que si queremos mostrar por consola 
    // no se vera nada porque el reinicio es muy rapido por lo que si usamos un metodo del objeto evento llamado  preventDefault
    // que sirve para decirle al evento que no se ejecute el evento por defecto en este caso el el submit
    formu.addEventListener('submit',(e)=>
    {
        //hacemos que el formulario no haga lo que tiene por defecto hacer anda para culaquiera que tengo un comportamiento predefinido
        e.preventDefault();
        console.log('se ha enviado el formulario')
    })
// ------------------------------------------------------------------------------------------------------------------------------------





// -----------------------------------------------FORSAMOS A QUE EL EVENTO SE DISPARE SIN HACER CLIC-------------------------
    // le pasamos el evento como funcion y se recarga la pagina constantemente podemos hacerlo con cualquier evento
    // formu.submit()

// --------------------------------------------------------------------------------------------------------------------------



// para mirar la informacion de click como el punto donde hicimos clic, muestra el target que hace referencia a dondea ocurrido
// el evento (el mas usado)
//el window es el objeto padre de JS si no lo ponemos anda igual
// window.addEventListener('click',(e)=>
// {
//     console.log(`ejeX:`+e.pageX);
//     console.log(` ejeY:`+e.pageY)
// })

