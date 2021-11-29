 // Podemos declarar funciones de diferentes formas: 

// Funciones normales: 
/* miFuncion();
function miFuncion(){
    console.log('Function');
} */

// Funciones Anonimas:
/* let miFuncion = function(){console.log('Mi Funcion')};
miFuncion(); */

// Funciones Flecha:
// const miFuncionFlecha = () => {
//     console.log('Mi Funcion Flecha');
// }

// Podemos simplificar aun mas las funciones flecha: 
// Esto lo podemos hacer si el cuerpo de nuestra funcion es de una sola linea.
// const miFuncionFlecha = () => console.log('Mi funcion Flecha');

// La funcion flecha no tiene el mecanismo de Hoisting.
// miFuncionFlecha();

const saludar = () => 'Hola';
console.log(saludar());


// Podemos ingresar objetos:
// Pero el cuerpo de la funcion debe ir en parentesis
const objecto = () => ({nombre: 'Elkin', apellido: 'Angulo'});
console.log(objecto());

// Funcion Flecha con parametros:
// Con uno solo podemos quitar los parentesis
const myArrowFunction = message => {return message};
console.log(myArrowFunction('Que rico, Sandwich con el pan del Osito :p'));

// Con varios parametros:
const myArrowFunction2 = (a, b) => `Resultado ${a + b}`;
console.log(myArrowFunction2(2,3));
