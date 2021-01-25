$(document).ready(function () {
    $('#info').click(function (e) { 
        e.preventDefault();
        // peticion hacia un recurso en este caso un documento de texto
        // primer parametro la ruta del documento segundo parametro la funcion que devuelve el estado yla informacion
        // de la peticion
        $.get("documento.txt",function (data, textStatus, jqXHR)
        {
            console.dir(`data: ${data}, status ${textStatus}, jqXHR ${jqXHR}`) ;     

        });
    });
});