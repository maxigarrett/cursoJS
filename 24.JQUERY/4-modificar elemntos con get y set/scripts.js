$(document).ready(function () {
    // EXTRAER INFORMACION DE UN ELEMENTO - GET
    const infoElemento=$('p#primero').html()//extraigo codigo html
    console.log(infoElemento);

    const infoElemento2=$('p#primero').text()//extraigo texto del la etiqueta seleccionada
    console.log(infoElemento2);

    const infoElemento3=$('input').val()//extraigo el valor de un input
    console.log(infoElemento3);


    
    // MODIFICAR/AÑADIR INFORMACION DE UN ELEMENTO - SET
    $('p#primero').html('<p>texto nuevo</p>');//introducir codigo html
    $('p#primero').text('texto nuevo2');//introducir texto
    $('input').val('texto nuevo en input');//introducir texto en input

    // -------------------------------------------------------------------------
    // EXTRAER INFORMACION DE IUN ATRIBUTO
    console.log($('a').attr('href'))//nos mostraria el valor de href de la etiqueta <a>

    // MODIFICAR INFORMACION DE ATRIBUTO - SET DEL A
    $('a').attr('href', 'todoslosenlances.html');//un solo atributo osea el href
    
    // varios atributos
    $('a').attr({//varios osea el href y el tilte
        title:'todos los enlaces',
        href:'todoslosenlaces.html',
    });
    // ---------------------------------------------------

    // CALLBACKS: los metodos text,html,val,attr tienen una funcion callback con dos paprametros: el indice actual en la lista
    // de elementos, y el valor original
    $('button#cambiar').click(function (e) { 
        e.preventDefault();
        //el i es a elemento que nos referimos y es [0] porque solo un <a>si hay mas los recoje tambien y original le decimos
        // que agarre el atributo que tiene originalmente que en este caso es href y le añadimos algo
        $('a').attr('href', function(i,original)
        {
            return `${original}/nuevo index ${i}`
        });
    });

});