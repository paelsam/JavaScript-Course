// Variables en JavaScript: Existen 3 tipos de variables en JavaScript: var, let y const.

// Esto no es una buena practica de programación, ya que se puede cambiar el valor de la variable.
// var: Es una variable global, que se puede usar en cualquier parte del código (No recomendada).
nombre1 = "Juan";
console.log(nombre1);

// Esto es recomendable, siempre poner let a las variables. 
// let: Es una variable local, que se puede usar en una función.
let nombre;
nombre = 'Samir';
console.log(nombre);

// const: Es una variable que no puede cambiar su valor. 
const apellido = 'Angulo';
console.log(apellido);

// De ahoraen adelante usar let para declarar variables.