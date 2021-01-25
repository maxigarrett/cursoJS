/* Fetch API
        blob(): Binary Long OBject
        Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla
        
        URL: Con el objeto URL usando el método createObjectURL(archivo) podemos crear una ruta válida para ver ese archivo
        https://developer.mozilla.org/es/docs/Web/API/URL
*/

const buttonImg= document.getElementById('button-img');
const buttonPdf= document.getElementById('button-pdf');


buttonImg.addEventListener('click',(e)=>
{
    //utilizamos fetch porque no deja de ser una peticion a un recurso. No es una api pero no deja de ser una peticion
    // en este caso peticion a una imagen local
     fetch('dog.jpg').then(res=>console.log(res))//.then(res=> res.ok==true ? Promise.resolve(res): Promise.reject(res))
    //     // para poder visulizarla en todos los dispoitivos usamos blob
    //     .then(res => res.blob())
    //     .then(img=>//una ves obtenemos la lectura del archivo localizamos la imagen y con  .src agregamos ese atributo
    //         {   //ala etiqeuta y la igualamos a URL.createObjectURL que crea un link valido para visualizar el archivo
    //             //es decir la combierte en una URL valida para visualizar el objeto
    //             document.getElementById('img').src= URL.createObjectURL(img);
    //         }).catch(err=>console.log(err))

})



buttonPdf.addEventListener('click',()=>
{
    fetch('asset/pdf/demo.pdf')
        .then(res=> res.blob())
        //le agregamos al link un aruta para ver el pdf en el href cada ves que entre se genera uno distinto
        .then(pdf=> document.getElementById('pdf').href=URL.createObjectURL(pdf))
})



//NO FUNCIONA AL LEER LOS ARCHIVOS UNA POSIBLE SOLUCION SACARLE LA SEGURIDAD DE CHROME(NO HACERLO)
// Y OTRA ES HACER EL MISMO PROGRAMA PERO HAERLO EN uN SERVIDOR LOCAL COM XAMMP