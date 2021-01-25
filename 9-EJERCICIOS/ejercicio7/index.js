/*crea tres arrays. el primero tendra 5 numeros y el segundo se llamara pares y el tercero impares, ambos estaran vacios. despues
multiplica cada uno de los numeros del primer array por un numero aleatorio entre 1 y 10, si el resultado es par guarda ese numero
 en el array de pares y si es imapr en el array de impares.
  muestra por consola:
 la multiplicacion que se produce junto con suresultado con el formato 2*3=6
 el array de pares e impares*/

 const numeros=[1,2,3,4,5];
 let pares=[];
 let impares=[];

 for(const num of numeros)
 {
    let aleatorio=  Math.round(Math.random() *10+1);//para que genere un numero aleatorio entre 0 y 10 pero le sumamos 1 y va de 1 a 10 
    const result=num * aleatorio;//multiplicamos el numero del array almacenado en num por numero aleatorio
   

    // muestra por consola:
    // la multiplicacion que se produce junto con suresultado con el formato 2*3=6
    // el array de pares e impares
    console.log(`${num} X ${aleatorio} = ${result}`);

    //por cada vuelta de bucle se multiplicara una posisicon del array por un numero aleatorio si el resultado es par entrara en 
    //este if para rellenar el array pares
     if(result % 2==0)
     {
         //este metodo mete lo q le digamos al final del array
        pares.push(result);
     }
     else
     {
         impares.push(result);
     }


 }

 console.log(pares);
 console.log(impares);


