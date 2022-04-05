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