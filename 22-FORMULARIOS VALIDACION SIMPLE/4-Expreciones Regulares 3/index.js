/*ESPRECIONES REGULARES 
    Son una secuencia de caracteres que forma un patron de busqueda, principalmente utilizada para la busqueda de patrones de cadenas
    de caracteres u operaciones de sustituciones.
    

Sintaxis:
    /patron/. empieza con / despues el patron a buscar y termina con otro/
    
Bnaderas:
    i: ignore case. No diferencia entre mayusculas y minusculas
    g: global. Busca de forma global, es decir, no se para despues de la primera coincidencia

    https://www.regex101.com pagina web para comprobar la expresion regular

Delimitadores:
        ^ Antes de este símbolo no puede haber nada
        $ Después de este símbolo no puede haber nada
        ^hola$


    Cantidad:
        - llaves: lo que está antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posibles. 
            {n} Se tiene que repetir n veces
            {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
            {n,} Se tiene que repetir como mínimo n veces y sin máximo osea el maximo es infinito 
            ejemplo: ^[a-zA-Z]{1,3}@{1}$ - 
                le esamos diciendo que tiene que haber nada anterior a lo que vamos a buscara (^), entre 'a' y 'z' minusculas y 
                'A' y 'Z' mayusculas ([a-zA-Z]) y tiene que estar como minimo una vez y como maximo 3 la repeticion entre 'a' y 'z'(
                {1,3}).   y el @ se tiene que repetir 1 vez y no haber nada despues(@{1}$)
                entonces buscara por ejemplo aaa@,oas@ es decir cualquier conbinacion de solo tres letra y q termine en @
         
            ejemplor:^[a-zA-Z]{1,}@{1}$ - al sacarle el tre de la 'a' hasta la 'z' se puede repetir infinitas veces pero simpre 
                    terminando con @ osea: aaaaaashfasadiohpadl@
                    y si en el primer corchete cambiamos el 1 por el 2 tendria que repetirse minimo 2 veces para que la exprecion
                    regular lo tome en cuenta



        -asterisco: Lo que está antes del asterisco puede estar, puede no estar y se puede repetir.
                    ejemplo: .*@.*\..* - estamos diciendo que antes del arroba puede ir cualquier cosa(.*), despues tiene que haber un
                    arroba(@), y por delante puede haber cualquier cosa(.*), despues tiene que ir un punto(.), y por delante puede o 
                    no haber contenido(.*) entonces la validacion de la exprecion regular quedaria en true de la siguiente manera:
                    @.(ya q con el asterizco puede o no haber contenido tanto por delante o por detras del arroba), o tambien
                    asjfka@.(con el asterisco podemos poner contenido tanto por delante o no) , o alkjsnf@.ljkhf

                    otro ejemplo A-[0-9]* - aca le decimos que para validar y que sea true tiene que tener una 'A-' y seguido de un 
                    rango del 0 al 9([0-9]) que puede o no estar ya que tiene un asterisco por delante(*)
                    A-  o A-4


        -interrogación: Lo que está antes de la interrogación puede no estar, pero si está, solo puede aparecer una vez.
            ^[ae]?$ - por detras no tiene que haber nada(^), buscará los caracteres 'a' o una 'e' si ponemos las dos no dara
                     coincidencia ya que por delante ni por detras se aceptan cosas([ae]) y puede o no estar esa letra 'a' o 'e' si
                     no esta no importa pero si està solo puede estar una sola ves si colocamos mas no habra coincidencia
            
            ^[a-zA-Z]{1,}@?$ - aaa@ aca el arroba solo se puede poner una vez o ninguna aaa

        - operador +: lo que está antes del + tiene que estár una vez como mínimo
        A-[0-9]+ - le decimos que tiene que empezar por 'A-' y como minimo tiene que haber un numero entre 0 y 9([0-9]) si ponemos
                    mas numeros tambien sera valido pero si o si tiene que tener al menos un numero de ese rangoS
*/


const text=document.getElementById('text').textContent;

//DELIMITADORES
const regEx=/^lorem/gi
console.log(regEx.test(text))
const regEx2=/lorem$/gi
console.log(regEx2.test(text))//dara false ya que lorem si tiene contenido posterior


//CANTIDAD
const text2=document.getElementById('text2').textContent;
const regEx3=/^[a-zA-Z]{1,3}@{1}$/gi
console.log(regEx3.test(text2))//dara true ya que el parrafo 2 cumple con  la regla de la exprecion regular azs@