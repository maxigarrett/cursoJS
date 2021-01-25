/*Insertar y Eliminar Elementos
    parent.insertBefore(newElement,referenceElement) - Insertar un elemento antes del elemento de referencias
    
    Soporte Total
        parent.insertAdjacentElement(position,element).

        parent.insertAdjacentHTML(position,HTML). no se usa mucho
        parent.insertAdjacentText(position,text). no se usa mucho

    Posicion de parent.insertAdjacentElement(position,element):
        beforebegin - antes de que empiece(hermano anterior).
        afterbegin - despues de que empiece(primer hijo).
        biforeend - antes de que acabe(ultimohijo).
        afterend - despues de que acabe(hermano siguiente).

parent.replaceChild(newchild,oldchild) - remplaza un hijo por otro

*/

const listUl = document.getElementById('lista');

const newElement = document.createElement('li');//creamos nuevo elemento

newElement.textContent='Soy un elemento nuevo';//le agregamos contenido

// listUl.appendChild(newElement);//lo insertamos en la ultima posicion aunque agregemos mas desde el html siempre se ubicara al ultimo

//se ubica antes del hijo 0
// listUl.insertBefore(newElement,listUl.children[0]);



// ----------------------------------------------SOPORTE TOTAL-----------------------------------------------------------
// como listaUl es el padre y lo estamos colocando como hermano anterior(beforebegin) se ubicara como hermano de ul el li y nosotros
// lo queremos como hijo del ul al li para eso tendremos que agregar children[0]
listUl.children[0].insertAdjacentElement('beforebegin',newElement);
                                        // VALORES DE PARAMETROS----------------------------------

//no hay necesidad de usar cildren[0] ya que con afterbegin le decimos que empiece depues del primer hijo a la lista
listUl.insertAdjacentElement('afterbegin',newElement);
                                        // VA;ORES DE PARAMETROS----------------------------------
                            

// se coloca como ultimo hijo
listUl.insertAdjacentElement('beforeend',newElement);
                                        //VALORES DE PARAMETROS ----------------------------------

// colocarlo como hermano siguiente necsitamos decirle children[0] para que no se coloque como hermano siguinte del ul
// en el HTML solo ahy 2 li si a children[2] no lo encontrara ya que solo existe posicion 0 y 1 emtonces no se colocara y desaparece
listUl.children[2].insertAdjacentElement('afterend',newElement)

                                        //METODO DISTINTO QUE HACE LO MISMO ----------------------------------

// no se suele utilizar mucho
listUl.children[2].insertAdjacentHTML('afterend','<li>Elemento con HTML</li>');

                                        //METODO DISTINTO QUE HACE LO MISMO ----------------------------------

// no se suele utilizar mucho
listUl.children[3].insertAdjacentText('afterend','<li>Elemento con text</li>');
// ----------------------------------------------------------------------------------------------------------------------------



// -------------------------------------------REMPLAZAR UN HIJO CON OTRO--------------------------------------------------------------
listUl.replaceChild(newElement,listUl.children[0])







/*------------------------------METODO MAS NUEVOS Y CENCILLOS QUE HACEN LO MISMO QUE LOS DE ARRIBA------------------------------------------------------------------------------------------
DOM manioulation convenience method - JQuery like
https://caniuse.com/#search-JQery-like

Position:
    parent.before() - antes de que empiece(hermano anterior).
    parent.prepend() - despues de que empiece(primer hijo).
    parent.append() - antes de que acabe(ultimohijo).
    parent.after() - despues de que acabe(hermano siguiente).

    child.replaceWith(newChild).
 */


// como se colocara como hermano anterior se pone como hermano del ul y nodotros lo queremos como hijo de ul por eso usamos children
listUl.children[0].before(newElement);


listUl.prepend(newElement);//este se coloca como primer hijo sin usar childre como antes con before

listUl.append(newElement);//antes de que acabe la lista se coloca

listUl.children[2].after(newElement);

//remplazamos hijo 
// listUl.children[0].replaceWith(newElement);
// si lo tuvieramos referenciado con un id seria asi:
document.getElementById('li-segundo').replaceWith(newElement);

// -------------------------------------------------------------------------------------------------------------------------






/*
Clonar y Eliminar Elemento:
    element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clono todo el elemento con los hijos, si le pasamos false clona
    solo el elemento sin hijo
    elemento.remove() - elimina el nodo del DOM.
    element.removeChild(child) - elimina el nodo hijo del DOM s */
// --------------------------------------------CLONAR Y ELIMINAR ELEMENTOS------------------------------------------------
let clonar= listUl.cloneNode(true);//lo guardamos en una variable
console.log(clonar);//mostramos por consola la clonacion para ver si se hizo bien
clonar.id='list-clon';
listUl.after(clonar);//lo agregamos a la lista


// listUl.remove();
listUl.removeChild(listUl.children[0]);//removemos un hijo