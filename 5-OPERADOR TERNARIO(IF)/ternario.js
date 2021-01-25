/*OPERADOR TERNARIO
    se utiliza cuando una condicion será true o false, al igual que el if.
    su ejecucion puede tener una o varias sentencias, en caso de varias iran separados por comas  entre parentensis.
    
    (condicion a evaluar)? true->lo que pasa en caso de q sea true : false->lo q pasa en caso de false
    
    si tenemos varias sentencias van entre parentensis:
    
        (condicion a evaluar)? (sentencia,sentencia):(sentencia,sentencia);*/




let num=2;   //la parte true si es par(if)       //la parte false si no es(else)
 (num % 2 ==0)? console.log(`${num} es par`) : console.log(`${num} es inpar`)  ;



//  varias sentencias
(num % 2 ==0)? 
    (   
        console.log(`${num} es par`),
        console.log(`${num} es par`)
    ) 
    : 
    console.log(`${num} es inpar`)  ;