/*API WEB STORAGE
    basicamente lo que hace es gaurdar informacion en el dispositivo con el conjunto de clave-valor igual que un objeto 
    esto llego para ayudar a las cokies ya que su alamcenamiento es lmitado y esta API tiene mas capacidad
    
    Los dos mecanismos en el alamcenamiento web son las siguientes:

        sessionStorage - mantiene un area de almacenamiento separada para cada origen que está disponible mientras dure la sesion
        de la pagina(mientras el navegador este abierto, incluyendo recargas de paginas y reestablecimientos.
            
        localStorage - hace lo mismo, pero perciste incluso cuando el navegador se cierre y se reabra.
            
    Ambas funciones con clave:valor y tienen dos metodos fundamentales setItem() para asignar un clave:valor, 
    y getItem() que recibe como parametro la clave de la que queremos obtener el valor
*/

const form=document.getElementById('form');
const keys=document.getElementById('keys');


form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    //si vamos al navegador chrome al inspector y cambiamos console por aplication vamos a sessionStorage y utilizamos el metodo
    // setItem establecemos una clave y un valor por lo que aparecerá como clave name y valor maxi solo lo veremos si vamos a 
    // la pesataña de ssesionStorage sub carpeta file
    sessionStorage.setItem('name','maxi')    
    const person=
    {
        name:'MAXIMILIANO',
        email:'maxi_elloco22@hotmail.com'
    }
    sessionStorage.setItem('persona', JSON.stringify(person))//JSON.stringify(person) para poder leerlo como string al objeto
    // ---------------------------FIN EJEMPLOS-------------------------------------------------------



    //asignaremos los valores que tenemos en el formulario key es el name del input y value obtenemos el valor del campo
    // el segundo parametro es el valor que en el name del input se llama value y por coincidencia para obtener el valor usamos value
    // y de esta forma lo que escribamos en el formulario se quedara guardado
    // caundo serramos la pagina se bborra la informacion
    sessionStorage.setItem(form.key.value,form.value.value);

    //una ves obtenemos la clave valor con sessionStorage lo agregamos al select con untemplate String
    keys.innerHTML +=`<option>${form.key.value}</option>`;

    form.reset();//forzamos evento para resetear el formulario una ves enviado
})


keys.addEventListener('change',(e)=>
{   
    // obtenemos con getItem la clave de donde queremos obtener el valor que es keys(el select del HTML) y la posicion que le damos
    // es keys.selectedIndex que obtiene el indice del que seleccionamos y con textContent obtenemos el contenido 
    // sessionStorage.getItem(keys[keys.selectedIndex].textContent|value) 
    // y lo copiamos en la etiqueta <p> 
    document.getElementById('infoValue').textContent=sessionStorage.getItem(keys[keys.selectedIndex].value)
})


sessionStorage.clear();//al recargar la pagina se elimina la clave valor guardada
// sessionStorage.removeItem('name')


// TODOS LOS SESSIONSTORAGE LOS REMPLAZAMOS POR LOCALSTORAGE Y ANDA IGUAL PERO SI CERRAMOS LA PAGINA Y ABRIMOS LA INFORMACION SEGUIRA AHI