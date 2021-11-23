// Get y Set: Son buenas practicas para acceder y modificar los atributos de un objeto.
let persona = {
    nombre: 'Elkin',
    apellido: 'Angulo Panameño',
    email: 'elkinsamir643@gmail.com',
    edad: 15,
    idioma: 'es',
    // Metodo toUpperCase(): Convierte los strings en mayusculas.
    // Creamos un get que obtendra la variable idioma:
    get lang(){
        return this.idioma.toUpperCase();
    },
    // Metodo set lang que modifica el atributo idioma:
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    // Definimos un metodo para obtener el nombre completo con la palabra reservada get.
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

// Get: Obtiene el valor de un atributo.
console.log(persona.nombreCompleto);

// Set: Modifica el valor de un atributo.
console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma); // Verificamos los cambios


