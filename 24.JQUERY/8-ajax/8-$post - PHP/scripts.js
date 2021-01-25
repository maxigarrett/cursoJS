$(document).ready(function () 
{
    $('#enviar').click(function (e) { 
        e.preventDefault();
        let nombre=$('#nombre').val();
        let apellido=$('#apellido').val();

        $.post("servidor.php",
        {
            nombre:nombre,
            apellido:apellido
        },function (data) {
            $('#info').text(data); 
        });
    });
});