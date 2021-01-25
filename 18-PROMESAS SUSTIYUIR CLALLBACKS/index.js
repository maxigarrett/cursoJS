/*PROMESAS
    es un objeto que dentro tiene dos callbacks internos*/ 



// -------------------------------------EJEMPLO-----------------------------------------------------------------
// vamos a pedir un usuario y con la respuesta del usuario vamos a pedir el emailel 1 y el dos van a funcionar bien pero el id 3 no,porque 
// el usuario con id 3 existe pero no tiene email
const usuarios=
[
    {
        id:1,
        name:'Maximilaino'
    },
    {
        id:2,
        name:'Laura'
    },
    {
        id:3,
        name:'Carlos'
    }
]
const emails=
[
    {
        id:1,
        email:'maxi@gmail.com'
    },
    {
        id:2,
        email:'Laura@gmail.com'
    }
]

// presindimos del callback de esta funcions y solo dejamos el id
dameUsuario=(id)=>
{
    const usuario= usuarios.find((us)=>us.id==id)

    // CREAMOS PROMESA dentro de los parentesis metemos los callbacks que ya bienen pre programdado osea que son obligatorios esto 
    //parametros, resolve se ejecutara cuando todo salga bien y reject se ejecutará cuando todo salga mal
    const promise= new Promise((resolve , reject)=>
    {
        
        if(usuario==undefined)
        {
            reject(`no existe el susuario con id ${id}`);//si va mal entra en el parametro reject
        }else
        {
            resolve(usuario);//si va bien va a entrar por el resolve no hace falta null
        }
    });

   
    return promise;
}


// funcion para recuperar el email del usuario
const getEmail=(usuarios)=>
{
    const mails=emails.find((em)=>em.id==usuarios.id);
    
    
    const promise= new Promise((resolve , reject)=>
    {
        if(mails==undefined)
        {
            reject(`el ${usuarios.name} no tiene mail`);//si va mal entra en el parametro reject
        }else
        {
            resolve(
            {
                id:usuarios.id,
                name: usuarios.name,
                email: mails.email
            });//si va bien va a entrar por el resolve no hace falta null
        }   
       
    });
   
    return promise;
}



//como usamos promesas viene encapsulado todo por eso para rescatar la informacion usamos then() este metodo lo que hace es resolver el
// contenido de la promesa (then es cuando todo va bien) y utilizamos una funcion para mostrar la informacion que rescatamos.
// en caso de que valla mal usamos el catch para capturar el error
// entonces el then seria un try.... y el catch seria el catch que va con el try
// dameUsuario(3).then(userss=>//dentro de then usamos una funcion para rescatar la informacion del parametro que le pasemos
// {
   
//     // al poner llaves tenemos que poner el return si fuera todo una sola linea no va
//    return getEmail(userss);//llamamos a la funcion de obtener el email y le pasamos el parametro que pide que es los datos rescatados userss
//                         //y con la infroacion rescatada de dameUsuario se la pasamos a getEmail por parametro que pide

// }).then(ress=>//utilizamos then para obtener toda la info con el email osea id y nombre y email
//     {
        
//         console.log(ress);
//     })
// .catch(err=>//en caso de que valla mal entra en el catch
// {
//     console.log(err);
// });


// DE MANERA MAS CENCILLA EN UNA SOLA LINEA
// preimer the obtenemos la informacion de dameUsuario y se lo pasamos por parametro a la funcion getEmail para comprar si existe el 
// usuario, despues utilizamos el otro then para rescatar la informacion de la funcion getEmail que devulve el id el name y email
// en caso de que valla mal entrará por el resolve de las promesas
dameUsuario(3).then((user) => getEmail(user)).then(res=>console.log(res)).catch(err=>console.log(err));




