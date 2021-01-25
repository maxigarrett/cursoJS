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

CONCEPTOS EXTRA A INVESTIGAR
    Mètodo getAll() para obtener todos los registros de la BBDD
    Mètodo clear() para borrar objetos del almacen
    Mètodo deleteDatabase() para borrar la base de datos
    Mètodo onBlocked() paara bloquear bases de datos en los cambios de versiones
    objeto IDBKeyRange para busquedas en la BBDD
    Mètodo createIndex() para la creacion de indices en la BBDD 
    versionado en la base de datos 
    https://dexie.org/     para trabajar con indexdb mas moderna y simplifica para trabajar con esta api
*/
// es el acceso a la bbdd de la web
const indexDB= indexedDB //en caso de llamar a la variable igual usar windows.indexedDB para identifiacar cual no es la variabel
const form=document.getElementById('form');
const task_tareas=document.getElementById('task');//div
if(indexDB && form)
{
    let db;
    // primer parametro de metodo open es el nombre de la BBDD a la que queremos acceder y el segundo parametro podemos pasarle
    // la version de la BBDD tiene que ser numeros enteros osea sin comas si ponemos diferentes versiones crea mas BBDD
    // la version es cualquier numero entero que nosotros querramos
    const request=indexDB.open('taskList',1);

     //si va todo bien al ejcutarse por segunda ves como ya esta creada no entra mas en esta funcion por lo uqe crear y borrar
    //  los almacenes que contienen los objetos ya sea de un usuario,etc lo haremos desde onupgradeneeded() ya que trabajara
    // desde ahi porque se encarga de actualizar o de crear si no existe la BBDD
    request.onsuccess=()=>
    {    
        db=request.result;
        console.log('OPEN',db);

        //si la ponemos en otro lado dara error porque no lee la BBDD por eso la ponemos aca osea cuando abra la BBDD
        // y compruebe si existe la leera
        readData();
    }
    // solo accede si no esta creada la BBDD una ves creada no accede mas
    request.onupgradeneeded= ()=>//para crearla sino existe o actualizarla
    {
        db=request.result;
        console.log('CREATED',db);
        //creamos almacen de datos donde se guardan los objetos(perfiles de Us,etc) en caso de no crear borramos la base y 
        // actualizamos la pagina para que se cree todo desde el principio y actualizamos el insexDB y se creara el almacen
        // en este caso llamado task
       // const objectStore= db.createObjectStore('task',{autoIncrement:true});
        //como clave se pondra lo que contenga el objeto taskTitle    
       const objectStore= db.createObjectStore('task',{keyPath:'taskTitle'});//leer en la funcion que dice IMPORTANTE
        // const objectStore2= db.createObjectStore('task2');//podemos crear tantos almacenes como querramos

    }
    request.onerror= (error)=>
    {
        console.log('Error',error);
    }




    //funcion para AÑADIR DATOS del formulario a la BBDD 
    const addData=(data)=>
    {
       

        // para escribir en la BBDD idexada las operaciones funcionan a travez de transacciones y esta recibe dos parametros 
        // primer parametro el almacen y segundo parametro lo que vamos a hacer que va a ser escribir en BBDD y leerla
        // ACA DECIMOS SOBRE CUAL VAMOS HACER LA TRANSACCION Y CUAL ES EL MODO
        const transaction=db.transaction('task','readwrite');

        // una ves tenemos la transaccion creada necesitamos abrir el almacen de datos osea el task que se lo pasamos por 
        // parametro
        // ACA HACEMOS LA TRANSACCION REALMENTE
        const objectStore=transaction.objectStore('task');

        // AÑADIMOS LOS DATOS
        const requestt=objectStore.add(data);
        readData()//para q lea los datos nuevos si a agregamos una tarea mas

        // IMPORTANTE LEER---------------

        // A LA HS DE AÑADIR DARA ERROR DICIENDO EN INGLES QUE NO PUEDE EJECUTAR ADD EN ESTA BBDD PORQUE EL ALMACEN DE DATOS
        // ESTÀ UTILIZANDO auto-of-line keys ES DECIR CLAVES FUERA DE LINEA, Y NO TIENE NINGUN GENERADOR DE CLAVE Y EL PARAMETRO
        // O CLAVE NO AH SIDO PROVISTO,ES DECIR, cuando creamos registros en una BBDD idexada necesitamos tener una clave osea
        // un identificador(KEY) para acceder al valor(VALUE) para solucionarlo cuando creamos el OBJECTSTORE le pasamos por
        // segundo parametro autoincrement:true los indexa por numeros(si se borra uno no son consecutivos al crear mas) no es
        // muy recomendable o tambien mas recomendable es usar en la clave valores unicos por nombre o en caso de agregar
        // persona el numero de documento seria una buena KEY o clave osaa como segundo parametro ponemos keypath:'taskTitle' 
        // significa la ruta de la llave y como valor de ese keypath le pasamos la clave unica que será taskTitle que es el
        // nombre de la propiedad de objeto data que rescata lo del input
    }

    // ------------------------------------------FIN AGREGAR DATOS A BBDD INDEXADA------------------------------------------------------------------------------


    //------------------------------------------------ LEER DATOS--------------------------------------------------------------------------
    const readData= ()=>
    {
        // le decimos que vamos a leer los datos del almacen task q ya creamos
        const transaction= db.transaction('task','readonly');//si no ponemos el readonly es lo mismo porque es lo q hace por defecto
        const objectStore=transaction.objectStore('task');
    
        // para poder leer los datos no necesitamos el add para agregar sino abrir un cursor q lo q hace es ir recorriendo el 
        // almacen osea los objetos dentro y devuleve los valores dentro del almacen
        const requestt=objectStore.openCursor();

        //creamos un fragmento pero cada vuelta de bucle para leer los registros del laa BBDD osea cada ves q entre en el if
        // si el fragmento esta ahi dentro creara uno nuevo y al llegar a el else al terminar no tendra nada porque
        // cada ves que entra y crea uno nuevo borra el anteriror
        const fragment= document.createDocumentFragment();
    
        // una ves abrimos el cursor tenemos que ver si ah ido bien todo
        requestt.onsuccess=(e)=>
        {
            console.dir(e.target);//en este caso target es el cursor osea la info de los datos a devolver 
            const cursor=e.target.result;//lo q muestra por consola en el target vamos a result y tenemos la primer fila de la tabla
            

            
            //esta pregunta de q si existe el cursor es porque si ya a terminado de leer los datos result se pone en null porque
            // ya no tiene nada mas que leer por lo tanto cuando cursor no exista significa q termino de leer los datos 
            // pero mientras exista entrara en el if cuando termine entra en el else
            if(cursor)
            {
                console.dir(cursor.value);//solo vemos el resultado de la primera fila y no las demas

                const taskTitle_p=document.createElement('p');
                taskTitle_p.textContent= cursor.value.taskTitle;//tasktitle es de la tarea elegida del input
                fragment.appendChild(taskTitle_p);//metemos dentro del fragmento el p con la info de la BBDD

                const taskPriority_p=document.createElement('p');
                taskPriority_p.textContent= cursor.value.taskPriority;//tasktitle es de la tarea elegida del select
                fragment.appendChild(taskPriority_p);

                // para que siga leyendo ponemos esta funcion osea seguira leyendo mientras aya registros
                cursor.continue();
            }else
            {
                console.log('no hay mas datos');

                task_tareas.textContent='';// para cuando agregemos nuevas tareas no se repita toda la tabla de nuevo

                // cuando termine de leer todo en el if se saldra y etrara en el else y es acá donde añadiremos la inyeccion
                // de html del fragmento
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
        console.log(data);
        addData(data);
        
    })

}


