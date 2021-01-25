//VALIDAR CAMPOS DE TEXTO SE HACE CON EXPRECIONES REGULARES ESTO ES PARA ENTENDER COMO SE HACE LAS VALIDACIONES
const form=document.getElementById('form');
const buttom=document.getElementById('submitButtom');

const name=document.getElementById('name');
const email=document.getElementById('email');
const gender=document.getElementById('gender');
const terms=document.getElementById('terms');

/*vamos a validar que los campos esten con contenido y el formulario se puede enviar. Y para validar una de las formas es construir
un objeto con propiedades que son validas para los formularios */
const formIsValid=
{
    // estan todos en false al principio porque ninguno estaria marcada al inicio de llenar un formulario
    name:false,
    email:false,
    gender:false,
    terms:false
}

//ahora hay que impedir que se envie el formulario ya que por consola se puede sacar el diseable al boton y enviarlos esto se modifica
// mediate erramientas del desarrollador por eso pornemos el e.preventDefault()
form.addEventListener('submit',(e)=>
{
    e.preventDefault();

     validateForm()
})

//vamos a pasar las propiedades a true si los campos estan correctos segun emos decididos nosotros y para eso empezamos por el 
// input text para el nombre y en el evento utilizamos changed para remplazar a keyUp porque keyUP dispara el evento cuando
// apretamos una tecla pero si copiamos hy pegamos texto con el rato el evento no se dispara para saber si intoruducimos algo
// y con change va a registrar un valor si el campo ah cambiado de vacio a lo que pongamos y dispararà el evento
name.addEventListener('change',(e)=>
{
    // preguntamos si e(donde se almacena el evento).target(origen de evento sera el input).value(obtenes el valor de lo q se escribio)
    // .trim(para sacar los espacios en blanco).legth>0 si es mayor a 0 entonces tenemos contenido en ese campo
    if(e.target.value.trim().length>0)
    {
        formIsValid.name=true;//pasamos a true la propiedad de el objeto formIsValid
        
        // si en la consola del navegador hacemos un concole.table(formIsValid) mstrara una atabla con los campos todos false menos 
        // name
        console.table(formIsValid);
    }
})

email.addEventListener('change',(e)=>
{
    if(e.target.value.trim().length>=0)
    {
        formIsValid.email=true;
    }
})

gender.addEventListener('change',(e)=>
{
    if(e.target.checked==true)
    {
        formIsValid.gender=true;
    }
})


terms.addEventListener('change',(e)=>
{
    formIsValid.terms=e.target.checked//el termino sera igual a si esta chekeado o no osea true o false

    //el formulario se enviara si los terminos se aceptan si es true remueve el atibuto si es false lo establece y le da valor true
    // para que el boton estè desabilitado
    e.target.checked ? buttom.removeAttribute('disabled') : buttom.setAttribute('disabled',true)
})



//FUNCION QUE VALIDA SI ESTA TODO EN TRUE PARA QUE SE PUEDA ENVIAR FUNCION VA EN EL EVENTO DEL FORMULARIO
const validateForm=()=>
{
    // metemos en una variable todos los valores del formulario que guardamos en el objeto formIsValid que pusimos en true en los
    // eventos si los capos estaban llenos pero para recorrerlos hay que transformarlos a un array a ese objeto y usamos la funcion
    // Object.values(objeto)       con KEY obtendriamos lso atributos osea name email,etc  en ves de values va KEY
    // tambien podemos poner Array.from(formIsValid)
    console.log(Object.values(formIsValid))

    // convertimos objeto en array y lo almacenamos en una variable
    const formValues=Object.values(formIsValid)
    
    // El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. 
    // En caso contrario devuelve -1.,es decir que buscara indice por indice hasta encontrar un false arranca de 0
    // y si no encuentra ninguno devolvera un -1
    const valid= formValues.findIndex(val=> val==false)

    if(valid==-1)//si devulve -1 significa que no encontro ningun false por lo tanto se puede enviar
    {
        form.submit();//forzamos el evento enviar
    }
    else alert('Form invalid');//si hay un campo sin llenar no se enviara y mostrara unn alert
}
