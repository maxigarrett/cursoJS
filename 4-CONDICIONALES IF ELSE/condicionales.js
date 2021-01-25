// if anidados comprobar que variables hay almacenadas en num1 y2
let num1=1;
let num2=5;

// si num1 es mayor a 0 entrará en el if 
if(num1>0)
{
    // al entrar en el primer if comprobará si num2 es mayor a 0
    if(num2>0)
    {
        // ya sabemos que los dos numeros son mayores a 0
        console.log(`${num1} y ${num2} son mayores que 0`);
    }
    else if(num2 < 0)
    {
        console.log(`${num1} es mayor que 0 y  ${num2} es menor a 0`);
    }
    else
    {
        console.log(`${num1} y ${num2} son igual que 0`);
    }
}
// en cas de que num1 no sea mayor a 0
else if(num1<0)
{
     // al entrar en el primer if comprobará si num2 es mayor a 0
     if(num2>0)
     {
         
         console.log(`${num1} no es mayor a 0 y ${num2} es mayores que 0`);
     }
     else if(num2 < 0)
     {
         console.log(`${num1} es menor que 0 y  ${num2} es menor a 0`);
     }
     else
     {
         console.log(`${num1} y ${num2} son igual que 0`);
     }
}
// en caso de q sea igual a 0
else
{
    if(num2>0)
     {
         
         console.log(`${num1} no es igual a 0 y ${num2} es mayores que 0`);
     }
     else if(num2 < 0)
     {
         console.log(`${num1} es igual que 0 y  ${num2} es menor a 0`);
     }
     else
     {
         console.log(`${num1} y ${num2} son igual que 0`);
     }
}
