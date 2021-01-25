const fileInput=document.getElementById('file');
const progress=document.getElementById('progress');//span para lllenar el div

// fileInput.addEventListener('change',(e)=>
// {
//     const file=e.target.files[0];//localisamos el archivo subido
//     const fileReader=new FileReader();//creamos objeto fileReader 
//     fileReader.readAsDataURL(file);//y lo leemos como al objeto con metodo y le pasamos file

//     // para controlar el progreso de la subida de un archivo tenemos el evento PROGRES

//     fileReader.addEventListener('progress',(e)=>
//     {
//         //con este console log de 'e' al subir un archivo en este caso una foto dara informacion y la que nos interesa es
//         // la propiedad total(cantidad que pesa el archivo tamaño total) y loaded cuanto lleva cargando el archivo hasta terminar
//         // entonces hacemos un console.log de e.loaded y total
//         console.log(e.loaded);
//         console.log(e.total);


//         const progresLoad=e.loaded*100 / e.total;//obtenemos el porcentaje de cuanto lleva subido el fichero
//         console.log(progresLoad)//mostrara hasta el 99% porque es hasta casi terminar de cargar


//         //hacemos CSS en linea porque es dinamico el cambio osea a medida que cargue el fichero ira llenando el div
//         //el ancho del span sera igual al proceso de cargado y lo parciamos a entero y se ira llenando de azul ya que
//         //el sapn no tiene ancho pero en css tiene color azul y a medida que se cargue le daremos ancho por lo uqe ira pintando el 
//         // fondo del div gris
//         progress.style.width=Number.parseInt(progresLoad) + '%';

//     })

//     //para la carga completa hay que usar otro evento es decir se ejecuta cuando termiina de ejecutarse el fichero
//     fileReader.addEventListener('loadend',(e)=>
//     {
//         progress.style.width='100%';//para que termine de pintar bien ya que en el otro evento solo llega hasta el 99%
//     })
// })




// La propiedad documentElement devuelve el documentElement del documento, como un objeto Element.
// Para documentos HTML, el objeto devuelto es el elemento <html> .
// Nota: esta propiedad es de solo lectura.
//obtenemos la raiz del archivo tnato de html como de css
 const root=document.documentElement

fileInput.addEventListener('change',(e)=>
{
    const file=e.target.files[0];//localisamos el archivo subido
    const fileReader=new FileReader();//creamos objeto fileReader 
    fileReader.readAsDataURL(file);//y lo leemos como al objeto con metodo y le pasamos file

    // para controlar el progreso de la subida de un archivo tenemos el evento PROGRES

    fileReader.addEventListener('progress',(e)=>
    {
        console.log(e)
        // interfaz del método establece un nuevo valor para una propiedad en un objeto de declaración de estilo CSS.
        // primer valor el nombre de la propiedad(nombre de la variable de css) y segundo parametro el valor de la propiedad que es
        // el calculo matematico para saber lo que va cargando 
        root.style.setProperty('--var-width',Number.parseInt(e.loaded * 100 / e.total) + '%');
    })

    //para la carga completa hay que usar otro evento es decir se ejecuta cuando termiina de ejecutarse el fichero
    fileReader.addEventListener('loadend',(e)=>
    {
        root.style.setProperty('--var-width','100%');
    })
})





