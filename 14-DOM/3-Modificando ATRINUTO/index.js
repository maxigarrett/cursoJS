/*Atributos
    element_getAttribute('atribute')- devulve el atributo
    element_setAttribute('atribute', value)- asignarle un atributo primer argumento y seguno el valor del atributo
    
Clases
    element.ClassList.add('class','class',.....).- Añadimos todas las clases que queramos

    element.ClassList.remove('class','class',.....).-Removemos todas las clases que queramos

    element.ClassList.toggle('class',[, force]).- si tiene una clase se la quita y si no la tiene se la pone(se usa mucho en menus para moviles)
                                                 de forma opcional el segundo parametro es devolver true o false en funcion de si tiene la clase 
                                                 o no...

    element.ClassList.contain('class').-devulve true o false si tiene la clase o no

    element.ClassList.replace('oldclass',newClass). -sustituir una clase por otra.. le decimos clase a sustituir y ponemos nueva

Atributos directos
    id
    value 
*/

const title=document.getElementById('title');
const name=document.getElementById('name');
console.dir(title);
console.dir(name);

// Atributos GET podemos acceder a cualquiera de la etiqueta siempre primero capturandolo con getElementById();
console.log("tipo de input: "+ name.getAttribute('type'));//nos dira por consola que es de tipo text el type del input


//Atributos SET modificamos el valor primer atributo el atributo y sugundo parametro el valor a introducir a ese atributo
name.setAttribute('type','number');

// mostramos como se cambio a number
console.dir('atributo cambiado a '+ name.getAttribute('type'));
console.log(name)
// -------------------------------------------------------------------------------------------------------------------------------------

// CLASES
title.classList.add('main-title','order-title');//nueva clase al H1
title.classList.remove('title');//removemos la orimer clase
console.log(title);

// para saber si tiene o no una clase
if(title.classList.contains('title'))
{
    console.log(`tiene la clase title`);
}
else
{
    console.log(`No tiene la clase title`);
}


// SUTITUIMOS UNA CLASE POR OTRA PRIMER PARAMETRO CLASE EN USO SEGUNDO PARAMETRO NOMBRE A REMPLAZAR 
console.log('clase main-title remplazada por menu-titulo');
title.classList.replace('main-title','menu-titulo');
console.log( title);


// Atributo directos al poner $0 en algun elemento para ver todos sus atributos podemos ver que algunos no tienen desplegables con
// mas informacion a esos podemos acceder de forma directa a los que mas se suelen acceder es al id,innerHTML,innerText,value,textContent
// ID
console.log(title.innerHTML)//recoge las etiquetas del elemento del H1
console.log(title.textContent)//recoge solo el texto plano

// VALUE
console.log(name.value);//para obtener el contenido de lo que se escribe en el input osea obtenemos el valor 


// ejemplo a la hora de validar formulario si queremos saber la longitud de lo que escribio. para obtener cosas del input como su 
// longitud o demas cosas siempre va el value primero que es sirve para capturar esa informacion introducida el el input. por ejemplo
// si es de tipp number podemos decirle con un if que cantidad de numeros puede intoruduci, etc
console.log(name.value.length);

