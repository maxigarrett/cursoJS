alert=document.getElementById('alert');

addEventListener('online',(e)=>
{
    console.log(e)
    setAlert(1)//cuando estemos online le pasamos un 1
})

addEventListener('offline',(e)=>
{
    console.log(e)
    setAlert(0)//cuando este offline lo pindremos a 0 
})

//funcion para establecer un valor cuando esta online y ofline

const setAlert=(estado)=>
{
    //antes de evaluar si esta oonline o offline removemos las dos clases css que muestra el mensaje por si tiene alguno 
    alert.classList.remove('alert--online');
    alert.classList.remove('alert--offline');
    if(estado==0)
    {
        //se usa porque hemos quitado la clase CSS y despues se la vamos a añadir, entonces para añadir la clase CSS como sucede
        // muy rapido si no ponemos un setTimeout() no llega a mostrarse porque se quita y se pone muy rapido las clases CSS
        setTimeout(()=>
        {
            alert.textContent='UPS. te quedaste OFFLINE';
            alert.classList.add('alert--offline');
        },100)//100milisegundos
    }
    else
    {
        setTimeout(()=>
        {
            alert.textContent=' te volviste a conectar ONLINE';
            alert.classList.add('alert--online');
        },100)//100milisegundos
    }
}