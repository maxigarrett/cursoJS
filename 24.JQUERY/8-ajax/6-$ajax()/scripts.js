$(document).ready(function () 
{
    $('#button').click(function (e) { 
        e.preventDefault();
        $.ajax(
        {
            type: "GET",//tipo de metodo GET, POST,ETC
            url: "datos.json",//peticion a un recurso ya se aun documento una api una foto unn servidor ,etc
            dataType: "json",//tipo de datos que vamos a recibir
            success:function(datos)//se ejecuta en caso de quw todo salga correctamente 
            {
                if($('#info').html()=="")//si ya hay info a la hora de clic del boton no mostrar de nuevo info repetida
                {
                    console.log(datos)//mostrara los datos
                    $.each(datos, function (index, valueOfObject)
                    { 
                        $('#info').append(`<p>${valueOfObject.nombre} ${valueOfObject.apellido}</p>`);
                    });
                }

            },
            error: function (xhr,status,error)
            {
                console.log(xhr,status,error)
            }

        });
    });
});