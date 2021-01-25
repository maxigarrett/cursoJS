/*DOM (DOCUMENT OBJECT MODEL)

    se considera DOM toda la estructura del documento HTML
    no es javascript, es una API(Aplication Programing Interface) y se utiliza a travez de javaScript
    
NODOS(cada etiquetadesde <!DOCTYPE html> <head>,etc se considera un nodo)
cada parte del arbol del documento se considera nodo
hay varios tipos de nodos, los mas utilizados son: a la hs de consultarlo devulve un numero para saber el tipo de nodo
    -Element Node-1(cualquier etiqueta HTML)->nodo de tipo elemnto
    -Text Node- 3(el contenido de la etiqueta)-> de tipo texto(contenido de la etiqueta)
    -Comment node-8(Cualquier comentario en HTML)->de tipo coemntario

cuando abrimos la herrramienta de desarrollador ponemos el inspector seleccionamos la etiqueta y en la consola para ver todo 
lo que tiene el h1 en este caso ponemos $0 y mostrara un desplegable...

a travez del punto accedemos a metodos para mostrar la informacion del nodo osea el h1 ej:
$0.nodeType devuleve un 1 porque el h1 es un nodo de elemento.
$0.nodeName devuelve H1

$0 muestra el desplegable y vamos a buscar el nodo de texto y si buscamos un atributo dice chilNodes:
(lo que dice la consola)0:#text "el texto del h1" y la forma de acceder a ese nodo de texto es como si fuera un array aunque no lo es
 entonces vamos a la consola sabiendo que es chilNodes y ponemos:
    $0.nodeChild[0].nodeType devuelve un 3 poruqe es un nodo de tipo texto
*/


