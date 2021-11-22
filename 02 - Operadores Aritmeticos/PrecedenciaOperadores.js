let a = 3, b = 2, c = 1, d = 4;

// JavaScript respeta la jerarquia de operadores
let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

// Con el parentesis podemos obligar a hacer operaciones de primero
z = (c + a) * b / c;
console.log(z);