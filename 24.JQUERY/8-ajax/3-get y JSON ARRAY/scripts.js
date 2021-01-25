$(document).ready(function () 
{
    $('#button').click(function (e) 
    { 
        e.preventDefault();
        $.get("datos.json", function (data) 
        {
            console.log(data);
            // para que cada vez que se precione el boton no se repita preguntando si no contiene nada que imprima nombres
            if($('#info').html()=="") //$('#info').is(":empty") preguntamos si el elemento div esta vacio(empty)
            {
                $.each(data, function (indexInArray, valueOfElement)
                { 
                    // cada vulta de bucle el primer parametro de la funcionmuestra la posicion y el segundo parametro el valor
                    console.dir(`${indexInArray}  ${valueOfElement.nombre} ${valueOfElement.apellido}`) 
    
                    $('#info').append(` ${valueOfElement.nombre}  ${valueOfElement.apellido} ${valueOfElement.edad} <br>`);
                });
            }
        });
    });
});


