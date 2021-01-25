/*ESPRECIONES REGULARES 
    Son una secuencia de caracteres que forma un patron de busqueda, principalmente utilizada para la busqueda de patrones de cadenas
    de caracteres u operaciones de sustituciones.
    https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    
    surgieron para reducir la gran cantidad de comprobaciones de un email o un texto por ejemplo, un email no puede empezar con un 
    punto tampoco puede ver dos arrobar entre muchisimas mas cosas que nos llevaria sin expreciones regulares 100 lineas de codigo
    solo con if anidados para comprobar solo el email despues tendriamos que comprobar la contraseña como la cantidad de caracteres
    los espacios o los caracteres extraños que llevaria otro tanto de lineas de codigo por eso llegaron ante esta necesidad las 
    espreciones regulares
Sintaxis:
    /patron/. empieza con / despues el patron a buscar y termina con otro/
    
Bnaderas:
    i: ignore case. No diferencia entre mayusculas y minusculas
    g: global. Busca de forma global, es decir, no se para despues de la primera coincidencia

    https://www.regex101.com pagina web para comprobar la expresion regular
*/


const text=document.getElementById('text').textContent;

//para denominar expreciones regulares normalmente se usa regEx. Entonces guardamos en una variable la exprecion regular
// /Lorem/(palabra a buscar)/ g(busca la palabra de forma global y no se para en la primera coincidencia) i(no diferencia entre
//mayusculas y minusculas sin la i no la encontraria a la palabra ya que en el parrafo esta en mayusculas la primera letra y nosotros
//le decimos que que busque la palabra en minusculas por eso la 'i' ignora y solo busca coincidencia de caracteres)
const regEx= /lorem/gi;

const regEx2= new RegExp('lorem','gi');//otra forma es llamando al constructor pero no es habitual usar este
const regEx3= new RegExp('/lorem/','gi');//otra forma es llamando al constructor pero no es habitual usar este
console.log(regEx.test(text));
