let persona = {
    nombre: 'Elkin',
    apellido: 'Angulo',
    edad: 16,
    nombreCompleto: function () {
        // This es el objeto que se esta llamando a si mismo.
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto()); 