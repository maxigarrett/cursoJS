/*dado un array de letras, solicita un numero de dni y calcula que letra le corresponde. el numero no puede ser negativo ni tener
 mas de 8 digitos. la pisicion de la letra es el resultado de modulo del numero introducido entre 23
 const letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']; */

 const letras=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

 //pedimos al usuario el numero de dni
 const DNI=prompt("introduce tu dni");

 //ahora tenemos q comprobar q el numero no se a negativoni tenenr mas de 8 digitos.
    if(DNI.length==8 && parseInt(DNI)>0)
    {
        //veremos el resultado de el numero de dni por el modulo de 23
        let letrita=DNI % 23;
        console.log(letrita);//muestra el resultado y se lo asignamos ael array letras como posicion a buscar esa letra
        console.log(`tu dni es: ${DNI} ${letras[letrita]}`);
    }
    else
    {
        console.log('el dni debe ser de 8 digitos y no se puede introducir numeros negativos');
    }