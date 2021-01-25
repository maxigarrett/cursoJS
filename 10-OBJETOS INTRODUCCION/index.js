/**OBJETOS INTRODUCCION
 son estructuras de datos que representan propiedades, valores y acciones que puede realizar el objeto.
todos los objetos tienen propiedades o atributos y comportamientos o acciones representadas por pares de clave(key): valor(value)
ejemplo-> propiedad de la masea puede ser la anchura, el color, el material de esa mesa...ACCION en un coche por ejemplo acelerar
,frenar,etc...
 */

 const Persona = 
 {
    nombre :'Juan',
    edad :26,
    hijos :['laura','diego','aldana','rosa','tomas'],
 }

//  console.log(Persona);

// accedemos a la propiedad nombre 
console.log(Persona.nombre);
// tambien podemos poner Persona['name'] pero si lo ponemos sin comillas el programa buscara una variable llamada nombre y no 
// existe pero entre comillas lo toma como clave y si existe e imprimira su valor
console.log(Persona['nombre']);

// para imprimir a la clase lo tratamos como un array aunque no lo es osea imprimimos Persona de donde se guarda la info [per]
for(const per in Persona)
{
    console.log(Persona[per]);
}


// si queremos acceder solo al objeto hijos es un array y para obtener los valores usamos for of pero el objeto a recorrer y su
// propiedad se lo especificamos con Persona.hijos sino dara error
for(const per of Persona.hijos)
{
    console.log(per);
}
// utilizamos el join para separar cada elemento del array 
console.log(`hola ${Persona.nombre}, tienes ${Persona.edad} años y tus hijos son ${Persona.hijos.join('- ')}`)