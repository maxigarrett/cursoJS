/*FUNCIONES:
    son fragmentos de codigo que escribimos para ejecutar una tarea y no volver a escribir codigo mas de una vez.

    Nos ayuda a modularizar el codigo, es decir, ayuda a encontrar mas facil los errores.

    Las funciones deben realizar una sola tarea y si hay mas tareas hacemos mas funciones es un error q la funcion realicevarias
    tareas

    antes la sintaxis era:
        function nombreFuncion()
        {
            codigo a ejecutar
        }
        
        ESTA EL LA SINTAXIS ACTUAL
        const nombreFuncion=() =>
        {
            codigo a ejecutar
        }
    puede devolver o no un resultado una ves ejecutado todo el codigo de la funcion ejemplo

       function nombreFuncion(parametro1, parametro2)
        {
            return parametro1 + parametro2
        } 

        const nombreFuncion=(parametro1, parametro2) =>parametro1+ parametro2
        {
            si es una sola linea no hace falta utilizar return sino va acá la suma con su return
        }
 */

//  SE CREA FUNCION------------------------------------------------------------------------
 function saludar()
 {
     console.log('hola');
 }
 const saludarActual =()=>
 {
    console.log('hola');
 }
//  LLAMAMOS FUNCION O INVOCAMOS FUNCION
 saludar();
 saludarActual();
// ------------------------------------------------------------------------------------------------

// ---------------------FUNCION SALUDA COMPARAMETRO------------------------------------------------
const saludarUsuario=(saludo) =>
{
   return console.log(`hola ${saludo}`);
}
saludarUsuario('maxi');
//  ----------------------------------------------------------------------------------------------------

const funcionSuma=(parametro1, parametro2) =>
{
    //si se cumple la condicion entra en el if y cuando retorna sale delcodigo y no ejecuta el segundo return osea el return 
    // rompe la funcion y se sale
    if(parametro1==2)
    {
        return parametro1+ parametro2;
    }

    return parametro1;
}

console.log(funcionSuma(1,3));
