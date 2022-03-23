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

// Las formas de acceder a las propiedades de un objeto:
console.log(persona.nombre);
// Podemos acceder a las keys de un objeto como si fuera un Array:
console.log(persona['apellido']);


// Iteracion for in
for (propiedades in persona){
    // Aqui solo accedemos a las keys:
    console.log(propiedades);
    // Podemos acceder a los values con lo que aprendimos anteriormente:
    console.log(persona[propiedades]);
}
