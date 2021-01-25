/* ORDENAR 3 NUMEROS DE MAYOR A MENOR
posibilidades 3=3*2*1 (factorial de 3 al tener tres posibilidades)
y las combinaciones son:
abc=321
acb=312
bac=231
bca=132
cab=213
cba=123*/

// capturamos el id de los div del html
const number= document.getElementById('number');
const result= document.getElementById('result');

// ventanas emergentes para ingresar informacionS
let a= prompt('ingrese el primer numero', 'primer numero');
let b= prompt('ingrese el segundo numero', 'segundo numero');
let c= prompt('ingrese el tercer numero', 'tercer numero');

number.textContent=`los numeros son ${a} ,${b}, ${c}`;

// si a es el mayor dentro de este preguntamoos de b y c cual es el mayor
if(a>b && a>c)
{
    // b es mayor q c
    if(b>c)
    {
        // seraia el mayor a despues b ya q comprobamos con el if q es mayor a c y por ultimo c
        result.textContent=`el orden es ${a}, ${b}, ${c}`;
    }
    else
    {
        // seria el mayor a despues c y ultimo b
        result.textContent=`el orden es ${a}, ${c}, ${b}`;
    }
}
else if(b>a && b>c)
{
    if(a>c)
    {
        result.textContent=`el orden es ${b}, ${a}, ${c}`;
    }
    else
    {
        result.textContent=`el orden es ${b}, ${c}, ${a}`;
    }
}

else if(c>a && c>b)
{
    if(a>b)
    {
        result.textContent=`el orden es ${c}, ${a}, ${b}`;
    }
    else
    {
        result.textContent=`el orden es ${c}, ${b}, ${a}`;
    }
}
