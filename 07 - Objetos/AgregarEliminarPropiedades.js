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

// Podemos agregar nuevas propiedades de la siguiente manera: 
persona.telefono = '3136961050';
// Hay que tener en cuenta a la hora de escribir la key de una propiedad:
persona.te1efono = '3154321541';

// Podemos eliminar una propiedad del objeto de esta forma:
delete persona.te1efono;

console.log(persona);
