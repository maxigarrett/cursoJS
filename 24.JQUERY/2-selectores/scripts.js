$(document).ready(function () {
    // SELECTORES A PARTIR DE SU ETIQUETA
    // indicamos entre parentesis la etiqueta entre comillas seguido del dolar $('p')

    // $('p#identificador') es mejor especificar a la etiqueta con el id a acceder para acortar la busqueda a JQuery


    //$('#identificador')seleccion de elementos por su identificador ID

    // $('.clase') por su clase se llama igual que al CSS

    // $('p[name: valor]') seleccionar elemento por su atributo con su valor

    // $('a[target:'_blank']') seleccionar elemento por su pseudoSelectores

    //guardamos en  variable todos los parrafossolo guarda los declarados en el momento si agregamos mas no se guardaran
    const parrafos=$('p'); 

    // EVENTOS igual a JAVASCRIPT NORMAL EXISTEN PARA EL RATON COMO CLIC TECLADO COMO KEYPRESS O FORMULARIO COMO SUBMIT,CHANGE
    // O DOCUMENTO COMO LOAD,RESIZE,SCROLL
    // $(parrafos).click(function (e) { 
    //     e.preventDefault();
    // });


    // EVENTODE ENTRADA Y SALIDA DELMAUSE
    $('p').mouseover(function () { 
        // $('p').addClass('rojo');//todos los parrafos
        $(this).addClass('rojo');//en el parrafo que nos encontramos y asi no se pintan de color rojo todos
    });

    $('p').mouseout(function () { 
        // $('p').removeClass('rojo'); todos los parrafos
        // $('p').addClass('negro'); todos los parrafos
        $(this).removeClass('rojo');
        $(this).addClass('negro');
    });
    // ---------------------------------------------------------------------------------

    // AL HACER CLIC EN UN PARRAFO
    // seleccion por id
    $('p#primero').click(function (e) { 
        e.preventDefault();
        alert('Pulsaste en el primer parrafo')
    });

    // seleccion por clase
    $('p.inportante').click(function (e) { 
        e.preventDefault();
        alert('parrafo inportante')
        
    });

});

