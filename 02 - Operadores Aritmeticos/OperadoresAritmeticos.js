let a = 3, b = 2;
let z = a + b; 
console.log('Resultado de la suma: ' + z);

z = a - b;
console.log('Resultado de la resta: ' + z);

z = a * b;
console.log('Resultado de la multiplicacion: ' + z);

z = a / b;
console.log('Resultado de la division: ' + z);

z = a % b;
console.log('Resultado del modulo: ' + z);

z = a ** b;
console.log('Resultado del exponente: ' + z);


// Incremento
// Pre-incremento: El operador ++ antes de la variable
z = ++a; // La variable a pasa a 4 y se le asigna a z
console.log('Resultado de incremento: ' + z);
console.log('Resultado de la variable a: ' + a);

// Post-incremento: El operador ++ despues de la variable
z = b++; // La variable b sigue con 2 y se le asigna a z. 
// Si la llamamos nuevamente, se volvera a incrementar solo a b
console.log('Resultado de incremento: ' + z);
console.log('Resultado de la variable b: ' + b);

// Decremento
// Pre-decremento: El operador -- antes de la variable
z = a; // a = 4
z = --a; // La variable a pasa a 3 y se le asigna a z
console.log('Resultado de decremento: ' + z);
console.log('Resultado de la variable a: ' + a);

//Post-decremento: El operador -- despues de la variable
z = b; // b = 3
z = b--; // La variable b sigue con 2 y se le asigna a z.
console.log('Resultado de decremento: ' + z);
console.log('Resultado de la variable b: ' + b);

