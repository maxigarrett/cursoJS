/*POO

    es un paradigma de la progrmacionque actualiza la forma de programar anterior que es la progrmacion estructurada
    
    Algunos de los conceptos fundamentales son:
    *Clase
    *Herencia
    *Objeto
    *Método
    *Evento
    *Etc...

CLASES
    son plantillas que se utilizan para crear objetos iguales.

    Cuando creamos un objeto, a esa accion se la denomina INSTANCIAR un objeto.

    Necesitamos un afuncion constructora. Se tiene que llamar al constructor y se ejecuta cada vez que creamos un objeto.

    class Persona
    {
        constructor(nom, apellido,edad)
        {
            this.nombre=nom;
            this.apellido=ape;
            this.edad=ed;
        }
    }
FUNCIONES:
los objetos pueden tener funciones asociadas a el.en ese caso se les denomina MÉTODOS

DENTRO DE LA cLASE PERO FUERA DEL CONSTRUCTOR SE CREAN LOS METODOS
    saludar()
    {
        return `hola, me llamo${this.nombre} y tengo ${this.edad} años`;
    }



CREAR OBJETO: const juan=newPersona('juan','garcia',30);

una vez intanciado podemos acceder a sus propiedades y metodos de la clase intanciada atrvez del punto
juan.nombre;
juan.saludar(); || juan['saludar']();
*/

class Persona
{
    constructor(nom,ape,ed)
    {
        this.nombre=nom;
        this.apellido=ape;
        this.edad=ed;

        this.datos=`hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
    }

    saludar()
    {
        return `hola, me llamo ${this.nombre} y tengo ${this.edad} años `;
    }
}

// INSTANCIAMOS
const juan= new Persona('juan','garcia',25);
const maria= new Persona('maria','garcia',30);

//MOSTRAMOSPOR CONSOLA LLAMANDO AL METODO SALUDAR
console.log(juan.saludar());

console.log(maria.saludar());







