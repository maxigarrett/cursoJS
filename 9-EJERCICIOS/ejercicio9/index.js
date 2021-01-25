/*solicitar al usuario una palabra y mostrar por consola el numero de consonantes, vocales y longitud de la oalabra */
//tolowercase para q no importa como introduzca le palabra simpre será minusculas
const palabra=prompt('introduce la palabra').toLowerCase();

let consonantes=0;
let vocales=0;

for(const letra of palabra)
{
    console.log(letra);

    //comprobamos las vocales
    if (letra=='a' || letra=='e'|| letra=='i'|| letra=='o' || letra=='u' )
    {
        vocales++;
        
    }
    else//en caso de no ser vocales seran consonantes
    {
        consonantes++;
    }
}
console.log(`tu palabra tiene ${vocales} vocales  y ${consonantes} consonantes y tiene un total de ${palabra.length} palabras`);