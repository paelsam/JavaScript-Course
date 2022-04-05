// Que es JSON: JSON es una forma de representar datos en formato de texto.


// Estos son los tipos de datos que acepta JSON:
const json = {
    cadena: "Jon",
    numero: 35,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
        twitter: "@jonmircha",
        email: "jonmircha@gmail.com"
    },
    nulo: null
}

// Propiedades: 

// Parse: convierte un json en un objeto o un arreglo.

console.log(JSON.parse("{}"));
console.log(JSON.parse("[]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("null"));
console.log(JSON.parse("19"));
// console.log(JSON.parse(undefined)); // Error
console.log(JSON.parse('{"cadena":"Jon","numero":35,"booleano":true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@jonmircha","email":"jonmircha@gmail.com"},"nulo":null}'));

// Stringify: convierte un objeto o un arreglo en un json.

console.log(JSON.stringify({}));
console.log(JSON.stringify([]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify(19));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({
    x: 2,
    y: 3
}));
console.log(JSON.stringify(json));