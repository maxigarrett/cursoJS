/*MATH: el objeto math se utiliza cuando queremos hacer operaciones matematicas mas complejas o especificas.algo mas aya de las 
4 operaciones basicas. Ademas MATH es un objeto estatico,es decir, que hay q usar su nombre para poder usar sus metodos o propiedades

como todo los objetos utiliza la nomencalatura del punto.Ej: MATH.random

este objeto es predefinido del lenguaje es decir que ya lo trae JS en su programacion

    PROPIEDES:
    *MATH.E-MATH.PI (E se usa en trigonometria y logaritmos y PI para radio de circunferencias y son constantes)
    
    METODOS:(los mas utilizados)
    *MATH.abs(x): devuelve el valor absoluto de x.(el valor absoluto es el numero pero sin el signo + o -)
    *Math.cell(x): devuelve el entero mas pequeño mayor o igual que un numero.(redondea hacia abajo)
    *Math.floor(x): devuelve el entero mas grande mayor o igual que un numero.(redondea hacia arriba)
    *Math.pow(x,y): devuelve la potencia de x elevado a y, es decir, la base es x y el exponente es y
    *Math.random(): genera un numero aleatorio entre 0 y 1
    *Math.round(): devulve el valor de un numero redondeado al entero mas cercano.
    *Math.sign(x): devuelve el signo de la x, que indica si x es positivo, negativo o cero.
     *Math.sqrt(x): devuelve la raiz cuadrada de x.
*/

// *MATH.abs(x):
    let num=-5;
    console.log('numero absoluto '+Math.abs(num));
// -------------------------------------------------------------------------------------------

    //  *Math.cell(x) *Math.floor(x)
    let num2=3.2;
    console.log('redondeo hacia arriba '+Math.ceil(num2));//redondea hacia arriba

    console.log('redondeo hacia abajo '+Math.floor(num2));//redondea hacia abajo

// --------------------------------------------------------------------------------------------------

    //  *Math.pow(x,y)
    console.log('exponenciacion '+Math.pow(2,3));
// ----------------------------------------------------------------------------------------

//  *Math.random() *Math.round()
// random lo multiplicamos por 100 para que genero un numero aleatorio entre 0 y 100 y redondeamos con round
    console.log('numero aleatorio redondeado '+Math.round(Math.random()*100));

// ---------------------------------------------------------------------------------------------------------

// *Math.sign(x):
console.log(Math.sign(-5));