$(document).ready(function () 
{
    $('#button').click(function (e) 
    { 
        // e.preventDefault();
        $.getJSON("datos.json",function (data) 
        {
            console.log(data);
            let personas=[];
            let edadMenor;

            $.each(data, function (index, valueOfObject)
            { 
                const edad=valueOfObject.edad
                personas.push(edad);//metemos la edad de las personas dentro del array que estamos recorriendo en el bucle
                edadMenor=personas[0]//alamcenamos en edadMenor el priemr valor de personas que tiene las edades

                //ahora vamos a recorrer todas las edades no todo el objeto sino el array de edades llamado personas
                $.each(personas, function (index, edad) 
                { 
                    if(edad<edadMenor)//compramos a cada edad con edad menor
                    {
                        edadMenor=edad
                    }
                });
            });

            $('#info').text(`la edad menor es ${edadMenor}`);
        });
    });    
});