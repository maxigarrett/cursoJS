/*AJAX POST
    FETCH API: es el remplazo moderno del XMLHTTPREQUEST.

    por post se utiliza para insertar datos en una base de datos o en alguna API o en algo

    Para hacer peticiones POST, fetch admite un segundo parametro.

Sintaxis:
    fetch(URL,
        {
            method:'POST', 
            body: los datos que enviamos. SI es un objeto hay que convertirlo con JSON.stringify(datos),
            header:
            { 
                cabecera de informacion sobre lo que estamos enviando. y no son los mismos headers cuando enviamos un JSON,que con una 
                imagen,o un fomulario, etc son muchisimas las cosas que van en el header
                https://www.developer.mozilla.org/es/docs/web/HTTP/headers (link para ver las diferentes cabeceras que se pueden enviar)
            }
       })


       TRABAJAREMOS CON JSONPLACEHPDER LA API DE LA WEB https://jsonplaceholder.typicode.com/guide.html
     */



const button= document.getElementById('buttom');
const list=document.getElementById('list');


button.addEventListener('click',(e)=>
{
    const newPost=
    {
        title:'A new Post',
        body:'kandknfskdnfñlkndlkfnldsknf',
        userId: 1
    }
 
    // a la hora de enviar un objeto como en el get que ya vimos tenemos que convertirlo a JSON ya q al enviarlo para poder verlo necesitamos
    // convertirlo para que JS pueda entenderlo y en este caso la API lo pueda interpretar. el objeto que enviemaos a la API se lo pasamos
    // en formato texto que la API ya convertira con sus metodos a un formato de objeto que ella pueda entender(inportante al enviar Objetos)

    // console.log(JSON.stringify(newPost));//lo mostramos en formato String al objeto newPost

    fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method:'POST',//tipo de metodo que vamos a utilizar
        body: JSON.stringify(newPost),//lo pasamos a formato JSON 
        headers: 
        {
            // tipo de contenido que informa a la API de que estamos envienado un objeto en formato JSON y esa API ya sabra lo que tiene
            // que hacer con eso
            "Content-Type":"application/json"
        }
    }).then(res=> res.json()).then(res=> console.log(res))
})


