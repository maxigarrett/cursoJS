/* NOTIFICATION
    las notificaciones son los mensajes que nos aparecen esquina superior derecha cuando el navegador quiere hacer algo en
    nuestro equipo 
https://developer.mozilla.org/es/docs/Web/API/notification 

icono:
https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18
*/
const permiso=document.getElementById('permissions');


permiso.addEventListener('click',(e)=>
{
    //objeto del navegador(Notification) con el metodo requestNotification pide permiso al navegador para mostrar notificaciones
    // esto devulve una promesa
    Notification.requestPermission();
    // los estados de notificaciones pueden estar en default(por defecto), denied(denegado o bloqueado),granted(permitido)
    if(Notification.requestPermission!=='granted')
    {
        getPermissions();//en caso de estar bloqueada pedimos permiso para mostrar notificaciones(funcion nuestra creada)
        notify();
    }
    else if(Notification.requestPermission=='granted')
    {
        // en el caso de si tener permiso llamamos a un a funcion notify no entra al else y no se porque
        // asiq lo pongo en el if y lo muestra
        // notify();
    }
})

const getPermissions=()=>
{
    Notification.requestPermission()
    .then(res=>console.log(res)).catch(error=>console.log(error))
}
const notify=()=>
{
    // primer parametro mensaje que muestra(hello word) titulo del mensaje y tiene otros parametros opcionalescomo optiones entonces
    // creamos un objeto con esas opciones
    const option=
    {
        body:'hola esto es una notificacion',//cuerpo del mensaje
        icon:'world.png',//una imagen
        data:'extra data'//esto aparece por consola poniendo un console.log(notifications.data)
    }
   
    const notifications=new Notification('hello word',option);

    //mostrar la informacion de la notificaion con otra que son onclic,onclose,etc usamos close para saber cuando cerramos
    // la notificacion
    console.log(notifications);

    notifications.addEventListener('close',()=>console.log('CLOSED'))
    notifications.addEventListener('show',()=>console.log('SHOW'))//cuando se abre aparece por consola show
    //ESTO ES LO BASICO EN NOTIFICACIONES HAY QUE INVESTIGAR MAS PARA HACER NITIFICAIONES MAS COMPLEJAS
    
}
