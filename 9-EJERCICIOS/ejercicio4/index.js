/* Escribe un propgrama que pida un numero entero mayor que 1 y que escriba si el numero es primo o no
un numero primo es aquel que solo es divisible por si mismo y la unidad osea los primos son divisibles por si mismo y nada mas
si son divisibles por mas numero para que de 0 no son primos*/

let numero=parseInt(prompt('introduce un numero'));
let divisores=0;

//para q el usuaro si ingresa 1 no entre en los demas if y no ejecutamos el bucle
if(numero==1)
{
    console.log('numero 1 no es valido');
}
else
{
    //desde dos porque es el primero numero primo este bucle no esta contemplado el numero que elije el usuario por lo tanto
    //no se esta dividiendo por si mismo por lo que nunca va a ser primo
    for(let i=2;i<numero;i++)
    {
    
        if(numero % i==0)
        {
          console.log(`${numero} / ${i} = ${numero/i} no es primo`);
          divisores ++;//si entra en este bycle esta variable aumenta en 1 si es 0 es porque nunca entro e imprimira el otro if
          break;
        }
    }
}

if(divisores==0)
{
    console.log(`${numero} es primo`);
}