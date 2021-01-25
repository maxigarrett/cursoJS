/*esciba un programa que pida un numero entero mayor que cero y calcule su factorial.
el factorial es el resultado de multiplicar ese numero por sus anteriores hasta la unidad. 
5= 5*4*3*2*1=120*/

let numero=parseInt(prompt('ingrese un numero'));
let resultado=1;

//la primer vulta el valor que introdjo el usuario es 5 entonces resultado es igual 1 ( )
//entonces resultado*i seria 1*5 depues decrementa e i vale 4 por lo uqe seria
//resultado * i  5*4=20
//la otr avulta de bucle i vale 3 entonces 20(resultado)* 3(i)=60 y asi hasta que i valga 1 
for(let i=numero;i>0;i--)
{
   // console.log(`${numero} * ${i} = ${numero * i}`);
    resultado=resultado *i;
    console.log(`el factorial de ${numero} es ${resultado}`);
}
