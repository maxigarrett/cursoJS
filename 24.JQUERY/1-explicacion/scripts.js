/*JQUERY
    es una libreria de javaScript que nos permite escribir menos y hacer mas.
    hace mas sencillo el uso de JS , reduce el codigo. 
    simplifica el trabajo con DOM y AJAX

Hay dos versiones de jQuery disponibles para descargar:

Versión de producción: es para su sitio web en vivo porque ha sido minimizado y comprimido
Versión de desarrollo: esto es para pruebas y desarrollo (código descomprimido y legible)
Ambas versiones se pueden descargar desde jQuery.com .

La biblioteca jQuery es un solo archivo JavaScript, y usted hace referencia a él con la <script>etiqueta HTML 
( <script>tenga en cuenta que la etiqueta debe estar dentro de la <head>sección)

Si no desea descargar y alojar jQuery usted mismo, puede incluirlo desde un CDN (Content Delivery Network).

Tanto Google como Microsoft alojan jQuery.

Para usar jQuery de Google o Microsoft, use uno de los siguientes:
GOOGLE CDN:
    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>
MICROSOFOT CDN:
    <head>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    </head>

VENTAJAS DE USAR JQUERY ALOJADO EN GOOGLE O MICROSOFT
    muchos usuarios ya han descargado jQuery de Google o Microsoft cuando visitan otro sitio. Como resultado, se cargará 
    desde la memoria caché cuando visiten su sitio, lo que lleva a un tiempo de carga más rápido. Además, la mayoría de las 
    CDN se asegurarán de que una vez que un usuario le solicite un archivo, se le servirá desde el servidor más cercano, 
    lo que también lleva a un tiempo de carga más rápido.

SINTAXIS
    La sintaxis básica es: $ ( selector ). acción ()

    Un signo $ para definir / acceder a jQuery
    A ( selector ) para "consultar (o buscar)" elementos HTML
    Una acción jQuery () que se realizará en el elemento (s)
*/ 


// esperar la carga de ahtml antes de ajecutar el codigo jquery
// con $accedemos entre parentesis a un elemento html en este caso el documento ready y dentro una funcion anonima
// dentro de esta ejecutamos el codigo
$(document).ready(function()//FUNCION ANONIMA
{
    alert("Pagina cargada correctamente")
});

// OTRA FORMA DE ESCRIBIR JQUERY CON FUNCION CON NOMBRE
$(document).ready(inicio)
function inicio()
{
    alert('Pagina cargada correctamente con funcion aparte')
}


// VERSION REDUCIDA
$(function()
{
    alert('CON VERSION REDUCIDA')
})