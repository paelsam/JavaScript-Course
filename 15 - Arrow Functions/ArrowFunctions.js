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
const miFuncionFlecha = () => {
    console.log('Mi Funcion Flecha');
}

// La funcion flecha no tiene el mecanismo de Hoisting.
miFuncionFlecha();