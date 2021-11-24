// Constructor: Nos permite crear objetos con propiedades y métodos reutilizables.
// Function constructor: Es una función que se ejecuta cuando se crea un objeto.
function Persona(nombre, apellido, email){
    // Creamos las propiedades del objeto   
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

// Para crear objetos, debemos usar la palabra reservada new ´
// + El nombre del contructor 
let padre = new Persona('Elkin', 'Panameño', 'elkinsamir@gmail.com');
let madre = new Persona('Leidi', 'Panameño', 'panamenosuleidi@gmail.com');


padre.nombre = 'Samir';
console.log(padre);
console.log(madre);