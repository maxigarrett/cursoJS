$(document).ready(function()
{
    $('#botonEnviar').click(function (e) { 
        e.preventDefault();
        // removemos la la clase alert que muestra el mensaje de error en un campo porque cada vez que hacemos clic
        // aparece muchos mensajes y se rompe la maquetacion del formulario osea se borra el div completo
        $('.alert').remove();

        const nombre=$('#nombre').val();
        const correo=$('#correo').val();
        const asunto=$('#asunto').val();
        const mensaje=$('#mensaje').val();

        if(nombre==""|| nombre==null)
        {   cambiaColor("nombre");

            // mostramos el mensaje de alerta
            mostrarAlerta('debe llenar el campo con su nombre')

            return false;//rompemos el codigo para que salga
        }else
        {
            const regEx=/^[a-zA-Z]{4,10}$/gi;
            if(!regEx.test(nombre))
            {
                cambiaColor('nombre');
                mostrarAlerta('en el nombre minimo 4 caracteres, sin caracteres especiales ni numeros');
                return false
            }
            else
            {
                colorDefecto('nombre');
            }
        }

        // VALIDAMOS EL CORREO
        if(correo==""|| correo==null)
        {   cambiaColor("correo");

            // mostramos el mensaje de alerta
            mostrarAlerta('debe llenar el campo con su correo')

            return false;//rompemos el codigo para que salga
        }else
        {
            const regEx=/^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regEx.test(correo))
            {
                cambiaColor('correo');
                mostrarAlerta('correo no valido');
                return false;
            }else
            {
                colorDefecto('correo');
            }
        }
        

        // VALIDAMOS EL ASUNTO
        if(asunto==""|| asunto==null)
        {   cambiaColor("asunto");

            // mostramos el mensaje de alerta
            mostrarAlerta('debe llenar el campo con su asunto')

            return false;//rompemos el codigo para que salga
        }else
        {
            const regEx=/^[a-zA-Z]{10,20}$/;
            if(!regEx.test(asunto))
            {
                cambiaColor('asunto');
                mostrarAlerta('el asunto debe ir sin caracteres especiales 20 caracteres maximo');
                return false;
            }
            else
            {
                colorDefecto('asunto');
            }
        }

        // VALIDAMOS MENSAJE
        if(mensaje==""|| mensaje==null)
        {   cambiaColor("mensaje");

            // mostramos el mensaje de alerta
            mostrarAlerta('debe llenar el campo con su mensaje')

            return false;//rompemos el codigo para que salga
        }else
        {
            const regEx=/^[a-zA-Z0-9]{10,150}$/;
            if(!regEx.test(mensaje))
            {
                cambiaColor('mensaje');
                mostrarAlerta('el mensaje debe tener minimo de 40 caracteres y maximo de 150');
                return false;
            }else
            {
                colorDefecto('mensaje');
            }
        }

        $('form').submit(function (e) { 
            e.preventDefault();
            return true;
        });

    });

    // FUNCIONES

    // creamos una funcion por defecto que tenga el color inicial del formulario el borde verde en los input 
    const colorDefecto=(dato)=>
    {
        $(`#${dato}`).css({border:"1px solid #999"})  
    }

    // creamos una funcion para cambiar el color a su bordes de los input
    const cambiaColor=(dato)=> 
    {
        // concatenamos el selector # con el nombre  de id que le pasemospor parametro cuando llamemosla funcion
        $(`#${dato}`).css({border:"1px solid #dd5144"})   
    }


    // FUNCION DE MENSAJE DE ALERTA SI HAY ALGO MAL EN EL CAMPO DE INPUTS
    const mostrarAlerta=(texto)=>
    {
        $('#nombre').before("<div class='alert'>Error "+texto+"</div>")
    }
});