/*
MATCH MEDIA
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia
 
    mql = window.matchMedia(mediaQueryString)
 
    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS pasarla entre comillas y entre parentesis la media query
    sino no funciona
*/


// console.log(innerWidth)es lo uqe se usaba antes pero no es recomendable para resposibe


//si coincide con esa mediaquery la propiedad matches por consola pondra true otro parametro le ponemos que la orientacion 
// tiene que ser landscape osea como esta el dispositivo esto es otra propiedad de CSS y landscape es cuando el dispositivo
// esta en horizontal osea el ancho es mayor que el largo
const mql=matchMedia('(min-width:400px) and (orientation: landscape)');

console.log(mql)

const aplicarMatchMedia=(mql)=>
{
    // ternario si matches ==true pondra rojo el body caso contrario blue(nunca hacer esto de los estilos agreagr clases es mejor)
    mql.matches ?    document.body.style.background='red': document.body.style.background='blue'

}


addEventListener('resize',()=>
{
    aplicarMatchMedia(mql);
})
addEventListener('DOMContentLoaded',()=>
{
    aplicarMatchMedia(mql);
})


// aplicarMatchMedia(mql)//para que al cargar la pagina llame a la funcion y aplique los estilos sino quedaran puestos los de 
// // por defecto es mejor ponerlo en el evento DOMContentLoaded