/*ESPRECIONES REGULARES 
    Son una secuencia de caracteres que forma un patron de busqueda, principalmente utilizada para la busqueda de patrones de cadenas
    de caracteres u operaciones de sustituciones.
    

Sintaxis:
    /patron/. empieza con / despues el patron a buscar y termina con otro/
    
Bnaderas:
    i: ignore case. No diferencia entre mayusculas y minusculas
    g: global. Busca de forma global, es decir, no se para despues de la primera coincidencia

    https://www.regex101.com pagina web para comprobar la expresion regular

Comodines:
    -Sustitución: Define un comodín dentro del patron. El símbolo es el ".", esto lo que hace es definir un comodin dentro del
        patron,es decir, cualquier caracter dentro de ese patron. por ejemplo buscamos la palabra 'Lorem' pero no sabemos las 
        letras del segundo y tercer lugar que seria la 'o','r' entonces podemos poner L..em, es decir que cada punto equivale
        a cualquier caracter ya sea un '%' una ',' un espacio en blanco,etc
        si buscamos el nombre de una foto por ejemplo foto001.jpg, en la exprecion regular usando comodin seria asi:
            foto...\.jpg(con el salsh le decimos que el ultimo punto escape y lo tome como un punto de verdad) 
    
    -Listado de caracteres válidos: Entre corchetes se pone una lista de los caracteres válidos. 
        [aeiou] Con esto cogeríamos todas las vocales. tambien funciona con numeros[123](no significa 123 sino 1,2,3).



    
    -Rangos: Entre corchetes si ponemos un guión entre dos caracteres establecemos un rango. [a-z] Todas las letras minúsculas.
        es decir que ira de a hasta la z rescata todas las letra que vallan de la a hasta la z(segundo parametro marca el rango)
        no lo hace segun el alfabeto sino la tabla de codigo ASCII
        
    Tabla ASCII https://ascii.cl/es/
    
    Mezcla entre rangos y listas: 
        Podemos unir los dos anteriores en una sola expresión. [0-5ou] Serían números del 0 al 5, la letra "o" y la letra "u",
        tambien podria ser [a-eou]. irìa de la 'a' hasta la 'e' y el caracter o y el caracter u,es ecir, que el rango lo toma solo
        de la primera letra o numero despues del guion lo que pongamos despues solo será caracteres a tomar en cuenta sin rangos
        
    Cadenas completas:
        Para establecer una cadena completa debe ir entre paréntesis, si queremos más palabras irán separadas por un pipe. 
        (lorem|amet) es válida la palabra "lorem" y la palabra "amet" si dejamos espacios en blanco en las palabras a buscar
        tambien toma esos espacios y es posible que no encuentre la palabra por tener esapcios hay que tener cuidado en eso.

*/


const text=document.getElementById('text').textContent;

//SUSTITUCION
const regEx=/l..em/gi;
console.log(regEx.test(text));//si la palabra se encuentra devolverá true

const regEx2=/foto...\.jpg/gi;//barra invertida para que ese punto escape del comodin y lo tome como un punto real
console.log(regEx2.test(text));



// LISTADO DE CARACTERES
const regEx3=/[aei]/gi; const regEx4=/[1234]/gi;
console.log(regEx3.test(text));


//RANGOS
const regEx5=/[a-i]/gi;
console.log(regEx5.test(text));

//MEZCLA ENTRE RANGOS Y LISTAS
const regEx6=/[a-m01]/gi;
console.log(regEx6.test(text));

//CADENA COMPLETAS
const regEx7=/(lorem|dolor)/gi;
console.log(regEx7.test(text));
