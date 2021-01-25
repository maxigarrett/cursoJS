/*la API Visibility Change
    sirve para pausar el video o audio cuando cambiamos de pestaña asi no hay que hacerlo de forma manual
*/
const video=document.getElementById('video') 

// este evento va solo sin ningun elemento de html por delante
addEventListener('visibilitychange',(e)=>
{
    console.log(e);//cuando cambiamos de pestaña se dispara y cuando volvemos se dispara de nuevo el e muestra info por consola
    
    // cuando salimos a otra pestaña con document.visibilityState muestra hiden(cuando estamos en otra pestaña) y visible(cuando
    // estamos de nuevo en la pestaña en este caso del video)
    console.log(document.visibilityState)

    if(document.visibilityState==='visible')
    {
        console.log('PLAY')
        video.play();
    }else if(document.visibilityState==='hidden')
    {
        console.log('PAUSE')
        video.pause();
    }
})


// CON OPERADOR TERNEARIO
addEventListener('visibilitychange',()=>{
    document.visibilityState==='visible'? video.play():video.pause(); //como se ve ahorramos mucho codigo
})

