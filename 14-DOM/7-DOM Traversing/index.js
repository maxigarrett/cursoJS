/*DOM TRAVERSING (RECORRER/ATRAVESAR EL DOM)
    lo que hacemos con el DOM traversing es situarnos en un nodo y saber movernos hacia arriba y hacia abajo enfuncion
    de ese nodo que usamos como referencia
    
Padre- parent(nodo del que deciende)
    parentNode - Devuelve el nodo padre (que puede no ser un elemento)-> raro que un nodo padre no sea elemento investigar
    parentElement - Devuelve el nodo elemento padre
    
Nota
    los nodos del tipo Document y DocumentFragment nunca van a tener un elemeneto padre, parentNode y parentElement
    devolvera siempre Null. Porque Document es el punto mas alto del DOM entonces no tiene padre porque todo nodo
    desciende de document.
    
Hijos - child(nodo que desciende de un padre)
    -childNodes - devulve todos los nodos hijos como saltos de lineas si se encuntrar y coemntarios.
    -children - devuleve todos los nodos elementos hijos.no muestra los saltos de linea ni los espacios en blanco ni comentarios
    -firstchild - devulve el primer nodo hijo.
    -firstElementChild - devulve el primer nodo elemento hijo.
    -lastChild - devulve el ultimo nodo hijo.
    -lastElementChild - devulve el ultimo nodo elemento hijo.
    -hasChildNodes() - devulve true si el nodo tiene hijos y false si no tiene
    
Hermano - siblings(nodo al mismo nivel)
    nextSibling - devulve el sigueinte nodo hermano
    nextElementSibling - Devuelve el siguiente nodo elemento hermano
    previusSibling - Devuelve el anterior nodo hermano
    previusElementSiblign - Devuelve el anterior nodo elemento hermano

Cercano
    closest(selector) - Selecciona el nodo mas cercano que cumpla con el selector, aun es experimental

ANOTACION
    nodo elemento(son todos los nodos etiquetas)
    nodos hace referencia todo tanto saltos de linea como comentarios
*/



const primerUl=document.getElementById('lista');//objeto de referencia para subir y bajar en el DOM(primer UL)

// mismo resultado no devulve el padre del nodo seleccionado si concatenamos parent elemento o node sube un nivel-----------------
console.log(primerUl.parentNode);
console.log(primerUl.parentElement.parentNode.parentElement);
// -------------------------------


// ------------------------------------HIJOS-------------------------------------------------------------------------
// console.log(primerUl.childNodes);//todos los nodos hijos, comentario saltos de linea(se representan con data:\n o una flecha por 
// consola)
console.log(primerUl.children);//solo nodos elementos hijos (mas utilizado)
console.log(primerUl.children[2]);//para acceder a la posicion 2 del hijo de ul seria (son 3).. o cualquier otra posicion 
        // ------------------------------

// si vamos a consola desplegamos y vamos a childNodes devulve un array vacion ya que el salto de linea text no tiene hijos
// console.log(primerUl.firstChild);

//al tener salto de linea pra dentar mejor simpre que acceddamos a un hijo dara tipo texto por eso se usa firsElementChild
// dara tipo texto porque accede al primer nodo hijo que es el salto de linea el salto de linea es nodo y li es nodo elemento
console.log(primerUl.firstElementChild);


console.log(primerUl.lastChild);//toma al ultimo hijo nodo q es el salto de lina
console.log(primerUl.lastElementChild);//toma al ultimo hijo nodo elemento que es el UL ultimo
        // -------------------------------

//si el nodo seleccionado tiene hijos devulve true caso contrario flase
console.log(primerUl.hasChildNodes());
//dira false ya que devulve el nodo hijo de ul que es el salto de linea y ese salto no tiene hijo pero si usamos
// firstElementChild dara true
console.log(primerUl.firstChild.hasChildNodes());
        // -----------------------------------



// ---------------------------------------------HERMANOS----------------------------------------------------------------------------
console.log(primerUl.nextSibling);//devulve siguiente nodo hermano pero al haber salto de linea eso es lo q devolvera 

// se soliucion con
console.log(primerUl.nextElementSibling);//devolvera null es este caso porque el nodo UL que seleccionamos no tiene hermano
//subimos un nivel del ul con parentElement que es nav y el hermano siguiente de nav es el Scipt 
console.log(primerUl.parentElement.nextElementSibling);
        // -----------------


// 
console.log(primerUl.previousSibling);//devulve salto de linea
// con parentelemento no situamos un nivel superior osea el nav y su hermano anterior es el h1  
console.log(primerUl.parentElement.previousElementSibling);