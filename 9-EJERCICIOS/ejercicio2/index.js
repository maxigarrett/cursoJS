/* Escribe un programa que pueda calcular el area de 3 figuras geometricas, triangulo, rectangulo y circulo. En primer
 lugar pregunta de que figura se quiere calcular el area, despues solicita los datos que necesitas para calcularlo.
triangulo= b*h/2
rectangulo=b * h
circulo=PI * r2(pi* radio al cuadrado)*/

let figura=prompt('introduce la figura geometrica que quieres calcular el are: triangulo, rectangulo o circulo');
let base;
let altura;
let radio;
switch(figura)
{
    case 'triangulo':
    {
        base=parseInt(prompt("introduce la base del triangulo")); 
        altura=parseInt(prompt("introduce la altura del triangulo"));

        console.log(`la base del triangulo es: ${(base * altura)/2}`)
        break;
    }

    case 'rectangulo':
    {
        base=parseInt(prompt("introduce la base del rectangulo")); 
        altura=parseInt(prompt("introduce la altura del altura"));

        console.log(`la base del rectangulo es: ${(base * altura)}`)
        break;
    }
    case 'circulo':
    {
        radio=parseInt(prompt("introduce el radio del circulo")); 
        

        console.log(`la base del circulo es: ${Math.PI * Math.pow(radio,2)}`)
    }
}