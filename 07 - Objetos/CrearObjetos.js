// Formas de crear objetos:

// Con la palabra new 
let miObjeto = new Object();

// Esta es mas recomendable:
let miObjeto2 = {};

// Crear un string con la palabra new:
let miString = new String('Elkin');
// Este es lo recomendable:
let miString2 = 'Elkin';
console.log(miString, miString2);

// Lo mismo funciona con numeros 
let miNumero = new Number(1);
// Recomendado:
let miNumero2 = 1;
console.log(miNumero, miNumero2);


// Booleanos:
let miBoolean = new Boolean(false);
// Recomendado
miBoolean = false;
console.log(miBoolean);

// Arreglos:
let miArreglo = new Array();
// Recomendado:
let miArreglo1 = [];
console.log(miArreglo1);

// Funciones:
let miFuncion = new Function();
// Recomendado:
let miFuncion1 = function(){};
console.log(miFuncion1);
