$(document).ready(function () 
{
    $('#button').click(function (e) { 
        e.preventDefault();
       const usuario= $('#nombreId').val();
        //el primer parametro ya lo sabemos pero el segundo le pasamos entre corchetes en este caso todos los valores
        // del input y le damos un valor de referecia en este caso nombre 
        $.get("servidor.php",{nombre:usuario},function (data) 
        {
            let dato=JSON.parse(data);
            console.log(dato);
            $('#info').append(dato);
        });
    });
});