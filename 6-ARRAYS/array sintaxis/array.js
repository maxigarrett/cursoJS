/*ARRAY:
    *son estructuras que nos permiten almacenar varios datos y agruparlos.
    *se pueden llenar con cualquier tipo de dato válido en javascript y deben ir separados por comas.
    * se pueden mezclar tipos de datos pero no es recomendable 
    * se declaran con llaves cuadradas o corchetes[]
    * pueden declaraese vacios o con un contenido ya establecido
    * pueden añadirse o eliminar elementos en el momento que queramos(como las listas)
    
    
    
    array vacio
    let array=[];
    
    llenarlo manualmente
    let numero=[1,2,3,4,5]; indice [0]=1 , indice [1]=2 , indice [2]=3 , indice [3]=4 , indice [4]=5
    
    *cada uno de los elementos podrá ser identificado por su indice, es decir, su posicion.*/



    let numeros=[1,2,3,4,5];

    console.log(numeros);

    // nos muestra la posicion o indice 0 que tiene el elemento 1
    console.log(numeros[0]);

    // sumamos dos posiciones distintas resultado es igual a 3
    console.log(numeros[0] + numeros[1]);    


    let palabras=['hola','estamos','en', 'javascript'];
    console.log(`la palabra ${palabras[3]} tiene ${palabras[3].length} letras`);