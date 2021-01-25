const incrementar=document.getElementById("incrementar");
const decrementar=document.getElementById("decrementar");
const desloguear=document.getElementById("desloguear");

// etiquetas p
const saludo=document.getElementById("saludo");
const contador=document.getElementById("contador");


if(localStorage.getItem('usuario')!=null)//si se logueo y  guardo informacion en la pc del usuario
{
    saludo.innerHTML+=`hola denuevo ${localStorage.getItem("usuario")} !`;    
}
else
{
    const nombreUsuario=prompt('diga su nombre para reconocerlo');

    // establecemos el localStorage primer parametro clave(para identificarlo cualquier nombre vale) segundo parametro el valor
    // en este caso lo rescatamos de un promp pero puede ser de un formulario
    localStorage.setItem('usuario',nombreUsuario);
    saludo.innerHTML+=`hola a tu primera vez ${localStorage.getItem("usuario")} !`;
}

// CONTADOR con sessionStorage osea cuando cerramos el navegador se perdera la informacion y el contador vulve a 0
if(sessionStorage.getItem('contador')==undefined)
{
    sessionStorage.setItem('contador','0');
}
contador.innerHTML+=`contador ${sessionStorage.getItem("contador")}`;//mostrara 0 si es la primera ves q entramos

// boton incrementar y decrementar
incrementar.addEventListener('click',()=>
{
    // llamamos a la funcion incrementar al hacer clic
    incrementarContador();

})
decrementar.addEventListener('click',()=>
{
    decrementarContador();//llamamos la funcion decrementar
})

desloguear.addEventListener('click',()=>deloguearUsuario())


//FUNCION INCREMENTAR Y DECREMENTAR
const incrementarContador= ()=>
{
    // como solo admite valors string web storege lo convertimos a numero al 0 ya establecido para sumarle 1 cada vez q haga clic
    sessionStorage.setItem('contador',Number(sessionStorage.getItem('contador'))+1);
    contador.innerHTML=`contador ${sessionStorage.getItem("contador")}`;//lo pasa a cadena automaticamente para mostrar
}
const decrementarContador=()=>
{
    sessionStorage.setItem('contador',Number(sessionStorage.getItem('contador'))-1);
    contador.innerHTML=`contador ${sessionStorage.getItem("contador")}`;
}

const deloguearUsuario=()=>
{
    alert(`se ha cerrado la sesion de ${localStorage.getItem("usuario")}`)//antes de borrar sino no mostrara el nombre del usuario
    localStorage.removeItem('usuario')//solo borramos la de localStorage
    saludo.innerHTML="";
}

