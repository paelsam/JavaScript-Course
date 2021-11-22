// Tipos de datos 

// String:
var nombre = 'Elkin';
console.log(nombre);

// En JavaScript las variables son dinamicas y no se necesita declarar el tipo de dato
nombre = 10.5;
// typeof nombre; // devuelve el tipo de dato de la variable
console.log(typeof nombre);

// Numeros
var numero = 21;
console.log(numero);

// Objetos
var objeto = {
    nombre: 'Elkin',
    apellido: 'Gonzalez',
    edad: 21
};
console.log(typeof objeto);

// Booleanos
let boolean = true;
console.log(typeof boolean);
boolean = false;
console.log(typeof boolean);


// Tipos de dato funtion
function miFuncion(){
    return 'Hola';
}
console.log(typeof miFuncion);


// Tipo de dato Symbol
let simbolo = Symbol('My Symbol');
console.log(typeof simbolo);

// Tipo clase es una function
class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
console.log(typeof Persona);

// Tipo de dato undefined
var x;
console.log(typeof x);
x = undefined;
console.log(x);

//Null: Ausencia de valor. Es un object
var y = null;
console.log(typeof y);

// Arreglos son de tipo object
var arreglo = [1,2,3,4,5];
var autos = ['Ford', 'Chevrolet', 'Toyota'];
console.log(typeof arreglo);
console.log(autos);

// Cadenas vacias
var z = '';
console.log(z);
console.log(typeof z);
