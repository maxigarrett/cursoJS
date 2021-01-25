/*Traversing o atravesando
    sirve para recorrer los elementos de la pagina lo que seria el html OSEA EL DOM
*/
$(document).ready(function () {
    // ASCENDENTES osea va haci arriba buscando los padres del elemento que indiquemos
    // .parent(): devuleve padre directo seleccionado en este caso pintará el <ul>
    // $('span').parent().css('border','2px solid blue');

    // .parents(): todos los antecesores hasta html osea de la etiqueta que elegimos busca todos los padres hasta html
    // $('span').parents().css('border','2px solid blue');

    // .parentsUntil(): todos los antecesores hasta uno qiue especifiquemos pero el que especifiquemos no lo marcarà
    // en este caso pintra desde el span e irà hacia arriba hasta antes del div le pondra un borde a todo
    // $('span').parentsUntil('div').css('border','2px solid blue');

    // .closest(eiqueta): antecesor mas cercano con la etiqueta que especifiquemos
    // en este caso pintarà el <ul> ya que el antecessor del <span> es el <ul>  
    // $('span').closest('ul').css('border','2px solid blue');

    // -----------------------FIN ASCENDENTES-------------------------------------------------------------------------

    // DESENDIENTES

    // .children(): devuelve los hijos directos en este caso pintrarà todos los hijos del <li>
    // $('li').children().css('border','2px solid blue');
    // tambien puede ir con un parametro para especificarle que busque los hijos directos con children('i') y buscarà solo hijos
    // con elementos <i>
    // $('li').children('i.cur').css('border','2px solid blue');

    // // .find(): hijos que cumplan con una condicion.En este caso pintara un borde azul no importa si el hijo no es directo
    // // ya que <b> esta mas adentro y no es hijo directo del div pero no importa
    // $('div').find('b').css('border','2px solid blue');
    // --------------------FIN DESENDIENTES---------------------------------------------------------------------------------

    // HERMANOS
    // .siblings(): todos los hermanos, en este caso pintarà todos los hrmanos de <i> menos el <i>
    // $('i').siblings().css('border','2px solid blue');

    // next(), prev() hermanos siguinte o anterior pintarà el hermnao siguiente de <i>
    // $('i').next().css('border','2px solid blue');

    // nextAll():todos los siguientes de una etiqueta especificada, prevAll(): todo los hermanos previos
    // $('i').nextAll().css('border','2px solid blue');

    // nextUntil(): todos los siguientes hermanos hasta que espesifiquemos en que hermano detenerse no pinta al que 
    // especificamos donde detenerse solo pintara el <i> ya que la b lo sigue pero ahi se detiene y no lo pinta yel span
    // tampoco lo pinta osea pintara el siguiente a <span> y el anterior a <b> todos los que estan entre esos hgermanos
    // prevUntil():lo mismo que netUntil pero va hacia atras
    // $('span').nextUntil('b').css('border','2px solid blue');
    
    // FILTRADO
    // .has(), .not(),first(), last(), eq(numero)


    // AÑADIR ELEMENTOS A UNA SELECCION, NO LOS CREA.
    // .add(): entre parentesis selector,elemnto,html,seleccion,etc,es decir en este caso pintará tdos los span y los b
    // no tiene que haber relacion entre padre e hijo solo agregamos como querramos
    $('span').add('b').add('div').css('border','1px solid blue')




    

}); 