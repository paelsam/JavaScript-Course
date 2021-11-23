// Objetos: Todo en JavaScript es un objeto.
// Un objeto es una colección de propiedades, y una propiedad 
// es una asociación entre un nombre (o clave) y un valor.

// Prueba de que todo es un objeto:
let x = 10;
// Podemos acceder a las propiedades de un objeto. 
// Por ejemplo, el número 10 tiene una propiedad length.
console.log(x.toFixed(2)); 


let persona = {
    nombre: 'Elkin',
    apellido: 'Angulo Panameño',
    email: 'elkinsamir643@gmail.com',
    edad: 15,
    // Este es un metodo.
    nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido;
    }
}

// Podemos acceder a sus atributos
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);

console.log(persona.nombreCompleto());


// Creando un objeto con la palabra reservada new (No es comun)
let persona2 = new Object();
// Añadiendole atributos
persona2.nombre = 'Samir';
persona2.direccion = 'Marte';
persona2.tel = 3103103103;
// Llamando los atributos del objeto
console.log(persona2);
console.log(persona2.direccion);