/*ESPACIO DE NOMBRES
    $.fn - Cuando usamos selecciones utilizando metodos del espacio de nombres $.fn y forman parte del objeto Jquery.
    ejemplo: $("#div") este seria un selector de un elemento de html
    
ESPACIOS DE NOMBRES
    $ - Cuando no usamos selecciones, utilizamos metodos del espacio de nombres $, y forman parte del nucleo del objeto Jquery
    ejemplo: $.each o Jquery.each osea no utilizamos la seleccion de elementos del html por su id
    OJO, hay metodos de $.fn y de $ con el mismo nombre pero son diferentes..
*/
$(document).ready(function () {
    //recorrer y manipular elementos de un array/objeto
    // el $each por primer parametro le pasamos el array a recorrer y como segundo parametro una funcion que esta tiene como
    // primer arguemento el indice osea la posicion del elelemnto del array y como segundo arhuemento el elemento osea lo q 
    // contiene en cada posicion del array
    // espacio de nombres $: $.each(array/obj,function(indice,elemento{})) este es un iterador q devuelve array ooriginal

    // igual que each pero primero va elemento y despues el indice
    // $.map(array/obj,function(elemento,indice{})) modifica los elementos, devuelve array nuevo basado en original con los cambios

    // --------------FIN EXPLICACION---------------------------------------


    // objetos: utilizando pares: clave -valor
    const obj={"nombre":"MAXI","apellido":"GARRETT"};
    //                       clave              valor
    $.each(obj, function (indiceDelArray, valorDeElemento) { 
         console.log(`indiceDelArray o clave: ${indiceDelArray} / valor: ${valorDeElemento}`)
    });
    // --------------------------------------------------------------------

    console.log('');
    console.log('recorremos un array normal');
    const array=[1,2,3,5];
    $.each(array, function (indiceDelArray, valorDeElemento) { 
        console.log(`indiceDelArray : ${indiceDelArray} / valor: ${valorDeElemento}`)
   });
   console.log("numero de elementos del array"+array.length);
    //----------------------------------------------------------

    // BUSCAMOS VALOR DE UN ARRAY
   console.log('');
   console.log('Buscamos valor de un array');
    //inArray: devuelve el indice de un valor en un array, o -1 si el valor no se envuentra en el array
    if($.inArray(3,array)!=-1)
    {
        console.log(`Array encontrado en la posicion ${$.inArray(3,array)}`);
    } else console.log('el valor no se encuentra');  

    // ------------------------------------------------------------------------


    // UNIMOS DOS ARRAYS
    // $.merge([1,2,3],[4,6,7,8]);
    // -------------------------------------------------------------------------------------


    // RECORREMOS UN ARRAY DE ELEMENTOS DE UN SELECTOR
    console.log('');
    console.log('recorremos un array de elementos de un selector');
    $('#button_recorrer').click(function (e) { 
        e.preventDefault();
        $('li').each(function () {
            console.log($(this).text())//con this hace referencia al q hacemos clic
            
        });
        console.log(`numero de elementos de los <li> ${$('li').length}`);
    });
    // --------------------------------------------------------------------------


    
    // EXTRAER ELEMENTO DE UNA POSICION
    // .get(num): Extraer el elemento de una posicion
    console.log('');
    console.log(' EXTRAER ELEMENTO DE UNA POSICION');

    const element=$('li').get(2);
    console.log(`elemnto extraideo de la posicion y es de tipo ${element.nodeName} y contiene ${element.textContent}`)


    // EXTRAER EL NUMERO DE ELEMENTOS RESPECTO A SUS HERMANOS 
    console.log('');
    console.log('EXTRAER EL NUMERO DE ELEMENTOS RESPECTO A SUS HERMANOS ');

    $('li').click(function (e) { 
        e.preventDefault();
        console.log(`has pulsado el elemento ${$(this).index()}`)
    });

    // get(): BUSCAR UN ELEMENTO QUE CUMPLA CON UNA CARACTERISTICA
    console.log('');
    console.log(' BUSCAR UN ELEMENTO QUE CUMPLA CON UNA CARACTERISTICA');
    // a grep como primer parametro le pasamos la etiqueta o elemento a recorrer y segundo parametro un a funcion
    // gerp devuelve true o false
    const filtrado=$.grep($('li'),function (elemento,indice){
        return indice>1;//devolver los elementos mayor que 1 y los guarda en la constante filtrado
    })
    $.each(filtrado,function(indice,elemento)//recorremos el array filtrado que devulve los li mayor a la posicion 1
    {
        console.log(`indice ${indice} valorElemento ${elemento.textContent}`);//mostrara elemento 3 y 4 porque so mayores a 1
    })


    // $.makeArray(array): CONVERTIR UN ARRAY JQUERY EN UN ARRAY JAVASCRIPT
    console.log('');
    console.log('CONVERTIR UN ARRAY JQUERY EN UN ARRAY JAVASCRIPT');
    let arrayJS=$.makeArray($('li'));//le pasamos como array todos los l1

    //ahora podemos tratar los array con metodos de JS para array por ejemplo darlos vuelta con reverse
    arrayJS.reverse();
    //lo recorremos con array 
    arrayJS.forEach(element => {
        console.dir(element.parentElement.children[1])
    });
});

