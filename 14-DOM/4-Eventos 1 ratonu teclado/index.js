/*EVENTOS
    un evento es cualquier cosaque sucede en nuestro documento. un evento no solo es la interaccion del usuario, hay eventos que se 
    ejecutan por el echo de solo abrir la pagina por ejemplo:
        . El contenido se ha leido
        . cuando el contenido se ha cargado,es decir, cuando todas las imagenes y css,videos,audio,etc se a descargado y listo
        para usarse se dispara otro evento.
        .cuando el usuario mueve el raton
        .el usuario pulsa una tecla es un evento
        .la ventana se ha cerrado,etc,etc,etc.......
        
Modo viejo de tratar los eventos SINTAXIS:
    <p onclick="saludo()"> soy un parrafo></p> 
    
    .norecomendable ya que se mezclan lenguajes por temas de mantenimiento, compatibilidad,
    .si queremos que se ejecute un evento y ejecute varias cosas de este modo es dificil de hacer y depurar es dificil
    
    valido en angular es medio parecido peroso solo en angular
    <p (click)="saludo()"> soy un parrafo></p> 

Forma correcta de hacerlo
    Element.addEventListener('event',callback o funcion)
    element: la variable donde capturamos el id
    addEventListener: evento que se pone a la escucha de un a tecla o click etc
    'event': aca va el evento que queramos como 'click' o evento de teclado,etc
    collback: funcion anonima que se ejecuta cuando se dispara el evento.

-------------------------------------------------------------------------------------------------------------------------

Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón

Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

const boton=document.getElementById('button');
const box=document.getElementById('box');
const input=document.getElementById('name');

//click
boton.addEventListener('click',()=>
{
    console.log('click');//imprime por consola el mensaje clic cada ves que hacemos clicl en el boton
})

// doble clic
boton.addEventListener('dblclick',()=>
{
    console.log('DOBLE CLICK');
})

// ---------------------------------------MAUSEENTER  MAUSELEAVE--------------------------------------------------------------------------------------
// cuando entramos a la zona que tiene el evento con el mause
box.addEventListener('mouseenter',()=>
{
    // box.style.backgroundColor='green'; forma incorrecta hay cre crear una clase en css co color de fondo y llmarla
    //la clase que llamamos aplica color de fondo rojo
    box.classList.add('green');//(FORMA RECOMENDADA)
    // box.classList.replace('red','green');
})

// cuando salimos de la zona que tiene el evento con el mause
box.addEventListener('mouseleave',()=>
{
    box.classList.remove('green');//cuando salimos del div hacemos que quite la clase porque por cascada quedara en green por el css
    box.classList.add('red');//lo volvemos su color original

    // FORMA MAS SENCILLA REMPLAZAMOS LA CLASE QUE EXISTE(GREEN) POR LA OTRA(RED)
    // box.classList.replace('green','red');
})

// ---------------------------------------------------------------------------------------------------------------

// -----------------------------------------MAUSEDOWN MAUSEUP SE UTILIZA PARA ARRASTRAR COSAS PARA COLOCAR UN ELEMENTO------------------------------------------------------------------------------

box.addEventListener('mousedown',()=>
{
    console.log('pulsaste en la caja');
})

box.addEventListener('mouseup',()=>
{
    console.log('soltaste el boton del mause en la caja');


})
// -----------------------------------------------------------------------------------------------------------------


// --------------------------------------MAUSEMOVE------------------------------------------------------------------

box.addEventListener('mousemove',()=>
{
    console.log('estas moviendo el ratos');
}
)
// -----------------------------------------------------------------------------------------------------



// ---------------------------------------KEY DOWN----------------------------------------------------
input.addEventListener('keydown', ()=>
{
    console.log('has pulsado una tecla');
})
// ----------------------------------------------------------------------------------



// ---------------------------------------KEY UP----------------------------------------------------
input.addEventListener('keyup', ()=>
{
    console.log('has soltado una tecla');
})
// ----------------------------------------------------------------------------------




// ---------------------------------------KEY PRESS----------------------------------------------------
input.addEventListener('keypress', ()=>
{
    console.log('estas pulsado una tecla');
})
// ----------------------------------------------------------------------------------