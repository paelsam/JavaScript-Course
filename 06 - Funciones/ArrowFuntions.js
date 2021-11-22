// Funciones flecha: Una expresión de función flecha es una alternativa 
// compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

// Es recomendable hacer funciones flecha con const: 
const sumarFuncionTipoFlecha = (a,b) => a + b;
console.log(sumarFuncionTipoFlecha(2,3));

let resultado = sumarFuncionTipoFlecha(5,4);
console.log(resultado);

// Es mucho mas compacta que una funcion normal:
const multiplicarFuncionTipoFlecha = (a,b) => a * b;
resultado = multiplicarFuncionTipoFlecha(2,3);
console.log(resultado);

