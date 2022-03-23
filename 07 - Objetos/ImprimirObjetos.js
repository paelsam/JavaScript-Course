let persona = {
    nombre: 'Elkin',
    apellido: 'Angulo Panameño',
    email: 'elkinsamir643@gmail.com',
    edad: 16,
    // Este es un metodo.
    nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido;
    }
}

// Formas de imprimir un objeto:

// Concatenacion:
console.log(persona.nombre, persona.apellido);

// For in:
for (propiedad in persona) {
    console.log(persona[propiedad]);
}

// Convertir el objeto en un Array
let personaArray = Object.values(persona);
console.log(personaArray);

// Con la propiedad JSON.stringfy (Covierte todo el object en un string)
let personaString = JSON.stringify(persona);
console.log(personaString);