/*Crea una clase Libro
la clase libro tendrá titulo,autor,año y genero. Crea un metodo que devulva toda la informacion del libro.
pide tres libros y guardarlos en un array. Los libros se introduciran al array el programa pidiendo los datos con prompt.
validar que los campos no se introduzcan vacios.
validar que el año sea un numero y que tenga 4 digitos.
validar que el genero sea: aventura,terror o fantasia.
crea un funcion que muestre todos los libros.
crea una funcion que muestre los autores ordenados alfabeticamente.
Crea una funcion que pida un genero y muestre la informacion de los libros que pertenezcan a ese genero usando un metodo que 
devuelve la informacion */

class Libro
{
    
    constructor(tit,aut,an,gen)
    {
        this.titulo=tit;
        this.autor=aut;
        this.ano=an;
        this.genenro=gen;
    }

    // METODO MUESTRA INFO LIBROS
    Mostar()
    {
        return `Titulo del libro: ${this.titulo} que lo escribio el  Autor ${this.autor} en el
         Año ${this.ano} y del Genero ${this.genenro}`;
    }

    //OBTENEMOS SOLO AUTORES
    getAutor()
    {
        return this.autor;
    }
    //OBTENEMOS SOLO EL GENERO
    getGenero()
    {
       return this.genenro;
    }
}

// ARRAY VACIO
let libros=[];

//para q solo se introduzcan 3 libros
while(libros.length < 3)
{
    let titulo=prompt('intruduce el titulos del libro').toLowerCase(); 
    let autor=prompt('intruduce el autor del libro').toLowerCase(); 
    let ano=prompt('intruduce el año del libro'); 
    let genero=prompt('intruduce el genero del libro').toLowerCase(); 

    // VALIDACIONES DE LOS CAMPOS
    //isNan valida si es un numero o no despues como hacemos una validacion para un campo en especifico lo enecerramos entre 
    //parentesis ya que evaluamos los generos introducidos
    if(titulo !='' && autor !=''&& genero !=''&& !isNaN(ano) && ano.length == 4 && (genero=='aventura' || genero=='terror' || genero=='fantasia'))
    {
        libros.push(new Libro(titulo,autor,ano,genero));
    }

}
//------------------------------------------------------------------------------------------------
//FUNCION QUE MUESTRE TODOS LOS LIBROS
const MuestraLibros=()=>
{
    console.log(libros);
}
MuestraLibros();

// ---------------------------------------------------------------------------------------------------
//FUNCION PARA ORDENAR ALFABETICAMENTE LOS AUTORES
const OrdenaAutores=()=>
{
    let autoresordenados=[];//creamos array vacio
    for(const autores of libros)
    {
        //le metemos dentro los autores llamando al metod de clase libro que devulve los autores
        //en la variable autores se almacena los el array libros que llenamos en el ciclo while
       autoresordenados.push(autores.getAutor());
    }
    console.log("ordenados alfabeticamente: "+autoresordenados.sort());
    
}
OrdenaAutores();

// ---MOSTRAR GENERO QUE INDIQUE EL USUARIO-------------------------------------------------------------------------------------------------------

const muestraGenero=()=>
{
    let generos=prompt('introduce el genero a buscar');

    for(const genero of libros)
    {
        if (genero.getGenero()==generos)
        {
            console.log(genero.Mostar());
        }
    }
}
muestraGenero();
