// Prototipos: Es asi como funcionan las clases en JavaScript Internamente.

/* function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
  this.sonido = function () {
    console.log(`Hola! Soy ${this.nombre}`);
  };
} 

let perro = new Animal("Snoopy", "Macho");
console.log(perro.nombre);
perro.sonido();

*/

// Y asi funcionan con azucar sintactico:
class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  sonido() {
    return `Hola! Soy ${this.nombre}`;
  }
}

// Incluida la Herencia: 
class Perro extends Animal {
    constructor(nombre,genero,tamanio) {
        super(nombre, genero);
        this.tamanio = tamanio;
    }
    // Y la sobreescritura: 
    sonido() {
        console.log(super.sonido() + ` y soy un Perro ${this.tamanio}`);
    }
}

const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
console.log(scooby);
scooby.sonido();
