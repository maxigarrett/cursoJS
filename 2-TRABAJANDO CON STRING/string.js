//JAVA SCRIPT: es un lenguaje que trabaja mucho con lenguajes de textos
  
/*METODOS Y PROPIEDADES DE LOS STRING 
    Metodo: es todo aquello que la cadena puede hacer. Ej: convertirse en mayusculas.Los metodos son cosas que los objetos o los S
    String en este caso pueden hacer por el echo de ser cadenas
    Propiedades: Son las caracteristicas que las cadenas o cadena tiene por ser una cadena.Ej: Longitud. Cuando nosotros tenemos
    una palabra hay una propiedad que existe que es la longitud de esa cadena(length). Los string solo tienen tres propiedades
    
    se emplea usando la nomenclatura del punto:
        cadena.metodo | cadena.toUpercase(); los metodos siempre terminan con parentesis y pueden llevar parametros
        cadena.propiedad | cadena.length

    VER TODOS LOS METODOS http://www.w3schools.com

   ------------------------------------------------------------------------------------------------------------------------ */

    // PROPIEDAD hay 2 mas que no usamos
    let cadena='hola mundo';

    // propiedad length- devuelve la longitud de la cadena tambien cuenta espacios en blanco
    console.log('longituda de caracteres: ' + cadena.length);

    // METODO

    // todos los metodos devuelven una cadena nueva. la cadena original no será modificada
    // toUpercase()-> devuelve la cadena a mayusculas(UTIL PARA VALIDAR FORMULARIOS)

    console.log('pasamos a mayusculas: ' + cadena.toUpperCase());
    // guardamos la cadena a mayusculas en una variable
    let cadenaMayusculas= cadena.toUpperCase();
    console.log('guardado en una variable: '+cadenaMayusculas);


    // toLowerCase()->devuelve la cadena a minusculas (UTIL PARA VALIDAR FORMULARIOS ya q cuando validamos informacion de 
    //usuario es mas facil pasarlo a mayuscula y minusculas por si el ususario intercalo matus y minus)
    console.log('a minusculas' + cadena.toLocaleLowerCase());

   
    // indexOf(String)-> devuelve la posicion en la que se encunetra el string, si no lo enceuntra devuleve un -1 devulve la 
    // posicion del caracter si escribimos una palabra busca la posicion del primer caracter con q empieza la palabra
    console.log('posicion del caracter: '+cadena.indexOf('o'));


    // repleace(valor a buscar, valor nuevo)-> remplaza el frangemento de la cadena que le digamos y pone el valor nuevo.
    console.log('remplazamos la palabra mundo: '+cadena.replace('mundo','pais'));

   
   
    // substring(inicio[,fin])-> extrae los caracteres desde inicio hasta fin(el final no se incluye) 
    // si no se incluye el fin se extare hasta el final
    // cuando se encuentra algo dentro de corchetes en un metodo significa q es opcional
    console.log('de la posicion 3 hasta final: '+cadena.substring(3));//va de la posicion 3 hasta el final de HOLA MUNDO osea "a mundo"

    console.log('de la posicion 3 hasta la posision 7: '+cadena.substring(3,7));



    // slice(inicio[,fin])-> igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde atras
    // si no se incluye el final extrae hasta el final
    // (2,-4) Empieza a contar en el tercer caracter y los 4 ultimos no los considera
    console.log('devuelve los tres ultimos caracteres: ' +cadena.slice(-3));
    console.log('arranca de 0 e ignora los ultimos 6 caracteres: ' +cadena.slice(0,-6));



    // trim() elimina los espacios en bkanco al principio y final de la cadena
    // se usa en FORMULARIOS porque el usuario a introducido un espacio al principio o final sin querer y para a la hora de 
    // evaluar esa cadena los espacio en blanco cuentan asiq es mejor sacarlos
    let cadena2='      trim: hola youtube, estamos trabajando con cadenas';
    console.log(cadena.trim());



    // ES6 esoecificacion nueva


    // starswith(valor [, inicio])-> sirve para saaber si la cadena empieza con ese valor . devuelve trrue o false
    console.log(cadena.startsWith('h'));//devuelve true porque hola mundo empieza con H
    console.log(cadena.startsWith('H'));//false porque no empieza con H mayusculas
    console.log(cadena.startsWith('m',5));



    // endswith(valor[,longitud])->sirve para saber si la cadena termina con ese valor. devuelve true o false.
    console.log(cadena.endsWith('o'));//termina en o asiq devuelve un true

    // le decimos que si termina en a pero que considere solo los primeros cuatro caracteres termina en true
    console.log(cadena.endsWith('a',4));
    console.log(cadena.endsWith('n',8));
    console.log(cadena.endsWith('mundo'));//podemos decirle en q frase termina




    // includes(values[,inicio])->igual que indexOf pero devuleve true o false
    console.log(cadena.includes('n'));//devuelve true porque contienen n
    console.log(cadena.endsWith('a',2));//busca la a aprtir de la posiscion 2 y si existe devulve true



    // repeat( valor)-> repite el String el numero de veces que le indiquemos
    let cadena3=' hola ';
    console.log(cadena3.repeat(3));
    console.log(' r '.repeat(3));//podemos decirle que repita una letra q se nos ocurra y no una variable con una cadena


    // template String (no es precisamente un metodo)
    let nombre='juan';
    let apellido='gomez';
    let edad=20;

    // forma normal de mostrar pero es comlicado mostrar frases y concatenar variables es mejor usar template String
    console.log('hola '+ nombre+' '+apellido+' tu edad es ' + edad);

    // para esta comillas pulsar dos veces la tecla al lado de la p y usamos TEMPLATE STRING
    console.log(`hola ${nombre} ${apellido} tu edad es ${edad} y tendras ${edad+1}`);






