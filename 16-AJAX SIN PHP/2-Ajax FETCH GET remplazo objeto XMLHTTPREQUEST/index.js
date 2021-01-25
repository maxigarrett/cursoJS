/*AJAX
    FETCH API: es el remplazo moderno del XMLHTTPREQUEST.

    se utiliza mayormente para hacer peticiones a servidores  o a APIs pero es muy potente y se utilizan para mas cosas con los metodos
    que se describen a continuacion

    fetch nos proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas, es decir,
    basicamente y muy por encima a modo de resumen lo que hace es encapsular o envolver todo el tema de las promesas y trabaja internamente
    con promesas(objeto que tiene dos callback adentro por parametros) osea que cunado ponemos fetch el internamente ya está creando una 
    promesa, esta creando el callback del reject,resolve(parametros de promesas) , response; osea que fetch nos facilita la escritura de 
    codigo ahorrando codigo.

    tambien provee un metodo global fetch() que proporciona una forma facil y logica de obtener recursos de forma asincrona por la red

    Está basado en promesas, por lo cual tiene un response(respuesta) y un reject internos(parametro de promesa)

    response tiene varios metodos:
        ArrayBuffer() - archivos binarios en bruto(mp3, pdf , jpg, etc...) se utiliza cuando se necesita manipular el contenido del archivo
        blob() - archivos binarios en bruto(mp3, pdf , jpg, etc...) se utiliza cuando no se necesita manipular el contenido y se va a 
        treabajar con el archivo directamente.
        clone() -  crear un clone de objeto de respuesta, identico en todos los sentidos, pero alamcenado en una variable diferente.
        formData() - se utiliza para leer los objetos formData.
        json() - convierte los archivos json en objetos JavaScript.
        text() - se utiliza cuando queremos leer un archivo de texto. siempre se codifica en UTF-8
     */



const button= document.getElementById('buttom');
const list=document.getElementById('list');


button.addEventListener('click',(e)=>
{
    // verificamos si es compatible con fetch nuestro navegador
    if(window.fetch!= undefined)
    {
        console.log('Es compatible con fetch');
    }
    else  console.log('Es compatible con fetch');

    //FETCH por defecto si trabajamos con url el metodo es siempre GET
    fetch('https://jsonplaceholder.typicode.com/users')
    //como fetch trabaja internamente con promesas tiene internamente un resolve y reject y q para acceder a la informacion necesitamos
    // el then para poder rescatar el value de la informacion osea el valor ya q con promesas veine todo encapsulado
    // por lo tanto el resolve se ejecutara si todo va bien y obtuvimos respuesta de la consulta que hacemos de la API que consultamos
    // si desplegamos la consola y resivimos correctamente los datos mostrara la propiedad OK=true y STATUS=200 si falla será
    // OK=false y STATUS=404
        // .then(res=> console.table(res.json())) //para que muestre los datos pero no lo podemos leer los datos sin json() pero verificamos 
        //comprobamos el response si es OK=true si es true entrara por el resolve que significa que todo va bien sino por el reject
        // esto seria nuestra linea de seguridad para comprobar si se ejecuto bien  o no la consulta
        .then(res=> res.ok==true ? Promise.resolve(res): Promise.reject(res))
        .then(res=> res.json())//es lo mismo que hacer let dataJSON= JSON.parse(peticion.target.response);
        .then(res=>
            {
                const fragment= document.createDocumentFragment();
                for(let infoUsuarios of res)
                {
                    let listItem= document.createElement('li');
                    listItem.textContent=`${infoUsuarios.id} - ${infoUsuarios.name}`;
                
                    fragment.appendChild(listItem);
                }
                list.appendChild(fragment)
            })
 
})



// EN ESTE EJEMPLO VAMOS A TRABAJAR CON UN PAGINA WEB(API) COMO BASE DE DATOS Y NO CON UNA BASE DE DATOS EN SI Y EN ESTA API AREMOS
// PETICIONES NORMALES O EN ESTE CASO PETICIONES AJAX   API: https://jsonplaceholder.typicode.com/users (TABLA DE USUSARIOS)
/*const button = document.getElementById('buttom');
const list= document.getElementById('list');

button.addEventListener('click',()=>
{
    let xhr;
    if(window.XMLHttpRequest)
    {
        xhr= new XMLHttpRequest();
    }
    else
    {
        xhr= new ActiveXObject("Microsoft.XMLHTTP");
    }
        xhr.open('GET','https://jsonplaceholder.typicode.com/users');
        xhr.addEventListener('load',(peticion)=>
        {
            console.log(typeof peticion.target.response);
            console.table(JSON.parse( peticion.target.response));
            let dataJSON= JSON.parse(peticion.target.response);
            for(let infoUsuarios of dataJSON)
            {
                let listItem= document.createElement('li');
                listItem.textContent=`${infoUsuarios.id} - ${infoUsuarios.name}`;
                
                list.appendChild(listItem);
            }
        })
        xhr.send();
})*/