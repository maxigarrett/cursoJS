/*
    API drag & drop:
    Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo
    Para controlar estas acciones tenemos varios eventos de cada una de las partes
        Objeto a arrastrar tiene tres eventos:
            dragstart: Se dispara al comenzar a arrastrar
            drag: Se dispara mientras arrastramos
            dragend: Se dispara cuando soltamos el objeto

        Zona de destino se crea para soltar la imagen en este caso(para que no se suelte en cualquier lado):
            dragenter: Se dispara cuando el objeto entra en la zona de destino
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino
            drop: Se dispara cuando soltamos el objeto en la zona de destino
            dragleave: Se dispara cuando el objeto sale de la zona de destino
*/


const smile=document.getElementById('smile');
const dropZone=document.getElementById('drop-zone');

//SE DISPARA CUANDO EMPEZAMO A ARRASTRAR
// smile.addEventListener('dragstart',(e)=>
// {
//     console.log(e)
// })

// //SE DISPARA MIENTRAS ESTEMOS ARRASTRANDO
// smile.addEventListener('drag',(e)=>
// {
//     console.log(e)
// })

// //SE DISPARA CUANDO SOLATAMOS EL OBJETO
// smile.addEventListener('dragend',(e)=>
// {
//     console.log('soltaste',e)
// })

// -------------FIN DE EVENTOS RESPECTO AL OBJETO QUE ESTAMOS ARRASTRANDO Q ES UNA IMAGEN-----------------------------------------






//ZONA DE DESTINO 
//  Se dispara cuando el objeto entra en la zona de destino
dropZone.addEventListener('dragenter',(e)=>
{
    console.log(`Drag Enter`);
})

//SE DISPARA CUANDO MOVEMOS EL ELEMENTO DENTRO DE LA ZONA
//   Se dispara cuando el objeto se mueve sobre la zona de destino
dropZone.addEventListener('dragover',(e)=>
{   
    e.preventDefault();//para que funcione DROP y nos deje soltar la imagen dentro del div sin esto aparece icon proivido en la flecha
    console.log(`Drag Enter`);
})

//SE DISPARA CUANDO SOLTAMOS EL OBJETO EN LA ZONA DE DESTINO
dropZone.addEventListener('drop',(e)=>
{
    e.preventDefault()//para que no abra la imagen en otro sitio osea evitamos el comportamiento por defecto
    console.log(`Drop`);
})


dropZone.addEventListener('dragleave',(e)=>
{
    console.log(`Drag Leave`);
})





