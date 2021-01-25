/*API FILE
    esta api nos permite leer archivos que introduzcamos a traves de un input o de drag y drop
    esta API sireve para leer archivos que el usuario cargue en la web. se pueden cargar archivos desde un input de tipo
    File o desde el objeto DataTransfer de la API DragyDrop.

    la interfaz mas utilizada para interactuar con ella es FileReader

      https://developer.mozilla.org/es/docs/Web/API/FileReader
*/
const fileInput=document.getElementById('fileInput');
const img=document.getElementById('img');
const text=document.getElementById('text');
const images=document.getElementById('images');


// //para saber cuando se cargo un archivo usamos el evento change como para cuando se escribe en un tipo text ,email,etc
// fileInput.addEventListener('change',(e)=>
// {
//     console.log(e.target.files)

//     //creamos variables para acceder el contenido de ese archivo 
//     const file=e.target.files[0];
//     console.log(file)

//     //para poder leer el contenido creamos un objeto de tipo fileReader
//     const fileReader= new FileReader();

//     //como vamos a cargar un archivo de texto usamos el metodo readAsText para poder leerlo
//     fileReader.readAsText(file)
    
//     //todavia no se vera nada porque para la lectura de archivo puede tardar un poco y es un proceso asincrono po lo que tenemos que
//     // usar un evento de tipo load al objeto FileReader y este evento se ejecutara cuando a terminado de leer todo el archivo
//     fileReader.addEventListener('load',(e)=>
//     {
//         //cuando termine de leer el archivo se dispara el evento y si vamos a target y buscamos result que ahi es donde esta el texto
//         // plano del archivo
//         console.log(e.target.result)
//         text.textContent+= e.target.result;//lo agregamos a la etiqueta <p>
//     })
// })



//------------------------------LEER IMAGENE O VIDEO SIMPLE QUE ES MAS HABITUAL QUE TEXTO-----------------------------------------

fileInput.addEventListener('change',(e)=>
{
    const file= e.target.files[0];//de 0 porque sabemos que va a ser una sola foto
    const fileRead= new FileReader();

    fileRead.readAsDataURL(file);

    fileRead.addEventListener('load',(e)=>
    {   console.log(e);
        img.setAttribute('src',e.target.result)//el valor de src osea la ruta va a ser el origen del eveto y result 
    })
    
})



//------------------------------CARGAR VARIAS IMAGENES MULTIPLES----------------------------------------

fileInput.addEventListener('change',(e)=>
{
    const files= e.target.files//solo files porque no sabemos las posiciones ya q se cargaran varias imagenes
    

    const fragment=document.createDocumentFragment(); 
    for (const file of files) 
    {
        //una ves utilizado se destruye por eso hay que meterlo dentro del bucle para que cree un nuevo objeto cada vuelta de bucle
        //esto dara eeror fuera del bucle ya que si esta afuera serviria para la crga de una sola imagen
        const fileRead= new FileReader();
        const img=document.createElement('img');
        fileRead.readAsDataURL(file);
        fragment.appendChild(img)

        fileRead.addEventListener('load',(e)=>
        {
    
            img.setAttribute('src',e.target.result)//el valor de src osea la ruta va a ser el origen del eveto y result contenido a leer
        })
    }
    images.appendChild(fragment);
})