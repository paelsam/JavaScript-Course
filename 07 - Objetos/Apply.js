let persona1 = {
    nombre: 'Elkin',
    apellido: 'Panameño',
    // Podemos pasar argumentos por las funciones que vamos a llamar en otros objetos.
    nombreCompleto: function (titulo, tel) {
        // return this.nombre + ' ' + this.apellido;
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Mar',
    apellido: 'Val',
}

// Uso de apply: La diferencia con call es que apply solo acepta un array con los argumentos
// De la funcion.
console.log(persona1.nombreCompleto('Dios', 'La oracion'));
let arreglo = ['Profesional', '98163926814'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

