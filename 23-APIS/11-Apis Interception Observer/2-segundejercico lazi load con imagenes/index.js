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

Lazy Load traducida CARGA PERESOZA 
*/ 
const imagenes=document.getElementById('imagen');

const getImagen=()=>
{
    axios('https://picsum.photos/v2/list?page=3&limit=5')//en esta pagina no spermite poner el limite de fotos yo puse 5
    .then(res=>
        {
            //nos mostrara el resultado de la peticion de axios y donde dice data es el array con la informacion de las imagenes
            console.log(res)
            const fragment=document.createDocumentFragment();

            res.data.forEach(element => 
            {
                const nuevaImagen=document.createElement('img');
                // nuevaImagen.setAttribute('src',element.download_url)
                nuevaImagen.src=element.download_url;//es lo mismo que el de arriba pero mas sencillo
                fragment.appendChild(nuevaImagen);
            });

            imagenes.appendChild(fragment);
            setObserver();//llamamos a la funcion setObserver
        })
}

const callback=(entries)=>
{
    entries.forEach(element=>
    {
        console.log(element);
        if(element.isIntersecting==true)getImagen();//cuando intercepta la ultima foto osea q es true pide otras 5 imagenes

        // si quisieramos que las imagenes que aparezcan con animacion le añadiriamos a la imagen una clase en este if
        // para cada imagen que aparezca
        // y en un else se la quitamos osae cuando isIntersecting sea false
    })
}

const setObserver=()=>
{
    const option=
    {
        threshold:0.5//cunado vea el la mitad de la imagen quiero que pida otras 5 imagenes
    }

    const observador=new IntersectionObserver(callback,option);
    //en ves de mernos en un bucle queremos que observe el ultimo hijo de imagenes que es el div osea la ultima imagen cargada
    observador.observe(imagenes.lastElementChild)
}


getImagen();