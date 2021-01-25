/*FILTRO DE SELECCION
    .has: opèra sobre elemento que contienen otros elementos inluidos en el has
    $("div.parrafos").has("p") esto devulve elementos div.parrafos que contiene parrafos dentro pero no devulve los p solo el
     div osea le decimos que solo nos devuelva solo los div que contienen p adentro

    .not: opera sobre elementos que no contiene otros elementos indicados en el not
     $("p").not(".importante")devuelve todos los elementos <p> que no tengan la clase importante

    .filter: operar en elementos que coinciden con la busqueda
     $("div.parrafos").filter(".importante")devuelve un <p> con la clase inportante

    .find: devuelve descendientes de un elemento
     $("p#primero").find("span")devuelve los span del parrafo que tiene como identificador primero

    .first,.last: devulve primer o ultimo elemento de una lista
     $("p").first() devuelve el primer parrafo

    .eq(numero): devuelve el elemento que coincide con la posicion indicada
     $("p").eq(2) devulve el tercer parrafo ya que arranca de 0 

*/ 
$(document).ready(function () {
     //ENCADENAMMIENTO DE SELECCIONES
    // EJEMPLO DE FIND()
    const elemento= $('#textos').find('p');
    console.log(elemento)//veremos la seleccion de todos los <p> desendientes del div

        // EJEMPLO DE FIND() y EQ() html() remplazamos texto de etiqueta que querramos
        const elemento2= $('div#textos').find('p').eq(0).html('cambio de texto');;
        console.log(elemento2)//veremos la seleccion de el primer <p> por el eq(0). y descendiente del div 


    
    
});