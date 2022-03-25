let x = 5, y = 10, z = ++x + y--;
// Ver el archivo procedencia de operadores.
console.log(x);
console.log(y);
console.log(z);

// Jerarquia de operadores.
let result = 4 + 5 * 6 / 3;
console.log(result);

result = (4 + 5) * 6 / 3;
console.log(result); 
