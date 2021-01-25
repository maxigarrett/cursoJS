/*dao un array que contiene ['azul','rojo','verde','rosa'] determinar si un color introducido por el usuario a travez de un
prompt se encunetra dentro de array o no */

const color=['azul','rojo','verde','rosa'];

let buscarColor=prompt('introduzca un color').toLowerCase();

//si no encuntra la palabra en el array el indexof devulve un -1 por eso preguntamos si es distinto osea si encontró un color
if(color.indexOf(buscarColor)!= -1)
{   
    console.log(`el color se encontro y es ${buscarColor}`);
}
else
{
    console.log(`el color ${buscarColor} no se encuentra`);
}