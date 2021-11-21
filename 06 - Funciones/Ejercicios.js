let resultado = sumarTodo(5,5,5,5,5);
console.log(resultado);

// Utilizando la propiedad arguments
// Funcion que suma todos sus argumentos 
function sumarTodo(){
    let suma = 0;
    // For que recorre la lista de arguments y se suman con la variable suma 
    for(let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; // suma = suma + arguments[i];
    }
    return suma;
}