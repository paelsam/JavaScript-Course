// La clausula throw nos da la posibilidad de crear nuestras propias Excepciones
"use strict";
let resultado = -1;

try {
    // Condicional para comprobar si la variable resultado es un numero:
    if (isNaN(resultado)) throw "No es un número";
    else if (resultado == "") throw "Es una cadena vacia";
    else if (resultado >= 0) throw "Valor positivo";
    else if (resultado < 0) throw "Valor negativo";
} catch (error) {
    console.log(error);
    // Podemos dividir los errores por su nombre y su mensaje:
    // console.log(error.name);
    // console.log(error.message);
} finally {
    console.log("Manejo de errores terminado");
}
