/*AXIOS
    es una libreria basada en promesas para el cliente y para el servidor.

    pero solo para peticiones AJAX es ma sencillo utilizar axios

    tanto HTTPREQUEST COMO FETCH y AXIOS HACEN LO MISMO Y PODEMOS UTILIZAR LO QUE QUERAMOS porque los 3 hacen lo mismo

    esta libreria se utilizaria cuando nuestro proyecto solo hace peticiones a una API REST para traer datos si es lo unico
    que hará tendriamos que utilizar AXIO porque a dia de hoy es la qu mas optimizada está(Hoy en día la mayoría de las
    empresas utilizan API REST para crear servicios. Esto se debe a que es un estándar lógico y eficiente para la creación
    de servicios web. Por poner algún ejemplo tenemos los sistemas de identificación de Facebook, la autenticación en los 
    servicios de Google (hojas de cálculo, Google Analytics, …)

    https://github.com/axios/axios
    pagina de la libreria para utilizar axios que nos proporciona el script  para trabajr con esta libreria el script
    en el HTML va arriba del script que utilizamos para llamar a este archivo por el tema de que asi no habrá ningun 
    tipo de problema que si está abajo
*/


const button= document.getElementById('button');

button.addEventListener('click',(e)=>
{
    // llamamos a la libreria AXIOS y recibe objetos como las peticiones POST que haciamos con fetch
    axios(
    {
        method: 'GET',//tipo de peticion
        url:'https://jsonplaceholder.typicode.com/users',//url a la que vamos hacer la peticion
    })//.then(res=> console.log(res.data))
        .then(res=>
            {
                const list=document.getElementById('list');
                const fragment= document.createDocumentFragment();

                for (const user of res.data)//data porque lo que devulve la peticion en cosola esta dentro de data
                {
                    let listItem=document.createElement('li');
                    listItem.textContent= `${user.id} - ${user.name}`;

                    fragment.append(listItem);
                }

                list.appendChild(fragment);
            }).catch(error=> console.log(error))  
})









// --------------------------------EJEMPLO ANTERIOR CON FETCH---------------------------------------------------

/*const button= document.getElementById('buttom');
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
 
})*/