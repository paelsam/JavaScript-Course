// Modo estricto: todos los errores son fatales
'use strict';

// No podemos declara variables sin usar la palabra reservada var, let o const
x = 10;
console.log(x);

// Igualmente en las funciones:
miFuncion();

function miFuncion() {
    y = 10;
    console.log(y);
}

// Debemos poner un var, let o const antes de la variable
var x = 10;
let y = 10;
const z = 10;
console.log(x);