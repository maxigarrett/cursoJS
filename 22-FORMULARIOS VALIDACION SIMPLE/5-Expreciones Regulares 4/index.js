/*ESPRECIONES REGULARES 
    Son una secuencia de caracteres que forma un patron de busqueda, principalmente utilizada para la busqueda de patrones de cadenas
    de caracteres u operaciones de sustituciones.
    

Sintaxis:
    /patron/. empieza con / despues el patron a buscar y termina con otro/
    
Bnaderas:
    i: ignore case. No diferencia entre mayusculas y minusculas
    g: global. Busca de forma global, es decir, no se para despues de la primera coincidencia

    https://www.regex101.com pagina web para comprobar la expresion regular

     
 Caracteres:
        \s: Coincide con un carácter de espacio, entre ellos incluidos espacio, tab, salto de página, salto de linea y retorno de carro. 
        ^[a-zA-Z]+\s[a-zA-Z]+$ - este ejemplo va de la a hasta la z si o si por lo menos una vez un espacio y otra palabra de la a la z 
        apra que valide correctamente podria ser: maximiliano garrett pero si ponemos maximilainogarrett(no nada porque no tiene espacio)
        no adimte numeros

        \S: Coincide con todo menos caracteres de espacio
            ejemplo: ^\S{5}$ - esto quiere decir una palabra de 5 letras sin ningun espacio y no admite nada por delanti ni por detras 
            ademas de las 5 letras(con esto podemos validar que un campo no esté vacio y no tenga espacios) se admiten numeros tambien

        \d: Coincide con un carácter de número. Equivalente a [0-9]
         ^\d{5}$ - con esto le decimos que solo puede entroducir 5 digitos como 12345(validar numeros de telefonos,num detarjeta,etc)
        
         \D: Coincide con cualquier carácter no numérico. Equivalente a [^0-9]
          ^\D{5}$ - le estamos diciendo que solo puede introducir 5 carcteres no numeros 

        \w: Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_] 
           ^\w+@$ -  caracter alfanumerico osea: abkcc 12 3 4 56(admite tanto letras como numeros _)si ponemos un punto no 
        no coincidiria el guion bajo si pero guion medio no 

        \W: Coincide con todo menos caracteres de palabra.
         ^\W+$ - coincide con todo menos con caracteres de a 'a' a la 'z' tanto minusculas como mayusculas, ningun numero ni guion bajo
         si admite puntos guines medios admiracion interrogacios osea carcteres extraños(sirve para verificar si tiene caracteres 
            extraños el campo a validar) 

*/


const text=document.getElementById('text').textContent;

