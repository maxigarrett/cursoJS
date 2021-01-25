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
const pendingTask=document.getElementById('pending-task')
const finishedTask=document.getElementById('finished-task');


pendingTask.addEventListener('dragstart',(e)=>
{
    // dataTranfer(solo se usa para firefox en chrome no) - este objeto contiene toda la informacion del objeto que estamos arrastrando
    // este tiene dos metodo: 1- setData() Establece la informacion que uqeremos compartir 2- getData() la informacion que queremos obtener
    
    // ssetData le decimos que lo que queremos compartir es el formato de lo que vamos a compartir que en este caso es texto plano 
    // porque solo queremos el id y, que es la parte que vamos a compartir o cual es la informacion que vamos a guardar en este caso 
    // es e.target.id 
    e.dataTransfer.setData('text/plain',e.target.id);
    e.dataTransfer.getData('text');
    console.log(e.dataTransfer.getData('text'))//por parametro le decimos en q formato llega la informacion en este caso es texto

})


pendingTask.addEventListener('drag',(e)=>
{
    e.target.classList.add('active')//caundo arrastramos se dispara el evento y llama al la clase css active
})

pendingTask.addEventListener('dragend',(e)=>
{
    e.target.classList.remove('active');//caundo soltamos se dispara el evento y saca la clase active de css
})

// ZONA DONDE VAMOS A MOVER EL ELEMENTO
finishedTask.addEventListener('dragover',(e)=>
{
    e.preventDefault();

})

finishedTask.addEventListener('drop',(e)=>
{
    e.preventDefault();
    //guardamos el elemento que vamos a mover es decir guardamos el id del elemento que estamos arrastrando y soltamos
    const element= document.getElementById(e.dataTransfer.getData('text'));

    //no usamos la e para sacar la clase porque obtenemos el id dentro de element
    element.classList.remove('active');
    

    //removeChild remueve el hijo pero devulve al mismo tiempo el hijo removido por lo tanto con appendChild agregamos el hijo q
    // eliminamos de pendigTask eliminamos el elemento por su id que capturamos con element
    finishedTask.appendChild(pendingTask.removeChild(element))

    
})



