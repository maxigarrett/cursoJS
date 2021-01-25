/*AJAX
/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto 
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status 

    nosotros hacemos peteicines a traves de la web a un servidor o nuve mediante la URL el navegador y como respuesta nos envia lo 
    que nosotros denominamos una pagina web(HTML,CS,JS,IMG,VIDEOS,ETC...) asi funcionan todas las web que no utilizan AJAX.

     Cuando nosotros utilizamos AJAX lo que estamos haciendo es interceptar esa respuesta para evitar que la pagina se recargue,es
     decir, que en ves de solicitar todo ese HTML,CSS,JS,ETC... mediante el protocolo http. Lo que hacemos es solicitar solo los 
     datos que precisamos y esos datos cuando llegan los guardamos en un OBJETO y de esta forma obtenemos los datos del servidor 
     pero no recargamos la pagina porque no estamos cargando esos datos en el navegador sino que los tenemos en un objeto y una ves
     que esta ahi trabajamos con ese objeto de la forma que necesitemos

AJAX
    es ASINCRONO es dcir cuando hacemos una peticion al servidor y esperamos una respuesta el navegador se queda cargando y hasta que
    no recibimos todos los datos no carga la pagina por ejemplo si tenenmos una conexion lenta hasta que no recibimos los datos no 
    podemos interactuar con la pagina ni verla eso seria SINCRONO ose la pagina va junto con las peticiones al servidor.
    lo que decimos que ajax es ASINCRONO es que la pagina se carga y todos lo datos de peticion al servidor lleguen mas tarde ya sea
    por la consulta requeire varios datos. entonces con ajax la pagina carga de igual manera osea funciona igual y ajax trabaja de
    manera ASINCRONA es decir q no esta sincronizado con la pagina, la pagina va por un lado y la peticion y los datos como respuesta
    van por otro entonces aunque los datos no lleguen la pagina sigue funcionando
*/



// EN ESTE EJEMPLO VAMOS A TRABAJAR CON UN PAGINA WEB(API) COMO BASE DE DATOS Y NO CON UNA BASE DE DATOS EN SI Y EN ESTA API AREMOS
// PETICIONES NORMALES O EN ESTE CASO PETICIONES AJAX   API: https://jsonplaceholder.typicode.com/users (TABLA DE USUSARIOS)
const button = document.getElementById('buttom');
const list= document.getElementById('list');

button.addEventListener('click',()=>
{
    let xhr;
    // para saber si el navegador esta actualizado o es viejo. En el if consultamos si es nuevo (devulve true) mayor a la version 11
    // si en la consola del navegador ponemos 'XMLHttpRequest' in(operador para preguntar) windows y devulve true, entonces soporta
    // el objeto XMLHttpRequest sino soporta utilizamos ActiveXObject
    if(window.XMLHttpRequest)
    {
        // vamos a crear el objeto para guardar la respuesta al servidor y por convecion se lo llama xhr
        xhr= new XMLHttpRequest();
    }
    else
    {
        //caso de que sea un Internet Explorer desactualizado version 8 o 9 se gaurdara este objeto
        xhr= new ActiveXObject("Microsoft.XMLHTTP");
    }
    // ALMACENA UN OBJETO DE TIPO DE LA VERSION QUE TENGAMOS Y EMPESAMOS A TRABAJAR

     //este metodo del objeto XMLHttpRequest recibe dos parametros el primero es el tipo de metodo de peticion que puede ser
        // GET, POST, DELETE,ETC y  el segundo parametro pondremos la direccion de la api es este caso pero se suele poner la 
        // direccion del archivo PHP O CALQUIER LENGUAJE DE BACK END COMO JAVA PHYTON,ETC
        
        xhr.open('GET','https://jsonplaceholder.typicode.com/users');

        // antes de enviar con SEND tendremos que enviar la instruccion que tiene que hacer con los datos para que cuando envie
        // con SEND ya sepa lo que tiene que hacer con los datos y esto porque:
            // AJAX es asincrono osea no funciona en orden es decir no esta sincronizado con la pag web en este caso. Nosotros
            // hacemos la peticion y esa peticion va a tardar unos milisegundos/segundos entonces desde que hacemos la peticion a
            // recibir los datos  hacemos un EVENTO DE ESCUCHA pasa ssaber cuando la info a llegado y este evento es LOAD que se 
            // dsipara cuando toda la informacion ya ah llegado al objeto y esa info la guardamos en una variable(peticion)
        xhr.addEventListener('load',(peticion)=>
        {
            //vemos toda la info y a nosotros lo que nos interesa es el traget osea donde se origino el evento y nos dira la 
            //url la informacion rescatada, etc todo esto lo dice con la propiedad response(ya tenemos la info rescatada de la API)
            // response(significa respuesta) pero la respues devulve un String y nosotros queremos trabajar con esto por lo que 
            // queremos un objeto para saber el tipo solo ponemos console.log(typeof peticion.target.response);
            console.log(typeof peticion.target.response);

            // para pasarlo o convertir un String a un objeto o JSON(Jaba - Script - Objet - Notation )
            console.table(JSON.parse( peticion.target.response));

            //guardamos en variable lo que devulve la peticion a la API. osea PETICION(la variable del evento load donde se guarda
            // la peticion), TARGET(obtenemos la infirmacion del evento y se ve la propiedad response con los datos), 
            // RESPONSE(nos muestra la respuesta de la informacion de usuarios de la API consultada)
            let dataJSON= JSON.parse(peticion.target.response);

            
            for(let infoUsuarios of dataJSON)
            {
                let listItem= document.createElement('li');
                listItem.textContent=`${infoUsuarios.id} - ${infoUsuarios.name}`;
                
                list.appendChild(listItem);
            }
            
        })
        

        xhr.send();
    
})