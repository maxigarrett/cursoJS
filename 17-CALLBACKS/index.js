// /*CALLBACKS
//      es una funcion que se ejecuta a travez  de otra funcion
//      no son asincronos
// */
// // cb se refiere a callbacks
// const getUser= (id,cb)=>
// {
//     const user=
//     {
//         name:'Maxi',
//         id:id//se puede poner solo id ya que la propiedad se llama igual que el parametro
//     }
//     console.log(user);

//     if(id==2)
//     {
//         // le funcion que esta abajo la ejecutamos acá(la funcion que le pasamos como segundo argumento que seria el cb que ejecutamos acá)
//         cb('no se encontraron usuarios');
//     }
//     else
//     {
//         cb(null,user)//null para que no de error
//     }

// }

// // puede pasar dos cosas y es que haya un error en la consulta porque estamos pidiendo un id de un usuario y el id no existe o puede que
// // el id exista y nos devuelva el usuario que buscamos(esta funcion corresponde al cb como parametro del getUser) 
// getUser(1,(err,users)=>
// {
//     if(err)
//     {
//         return console.log(err);//en caso de error imprimira el erro
//     }
//     console.log(`Usuario ${users.name}`);//si encunetra el usuraio por su id lo imprimirá
// })



// -------------------------------------SEGUNDO EJEMPLO-----------------------------------------------------------------
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

dameUsuario=(id,cb)=>
{
    // buscamos en el array de usuariosel usuario que corresponde con el id
    // El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. En cualquier otro
    //  caso se devuelve undefined.
    const usuario= usuarios.find(us=>us.id==id)//primer id se refiere al del array y el segundo al parametro

    if(usuario==undefined)
    {
        cb(`no existe el susuario con id ${id}`);
    }else
    {
        cb(null,usuario)//con null le damos a entender que no va haber error ya que el err del if no entra
    }
    // console.log(usuario);
}


// funcion para recuperar el email del usuario
const getEmail=(usuarios,cb)=>
{
    const mails=emails.find(em=>em.id==usuarios.id);

    if(mails==undefined)
    {
        cb(`el ${usuarios.name} no tiene mail`)
    }
    else
    {
        // en caso de que tenga email devolve mos el objeto con sus datos
        cb(null,
            {
                id:usuarios.id,
                name: usuarios.name,
                email: mails.email
            })
    }
}


// funcion para el callback(cb) el 1 es del id que tiene que buscar como primer parametro
dameUsuario(2,(err,user)=>
{
    if(err)
    {
        return console.log(err);//return finaliza la ejecucion de la funcion por lo tanto no hace falta el else
    }
    console.log(user);

    // esta funcion pide dos parametros que es el id osea el usuario y el callback con el error y una respuesta
    getEmail(user,(err,resp)=>
    {
        if(err)
        {
            return console.log(err);
        }
        console.log(resp);
    })
    
})