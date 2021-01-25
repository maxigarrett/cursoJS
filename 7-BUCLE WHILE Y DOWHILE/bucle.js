/*existe bucles de determinados(for sabemos el numero de vueltas) e indeterminados(while dowhile no sabemos el numero de vueltas)
    sintaxis while:
    while(condicion para q se repita) sale encaso de ser falsa osa que no se cumpla la condicion
    {
        codigo a ejecutas
    }
    
    do
    {
        codigo a ejecutar(primeroejecuta el codigo despues se fija en la condicion si se cumple o no)
    }
    while(condicionpara q se repita) sale en caso de ser falsa osea que no se cumpla la condicion*/


    // ejemplo de introducir contraseña usaremos bucle indeterminado porque no sabemos las veces q se va a repetir
    //se saldra del bucle cuando el usuario introduzaca hola por eso no sabemos cuantas veces se repetirá

    let pass="";//si ponemos hola acá nunca entraá en el bucle porque para q entre tiene q ser distinto de hola

    while (pass!='hola')
    {
        pass=prompt('introduzaca la contraseña');
        
    }

    console.log('fin bucle');


    // si la contraseña ya tiene almacenada un hola se ejecutará una ves si o si ejecuta una ves el codigo despues evalua la 
    // condicion
    do
    {
        pass=prompt('introduzaca la contraseña');
    }while(pass!='hola');