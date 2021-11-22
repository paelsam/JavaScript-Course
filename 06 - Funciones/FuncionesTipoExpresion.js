// Recuerda que las funciones son un TIPO DE VALOR
// Por eso pueden ser definidas en una variable :3
// El resultado de esta funcion se asigna a la variable x
let x = function (a,b) {return a + b};

let resultado = x(1,2);
console.log(resultado);

// Ejercicios:
let y = function (x, b) {return x * b};
resultado = y(x(1,2),2);
console.log(resultado);

let condition = function (a,b) {
  return a != b ? console.log('No son iguales') : console.log('Son iguales. Puedes seguir ;D')
};

condition(2,2);