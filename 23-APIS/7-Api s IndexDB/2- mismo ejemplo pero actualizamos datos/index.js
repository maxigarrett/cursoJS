/*IndexedDB    //Especificación oficial: https://developer.mozilla.org/es/docs/IndexedDB-840092-dup
    Es una menera de almacenar datos de manera persistente en el navegador es lo mismo que haciamos con LOCALSTORAGE de la API
    de WEB STORAGE la diferencia entre localStorage y IndexDB es que localStorage sirve para almacenar porciones muy pequeña de datos
    como nombre de usuario y un email,etc.  pero en IndexDB podemos almacenar un perfil entero de usuario como imagen de usuario
    contraseña,nombre de usuario, email,etc
    
tipo de almacenaje
    Almacena pares de llave-valor. Los valores pueden ser objetos con estructuras complejas(perfil completo de usuario), y las
    llaves pueden ser propiedades de esos objetos
    
    la API IndexedDB es asincrona. porque no se guarda de manera muy rapida en el disco duro por lo tanto tenemos que estar 
    escuchando los eventos para saber cuando a terminado de grabar esos datos y actuar con esa informacion
    
    IndexedDB usa eventos DOM para notificar cuando los resultados estan disponibles
    
    IndexedDB es orientado a objetos
    
IdenxDB CREACION
    1-crear la base de datos a travez del objeto indexDB y el metodo open()->habre BBDD
    2-Comprobar si la base de datos existe o tiene que ser creada a travez del metodo onupgradeneeded()->pregunta si existe la BBDD
    3-crear un almacen de objetos con el metodo createObjectStore() un almacen es donde se guarda los objetos de la BBDD no sql
    4-una ves echo los pasos anteriores lo siguiente es escuchar los eventos de exito y de error con los metodos onsucces() y
    onerror() y son asincronos

Ver en el navegador pasos a seguir
    vamos a herramientas de desarrollador a Application  opcion IndexDB  

Importante
    simepre que agregemos algo hay que borrar la BBDD y refrescar la pagina para que se cree devulta
    cunado agregemos a la BBDD tambien hay que actualizar el almacen para que se vea lo agregado
*/

const indexDB= indexedDB //en caso de llamar a la variable igual usar windows.indexedDB para identifiacar cual no es la variabel
const form=document.getElementById('form');
const task_tareas=document.getElementById('task');//div
if(indexDB && form)
{
    let db;
   
    const request=indexDB.open('taskList',1);

    request.onsuccess=()=>
    {    
        db=request.result;
        console.log('OPEN',db);

        //si la ponemos en otro lado dara error porque no lee la BBDD por eso la ponemos aca osea cuando abra la BBDD
        // y compruebe si existe la leera
        readData();
    }
    request.onupgradeneeded= ()=>//para crearla sino existo o actualizarla
    {
        db=request.result;
        console.log('CREATED',db);

       const objectStore= db.createObjectStore('task',{keyPath:'taskTitle'});//leer en la funcion que dice IMPORTANTE
    }
    request.onerror= (error)=>
    {
        console.log('Error',error);
    }




    //funcion para AÑADIR DATOS del formulario a la BBDD 
    const addData=(data)=>
    {
     
        // ACA DECIMOS SOBRE CUAL VAMOS HACER LA TRANSACCION Y CUAL ES EL MODO
        const transaction=db.transaction('task','readwrite');

        // ACA HACEMOS LA TRANSACCION REALMENTE
        const objectStore=transaction.objectStore('task');

        // AÑADIMOS LOS DATOS
        const requestt=objectStore.add(data);
        readData()//para q lea los datos nuevos si a agregamos una tarea mas

    }

    // ------------------------------------------FIN AGREGAR DATOS A BBDD INDEXADA------------------------------------------------------------------------------


    //-----------------------FUNCION QUE DA INFORMACION DEL ELEMENTO QUE VAMOS A ACTUALIZAR------------------------------
    const getData=(key)=>
    {
        const transaction=db.transaction('task','readwrite');

        // ACA HACEMOS LA TRANSACCION REALMENTE
        const objectStore=transaction.objectStore('task');

        // obtenemos LOS DATOS en este caso la clave de la BBDD osae lo q introducimos en el input
        const requestt=objectStore.get(key);

        requestt.onsuccess=()=>//si va todo bien
        {
            console.log(requestt);

            //dentro del input ponemos lo que se encuntra en la BBDD
            form.task.value=requestt.result.taskTitle;
            form.priority.value=requestt.result.taskPriority;
            //el action es el valor que esta dentro de data al cacer clic en el boton addtask se cambia de add a update
            form.button.dataset.action='update';
        }
    } 
    // ---------------------------------------fin funcion getData-------------------------------------


    // FUNCION PARA ACTUALIZAR DATOS
    const updateData=(data)=>{
        const transaction=db.transaction('task','readwrite');

        // ACA HACEMOS LA TRANSACCION REALMENTE
        const objectStore=transaction.objectStore('task');

        // el put si el dato existe lo actualiza si no existe lo añade
        const requestt=objectStore.put(data);
        requestt.onsuccess=()=>
        {
            form.button.dataset.action='add';
            readData();
        }
 
    }



    //------------------------------------------------ LEER DATOS--------------------------------------------------------------------------
    const readData= ()=>
    {
        // le decimos que vamos a leer los datos del almacen task q ya creamos
        const transaction= db.transaction('task','readonly');//si no ponemos el readonly es lo mismo porque es lo q hace por defecto
        const objectStore=transaction.objectStore('task');
    
        // para poder leer los datos no necesitamos el add para agregar sino abrir un cursor q lo q hace es ir recorriendo el 
        // almacen osea los objetos dentro y devuleve los valores dentro del almacen
        const requestt=objectStore.openCursor();

        const fragment= document.createDocumentFragment();
    
        // una ves abrimos el cursor tenemos que ver si ah ido bien todo
        requestt.onsuccess=(e)=>
        {
            console.log(e.target);//en este caso target es el cursor osea la info de los datos a devolver 
            const cursor=e.target.result;//lo q muestra por consola en el target vamos a result y tenemos la primer fila de la tabla
            if(cursor)
            {
                console.log(cursor.key);
                console.log(cursor.value);//solo vemos el resultado de la primera fila y no las demas

                const taskTitle_p=document.createElement('p');
                taskTitle_p.textContent= cursor.value.taskTitle;//tasktitle es de la tarea elegida del input
                fragment.appendChild(taskTitle_p);//metemos dentro del fragmento el p con la info de la BBDD

                const taskPriority_p=document.createElement('p');
                taskPriority_p.textContent= cursor.value.taskPriority;//tasktitle es de la tarea elegida del select
                fragment.appendChild(taskPriority_p);

                const taskUpdate=document.createElement('button');
                taskUpdate.dataset.type='update';//para q sepa que va a ser para actualizar
                //le pasamos la key osea la clave de la base de datos q es lo del input para tener el valor a modificar
                taskUpdate.dataset.key=cursor.key;
                taskUpdate.textContent='Update';
                fragment.appendChild(taskUpdate);

                const taskDelete=document.createElement('button');
                taskDelete.textContent='Delete';
                fragment.appendChild(taskDelete);

                // para que siga leyendo ponemos esta funcion osea seguira leyendo mientras aya registros
                cursor.continue();
            }else
            {
                console.log('no hay mas datos');

                task_tareas.textContent='';// para cuando agregemos nuevas tareas no se repita toda la tabla de nuevo

                task_tareas.appendChild(fragment);
            } 
        }
    }

    // -------------------------------FIN LEER DATOS------------------------------------------

    // cuando enviemos el formulario creamos un objeto para almacenar en el almacen de la BBDD
    // al enviarse el formulario obtenemos los valores con el target y el name de el input o lo que aya dentro del form
    // tambien se puede capturael el valor con el id
    form.addEventListener('submit',(e)=>
    {
        e.preventDefault();
        const data=
        {
            taskTitle: e.target.task.value,//rescatamos el name del input
            taskPriority: e.target.priority.value//name del select
        }
        // console.log(data);
        

        // verificamos si el boton esta como add o update
        if(e.target.button.dataset.action=='add')
        {
            addData(data);
        }else if(e.target.button.dataset.action=='update')
        {
            updateData(data);
        }
        form.reset();//reseteamos formulario cuando agregamos o actualizamos
    })

    task_tareas.addEventListener('click',(e)=>
    {
         console.dir(e.target.dataset)//veremos el valor de la key o clave
        // varificamos si hacemos clic en el boton update si lo hacemos cambia el data action a update entonces 
        // actualiza los datos
        if(e.target.dataset.type=='update')
        {
            getData(e.target.dataset.key);
        }else if(e.target.dataset.type=='delete')
        {

        }
    })
}


