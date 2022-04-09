/* console.log("************* Elementos del DOCUMENTO *************");
// Contexto Global
console.log(window);
// Document: La parte visible del navegador.
console.log(document);
// document.head: Selecciona la etiqeuta <head> del Html
console.log(document.head);
// document.body: Selecciona la etiqeuta <body> del Html
console.log(document.body);
// document.documentElement: nos trae la etiquta <html> del html
console.log(document.documentElement);
// document.doctype: Ver la version de html
console.log(document.doctype);
// document.characterSet: Accedemos al tipo de caracteres de nuestro documento.
console.log(document.characterSet);
// document.title: Acceder al $titulo del documento html
console.log(document.title);
// document.links: Accede a los links del html
console.log(document.links);
// document.images: Accedemos a las imagenes del html
console.log(document.images);
// document.forms: Accede a los formularios del html
console.log(document.forms);
// document.styleSheets: Accede a los estilos css del html
console.log(document.styleSheets);
// document.scripts: Accede a los scripts js del html
console.log(document.scripts);
// document.getSelection(): Nos muestra el texto que hemos seleccionado.
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 2000);
// document.write: Escribe cosas en el documento HTML
// Es mala practica.
document.write("<h2>Hola Mundo desde el DOM</h2>")
 */


/* 
// Un elemento es una etiqueta html.
// Un nodo es un elemento o un texto.

// Metodos no muy usados:
console.log(document.getElementsByTagName("li")); // Llamar las etiquetas HTML
console.log(document.getElementsByClassName("card")); // LLamar las etiquetas HTML con su respectiva clase.
console.log(document.getElementsByName("nombre")); // LLama las etiquetas HTML con el atributo name="nombre".

// Metodos comunes: 
console.log(document.getElementById("menu")); // Llamamos el elemento HTML con el respectivo id
// Nota: Solo nos llama un elemento.
console.log(document.querySelector("figure")); // Nos busca cualquier elemento, clase y Id que le especificamos.
// Nota: Este nos llama varios elementos. 
console.log(document.querySelectorAll(".card")); // Nos busca cualquier elemento, clase y Id que le especificamos.
// Podemos usar solo algunos de los atributos de los arreglos como lo son: 
console.log(document.querySelectorAll(".card").length);
document.querySelectorAll(".card").forEach(element => {
    console.log(element);
});
console.log(document.querySelectorAll(".card")[2]); // Indexando elementos
console.log(document.querySelectorAll("#menu li")) // Filtrar Elementos por Id
*/

/* 
// Atributos y data-attributes: 

// data-attributes: Son atributos que se crean en el HTML y se le asigna un valor.
console.log(document.documentElement.lang); // Acedemos al lenguaje del documento HTMl
// Los elementos tienen un metodo que se llama getAttributes:
console.log(document.documentElement.getAttribute("lang"));

// Diferencias entre getAttribute y atributos:
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

// Setters:
document.documentElement.lang = "es-CO";
console.log(document.documentElement.getAttribute("lang"));

// setAttribute: Modificamos elementos.
document.documentElement.setAttribute("lang", "es-CO");
console.log(document.documentElement.getAttribute("lang"));


// Es mejor definir variables del DOM en variables:
const $linkDOM = document.querySelector(".link-dom");


$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener"); // No tenemos dependencia con el link externos que le pongamos.
$linkDOM.setAttribute("href", "https://google.com");

// hasAttribute: Metodos para saber si ese atributo existe en el elemento.
console.log($linkDOM.hasAttribute("rel")); // true
// removeAttribute: Eliminamos un atributo
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// Data-Atributes:
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); // Retorna un mapa con nuestro atributos personalizados.
console.log($linkDOM.dataset.description);

$linkDOM.setAttribute("data-descripcion", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.descripcion);
$linkDOM.dataset.descripcion = "Entra a Google";
console.log($linkDOM.dataset.descripcion);
$linkDOM.removeAttribute("data-descripcion");
console.log($linkDOM.hasAttribute("data-descripcion"));

*/


/* // Estilos y Variables CSS

const $linkDOM = document.querySelector(".link-dom");

// Nos muestra todas las propiedades CSS de nuestra etiqueta:
console.log($linkDOM.style);

// Llamando propiedades CSS en JavaScript:
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

// Obtener las propiedades CSS a traves del objeto Window
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// Modificar propiedades CSS 

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "30%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.margin = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.fontFamily = "sans-serif";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
// console.log(getComputedStyle($linkDOM));


// Variables CSS

const $html = document.documentElement,
    $body = document.body;


let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// Cambiar el valor de las variables: 
$html.style.setProperty("--dark-color", "#000000");
$body.style.setProperty("background-color", 'var(--dark-color)');
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
// $body.style.backgroundColor = varDarkColor;

const $titulo = $body.querySelector(".titulo"),
    _styleTile = $titulo.style;

const $footer = document.querySelector("footer");
console.log($footer);
const _stylePie = $footer.style;

_styleTile.display = "block";
_styleTile.backgroundColor = "var(--yellow-color)";
_styleTile.color = "var(--dark-color)";
_styleTile.textAlign = "center";
_styleTile.margin = "auto";

_stylePie.display = "block";
_stylePie.backgroundColor = "var(--yellow-color)";
_stylePie.color = "var(--dark-color)";
_stylePie.textAlign = "center";
_stylePie.margin = "auto";
*/


/* 
// Llamar clases CSS

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className); // Nos trae los nombres de la clase.
console.log($card.classList); // Nos trae los nombre de la clase en un arreglo del DOM.
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45")); // Nos regresara un booleano espeficicandonos 
// si el nombre de la clase esta en etiqueta html o no.
console.log($card.className);
$card.classList.remove("rotate-45"); // Quitamos el nombre de una clase
console.log($card.classList.contains("rotate-45"));
// toggle: Es como un interruptor podemos agregar y quitar el nombre de una clase
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
// replace: Reemplaza el nombre de una clase con otra
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
// Se puede agregar, quitar o hacer toggle mas de una clase a la vez con el metodo add y remove
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
 */


/* 
// Texto HTML

const $queEsDOM = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
    Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
    <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

// Cambiar texto HTML por otro en JS

$queEsDOM.innerText = text; // Es para internet exporer.
$queEsDOM.textContent = text; // Es para insertar texto.
$queEsDOM.innerHTML = text; // Es para inserta texto HTML
$queEsDOM.outerHTML = text; // Reemplaza el texto en donde esta el ID con el que le pasamos.
*/


/* // Recorriendo el DOM (DOM Traversing): Enfocado a los elementos.

// Seleccionamos la section con la clase cards:
const $cards = document.querySelector('.cards');

// Para seleccionar sus hijos (las figures) lo hacemos con la propiedad children:
console.log($cards.children);
console.log($cards.firstElementChild); // El primer hijo (figure.cards)
console.log($cards.children[3]);
console.log($cards.lastElementChild); // El ultimo hijo (figure.cards)
console.log($cards.previousElementSibling); // Selecciona al hermano anterior de la variable cards.
console.log($cards.nextElementSibling); // Selecciona al hermano siguiente de la variable cards.
console.log($cards.children[3].closest("section")); // Nos busca el ancestro mas cercano de la etiqueta.

// Para seleccionar el padre del section cards lo hacemos con la propiedad parentElement:
console.log($cards.parentElement);
 */


/* // Creando Elementos y Fragmentos:

// Para crear un elemento lo hacemos con el metodo createElement:
const $figure = document.createElement("figure"),
    $figure2 = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector('.cards');



// Para agregar hijos a una etiqueta padre lo  hacemos con appendChild: 
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

// Otra forma de hacerlo:
$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Verano", "Invierno", "Otoño", "Primavera"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el; // Añadimos un nodo de texto al li
    $ul.appendChild($li);
});


// Otra forma de renderizar
const continentes = ["Asia", "Africa", "America", "Europa", "Oceanía", "Antártida"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

// Si no colocamos el += entonces solo se añadira el ultimo elemento del Array:
continentes.forEach((el) => $ul2.innerHTML += `<li>${el}</li>`); 


// Fragmentos Dinamicos: Nos ayudan a que nuestras iteraciones tengan un mejor rendimiento.
// Y que no gasten tantos recursos. Recomendado.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ],
    $ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment(); // Metodo para crear un fragmento


meses.forEach((element) => {
    const $li = document.createElement("li");
    $li.textContent = element; // Anadimos un texto;
    $fragment.appendChild($li);
});

$ul3.appendChild($fragment);
document.body.appendChild($ul3); 
*/

/* 
// Templates HTML:

const $cards = document.querySelector(".cards"),
    // Nos trae los hijos de la etiqueta html (Lo que hay dentro de etiqueta);
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [{
            title: "Tecnología",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        },
    ];


cardContent.forEach((element) => {
    $template.querySelector("img").setAttribute("src", element.img);
    $template.querySelector("img").setAttribute("alt", element.title);
    $template.querySelector("figcaption").textContent = element.title;

    // Copiamos el Nodo template
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});
$cards.appendChild($fragment); */



/* 
// Modificando elementos (Old Style):

const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
// cloneNode para clonar todo etiqueta section con sus hijos.
// true: copia todo lo que tenga el elemento por dentro
// false: solo copia el elemente seleccionado en este caso la section .cards
$cloneCards= $cards.cloneNode(false); 

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Animals">
    <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// Reemplazar un nodo con replaceChild.
// $cards.replaceChild($newCard, $cards.children[2]);

// Insertar Antes de un nodo de referencia con insertBefore:
// $cards.insertBefore($newCard, $cards.firstElementChild);

// Eliminar nodos con removeChild: Estamos eliminando el ultimo nodo:
// $cards.removeChild($cards.lastElementChild)

document.body.appendChild($cloneCards); 
*/



// Modificando Elementos (Cool Style):

/* 
.insertAdjacent... Inserta de manera adyasente.
    .insertAdjacentElement(position,el)  Es como un appendChild o un insert(Before/After).
    .insertAdjacentHTML(position,html) Es como un innerHTML
    .insertAdjacentText(position,text) Es como un textContent

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

/* const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
    `;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("beforeend", $newCard);

$cards.prepend($newCard); // Añadir elemento como primer hijo;
$cards.before($newCard); // Añadir elemento como hermano anterior;
$cards.append($newCard); // Añadir elemento como ultimo hijo;
$cards.after($newCard); // Añadir elemento como hermano posterior; 
*/

/* 
// Manejadores de Eventos (Event Handler) 7w7


// Estas funciones al pasarlas como parametros se convierten en manejadores de eventos.
// Event Handler: 
function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
}

// Toda funcion que vaya a ser una event handler solo pasara como parametro el evento que acciona.
function saludar(nombre = null) {
    alert(`Hola, ${nombre}`);
    console.log(event);
}

const $elementoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-remover");

// Evento onclick: Se ejecutara al hacer click.
// Es importante poner los nombres de las funciones sin parentesis.
$elementoSemantico.onclick = holaMundo; // Este codigo solo puede tener un Evento.
$elementoSemantico.onclick = (e) => {
    alert("Hola Mundo Manejador de Eventos Semanticos");
    console.log(e); // El parametro e es el evento.
}

// Podemos poner muchos eventos:
// Recuerda, el nombre de la funcion sin parentesis ya que si los ponemos
// Se ejecutaria la funcion inmediatamente.
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola Mundo Manejador de Eventos Multiple");
    console.log(e);
    console.log(e.type); // Imprimimos El tipo de evento.
    console.log(e.target); // Imprimimos la etiqueta en donde se hace el evento.
    console.log(event);

});




// Pasar parametros a un Event Handler:
// Simplemente lo ponemos en una funcion anonima y listo XD:
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Elkin");
});

const removeDoubleClick = (e) => {
    alert(`Removiendo el evento ${e.type}`);
    console.log(e);
    // removeEventListener: Elimina un evento.
    $eventoRemover.removeEventListener("dblclick", removeDoubleClick);
    // Desabilitamos el boton con la propiedad disabled de HTML:
    $eventoRemover.disabled = true;
}

// Eliminar eventos:
// Solo funciona con funciones expresada y declaradass, no con anonimas.
$eventoRemover.addEventListener("dblclick", removeDoubleClick); */



// Fujo de Eventos: 

const $divEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divEventos);

function flujoEventos(e) {
    // className: El nombre de la clase.
    console.log(`Hola, te saluda ${this}, el click que originó ${e.target.className}`);
    // e.stopPropagation(); // Evitamos la propagacion del evento,
    // e.preventDefault(); // Bloqueamos la funcion en un evento.
}

// $divEventos.forEach((div) => {
//     div.addEventListener("click", flujoEventos);
// })

// $divEventos.forEach((div) => {
//     // Fase de burbuja-
//     div.addEventListener("click", flujoEventos); // Este evento se propagará de adentro hacia afuera.
//     // Fase de capura
//     // div.addEventListener("click", flujoEventos, true) // Este evento se propagara de afuera hacia adentro.
//     // div.addEventListener("click", flujoEventos, {
//     //     capture: true, // Fase de burbuja: False - Fase de captura: true.
//     //     once: true, // Solo se ejecuta una vez.
//     // });
// });

// const $form = document.querySelectorAll("form input");


// function stopDefAction(e) {
//     alert("Ey, eso no se toca.");
//     e.stopPropagation();
// }


// $form.forEach((input) => {
//     input.addEventListener("click", stopDefAction, {
//         once: true,
//     });
//     let _atributo = input.getAttribute("type");
//     if (_atributo === "checkbox") {
//         input.addEventListener("click", (e) => {
//             e.preventDefault();
//         });
//     }
// });


// Delegacion de eventos:

// Para evitar la propagacion y los eventos podemos poner.
// El evento en el document.

// Es la mejor manera de usar los eventos.

document.addEventListener("click", (e) => {
    // console.log("Click en:\n", e.target);

    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }

    if (e.target.matches(".eventos-flujo a")) {
        console.log("Click en:\n", e.target.getAttribute("href"));
        e.preventDefault(); // Quita la funcion del elemento.
    }
})