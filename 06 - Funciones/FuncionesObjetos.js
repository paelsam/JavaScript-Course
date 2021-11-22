// Las funciones no son solo tipos de dato, tambien son objeots
// Podemos llamar porpiedades en ellas: 
function miFuncion(a,b){
    // Nos mostrara cuantos argumentos tenemos en nuestra funcion
    console.log(arguments.length);
    return a + b;
}
let resultado = miFuncion(2,2);
console.log(resultado);

// Pasar una funcion a string:
let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);