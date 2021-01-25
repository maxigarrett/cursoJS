$(document).ready(function () 
{
    $('#button').click(function (e) 
    { 
        // e.preventDefault();
        $.getJSON("datos.json",function (data) 
        {
            console.log(data);
            // le pasamos data.emepleados que es el objeto que vamos a recorrer 
            $.each(data.empleados, function (index, valueOfObject) 
            { 
                // console.log(valueOfObject.empleados)
                $('#list').append(`<li>${valueOfObject.nombre} : ${valueOfObject.sueldo} </li>`);        
            });
        });
    });    
});