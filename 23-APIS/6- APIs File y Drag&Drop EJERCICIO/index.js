const fileInput=document.getElementById('file');
const dropZone=document.getElementById('drop-zone');

fileInput.classList.add('hiden');
//al acer clic dentro del div nos abra la ventana del explorador para cargar archivos
dropZone.addEventListener('click',(e)=>
{
    fileInput.click()//forzamos el evento para hacer de cuenta que acemos clic en el fileInput
    
})

//cuando arrastramos una imagen llama al clase drop-zone--active para que cambie el color el div
dropZone.addEventListener('dragover',(e)=>
{
    e.preventDefault();
    dropZone.classList.add('drop-zone--active');
})
//cuando sale el objeto de el div saca la clase y vuelve a el estado normal
dropZone.addEventListener('dragleave',(e)=>
{
    e.preventDefault();
    dropZone.classList.remove('drop-zone--active');
   


    
})

//se dispara cuando soltamos el archivo o imagen------------------------------------------
dropZone.addEventListener('drop',(e)=>
{
    e.preventDefault();

    dropZone.classList.remove('drop-zone--active');
    

    // al arrastrar la foto la informacion que vemos por consola se añada al fileInput que tenemos oculto pero sin tener
    //  que hacer clic y seleccionar la foto nosotros
    fileInput.files=e.dataTransfer.files;

    //  console.dir(e.dataTransfer.files[0]);//veremos la informacion de la foto o archivo que arrastremos por consola
    // console.log(fileInput.files);
    // console.log(e.target)
    // con esta informacion podemos hacer barra de progreso añadir miniaturas de imagens que agregamos y cuantas imagenes 
    // agregamos etc
})


