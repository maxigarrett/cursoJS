$(document).ready(function () {
    // .apend/.prepend: añade/mueve elementos como hijos 
    // .before/.after: añade/mueve elementos como hermanos

    alert('creamos estructura con append/prepend/before/after');
    // con apend tenemos que escribir la etiqueta que nosotros queremos crear y añadir en javascrip puro era documentCreateElemnt()
    $('div#divisito').append("<div class='hijo' 1 append</div>")
            .prepend("<div class='hijo' 2 preppend</div>")
            .before("<div class='hermano'1 before</div>")
            .after("<div class='hermano'2 after</div>");



    alert('movemos el primero al final');
    // $(elemnto)appendTo(destino): mueve un elemento al destino que nosotros le digamos osea el primero <li> lo mueve
    // al destino dentro del <ul> ya que append como appendTo coloca los elementos al final
    $('ul li:first').appendTo('ul');

    alert('movemos otra vez el primero al ultimo');
    // movemos el primero al final otra vez con append()
    // $(elemnto)append(elemento) le tenemos que pasar el elemento no solo el selector sino copiaria texto si ponemos solo
    // ul li:first con append a diferencia de appendTo se ubica al reves en el codigo
    $('ul').append($('ul li:first'));



    // CLONAR
    alert('CLONAMOS ELEMENTO');
    //ahora clonamos el primer elemento li y lo pkenmos como ultimo hijo
    $('ul li:first').clone().appendTo('ul');


    //CREAMOS ELEMENTOS
    let enlace=$("<a href='http://www.google.com' mi enlace</a>");

    let enlace2=$('<a/>',{//este lo añadimos com appendTo() de esta forma solo me anda con las otras no osea las crea pero no muestra
        html:'mi <strong>otro</strong> enlace',
        "class":"nuevo",//calss entre comillas
        href:"http://www.google.com"
    });

    enlace3=$("<a href='http://www.google.com' mi enlace</a>");

    alert('añadimos el primer enlace');
    $('p').append(enlace);//compiamos el enlace a la etiqueta <p>

    alert('añadimos el segundo enlace');
    enlace2.appendTo($('p'));//utilizamos la seleccion de la etiqueta (este solo me funciona)

    alert('añadimos tercer enlace despues del ul AFTER');
    enlace3.insertAfter("ul");//se coloca como hermano del ul

    $('li').after("<li> nuevo item </li>");//crea y añade a la vez lo hace despues de cada item mete uno nuevo

    // BORRAMOS ELEMENTOS
    // $(elemento).remove(): elimina el elemento y sus hijos
    alert('borramos su elemento con los hijos en este caso el ul con sus li');
    $('ul').remove();

    //$(eleemnto).empty(): borra el contenido(hijos) del elemnto seleccionado
    alert('borramos los hijos del elemnto seleccionado pero conserva el padre seleccionado');
    $('div.origen').empty();


    
});