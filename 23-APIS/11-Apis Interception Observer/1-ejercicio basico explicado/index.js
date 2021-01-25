/*INTERCEPTION OBSERVER
    esta API sirve sobre todo para saber cuando un elemento se ve y cuando esta oculto. Esto ayuda bastante entre otras muchas
    cosas a hacer lo que se denomina carga peresoza, es decir, que no cargamos elementos que no vemos. Hasta que no se vayan a ver
    no se cargan en el navegador y ahorramos muchismos recursos los usa INSTAGRAM, NETFLIX,ETC
*/

const boxes=document.querySelectorAll('.box');

// esta funcion que ejecuta el metodo IntersectionObserver recibe por parametro los elementos que tiene que vigilar que en este
// caso va a ser cada uno de los divs que capturamos llamados boxes el parametro por convencion se llaman entris
const callback=(entries)=>
{
    console.log(entries);
    //por cada una de las entradas preguntaremos si esta interceptando ese objeto osea los div
    entries.forEach(element=>
    {
        // al ejecutar en consola se vera un array que en la primer posicion mostrara isIntercepting:true significa que esta dentro
        // de nuestro rango de vision osea el primer div y los demas que no se ven estaran en false
        if(element.isIntersecting==true)
        {   //es lo mismo que poner elemnt.target.id
           console.log(element.target.attributes[0].value,'esta interceptado');
        }
    })
}

const option=
{
    // elemnto padre que vamos a estar vigilando q normalmente es el viewport o body pero se puede vigilar otro elemnto
    // que nos haga de ventana en root se podria
    // root:,

    // funciona exactamente igual que el margen en css le podemos pasar de 1 a 4 parametros esto avarcara 200px mas para abajo
    // aparte de lo visible por lo que captura 2 div no solo 1
    // rootMargin:"200px",

    // esto recibe valores entre 0 y 1 siendo 0 el valor por defecto. si ponemos 0.25 hasta que un div de los que creamos
    // no se vea justo un 25% del total no lo interceptará tambien no solo se activa cuando aparece ese 25% sino cuando se 
    // ocultan porque vamos bajando en la pagina y queda solo visible el 25% del primer div se vulve a lanzar el IntersectionObserver
    threshold:0.25
}
//creamos nuestro interceprion observer este metodo recibe dos parametro el primero obligatorio y es la funcion a ejecutar 
// cuando algo entre en nuestro rengo de vision osea que queremos que haga. El segundo es opcional
const observando=new IntersectionObserver(callback,option)

// recorremos los boxes con foreach con la variable elemento le decimos que observe(variable observer creada que observa cuando
// algo entra en nuestro rango de vision) y con el metodo observe que observara  o mirara el elemento donde se guarda los boxes;
// al ejecutar en consola se vera un array que en la primer posicion mostrara isIntercepting:true significa que esta dentro
// de nuestro rango de vision osea el primer div y los demas que no se ven estaran en false
boxes.forEach(elemento=>observando.observe(elemento));