// Diferencia entre parametro y argumentos:
// Parametro: Es una variable que se le pasa a la funcion
// Argumento: Es una variable que se le pasa a la funcion y que se le puede asignar un valor

// Ejemplo:
// Los parametros son variables a y b 
function miFuncion(a,b){
    // Con esto se puede acceder a los argumentos que se le pasan a la funcion
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b;
}

// Los argumentos son los valores que se asignaron a esas variables
let resultado = miFuncion(2,3,7);
console.log(resultado);

