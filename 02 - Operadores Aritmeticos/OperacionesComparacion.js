let a = 3, b = 2, c = '3';

let z = (a == b); // Se recisa el valor sin importar el tipo
console.log(z);

z = (a === c); // Se revisa los valores pero tambien los tipos
console.log(z); 

z = a != c; // Valores distintos sin importar el tipo
console.log(z);

z = a !== c; // Valores ditintos pero tambien los tipos
console.log(z);


// Operadores relaciones
z = a < b;
console.log(z);

z = a <= b;
console.log(z);

// Y estan los mayores que, pero me da flojera escribirlos ahora XD