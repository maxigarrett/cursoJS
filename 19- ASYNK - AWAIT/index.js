/*ASYNK y AWAIT
    asynk - funcionan a travez de promesas y devulve una promesa por lo tanto no hace falta escribir la promesa */

// con asyn construimos una funcion asincrona
const getName= async ()=>
{
    return new Promise((resolve,reject)=>
    {
        // para que tarde 1.5 segundos en mostrar el mensaje simulando una peticion a BBDD que tarda uno tiempo
        setTimeout(()=>
        {
            resolve('MAXIMILIANO');
        },1500)
       
    })
//    return 'MAXIMILAINO';
}

//el problema de que tarda un timpo con setTimeOut es que si creamos otra funcion a la hora de llamarla vamos a tener
// un proble ya que solo mostrará el HELLO porque la funcion getName() tarda 1.5 seg en ejecutarse y la funcion seyHello()
// se ejecuta sin esa esperar a que se resulva la promesa con el resolve entonces para solucionarlo y hacer que espere y no
// se ejecute a esta funcion seyHello tambien le ponemos ASYNK para indicar que va a ser una funcion asincrona, es decir,
// que el codigo no se vva a ejecutar uno debajo de otro de forma secuencial como cualquier lenguaje y necesitamos 
// establecer paradas o bloqueos de codigo que se hacen con AWAIT y lo que hacemos es establecer un bloqueo hasta que
// que donde pusimos await se haya resuelto 
const seyHello= async ()=>
{
    const name= await getName();
    return `HELLO ${name}`;
}

seyHello().then(res=> console.log(res))





//-------------------------------EJERCICIO DE LA CARPETA 18------------------------------------------------------

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
dameUsuario= async (id)=>
{
    const usuario= usuarios.find((us)=>us.id==id)

   
    // const promise= new Promise((resolve , reject)=> el asynk ya devulve una promesa por lo tanto esto ya no sirve
   
    try//hay q usar try catch para async ya que usamos un constructor para crear objeto de tipo error con new Error
    {
        if(usuario==undefined)
        {
            // para el error al sacar la promesa lo constrouimos con throw(para manejar errores o excepciones) 
            // new Error(creamos un error que con new error creamos un constructor que construye un objeto error)
            throw new Error(`no existe el susuario con id ${id}`);
        }else
        {
            return usuario;
        }
    }catch (error) 
    {
          console.log(error)
    }  
    
}


// funcion para recuperar el email del usuario
const getEmail= async (usuarios)=>
{
    const mails=emails.find((em)=>em.id==usuarios.id);
    
    
    // const promise= new Promise((resolve , reject)=>
        if(mails==undefined)
        {
            throw new Error(`el ${usuarios.name} no tiene mail`);
        }else
        {
            return(
            {
                id:usuarios.id,
                name: usuarios.name,
                email: mails.email
            });
        }   
}

//hacemos la funcion para que retorne el usuario y la hacemos asincrona porque en recoger el usuariio y el email
// vamos a tardar un tiempo entonces se ejecutará el mensaje pero no se resolvera las promesas por eso hay que 
// establecer bloqueos AWAIT para que no se ejecute otra cosa asta que no se resuelva ese punto de bloqueo
const getInfo= async (id)=>
{
    const user= await dameUsuario(id)
    const respuesta= await   getEmail(user)

    return `${user.name} email ${respuesta.email}`;
//    return dameUsuario(1)
}

getInfo(3).then(res=>console.log(res))