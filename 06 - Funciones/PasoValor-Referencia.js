// El paso por valor: cuando se le pasa una variable a una función, se le asigna una copia de la variable, no la referencia.
// El paso por referencia: cuando se le pasa una variable a una función, se le asigna la referencia de la variable.

// En el paso por valor asignamos valores primitivos a la variable o como argumento a las funciones.
// Valores primitivos: números, cadenas, booleanos, null, undefined, etc.
let x = 10;


function cambiarValor(a){
    a = 20;
    // Return se le asigna automaticamente si no lo escribimos.
}

// Solo se paso una copia del valor de la variable x
cambiarValor(x); // 10
console.log(x);

// Paso por Referencia: Significa que además de pasar el valor a la función, se pasa la referencia en memoria a la variable original. 
// De este modo, si el valor cambia dentro de la función, también cambiará en la variable original.
const persona = {
    nombre: 'Elkin',
    apellido: 'Angulo Panameño',
    edad: 15
}

function cambiarValorObjeto(objeto){
    // Al objeto que se le pasara como argumento
    // Entrará su propiedad nombre y la modificara
    objeto.nombre = 'Guest';
    objeto.apellido = undefined;
    objeto.edad = undefined;
}

// Paso por referencia: Se modifico en la funcion y tambien se modifica el objeto.
// Ambos apuntan a la referencia en memoria.
cambiarValorObjeto(persona);
console.log(persona);