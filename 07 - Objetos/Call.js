// Uso de Call: Permite que una función/método que pertenece a un objeto, ser asignada y llamada para un objeto diferente.
let persona1 = {
    nombre: 'Elkin',
    apellido: 'Panameño',
    // Podemos pasar argumentos por las funciones que vamos a llamar en otros objetos.
    nombreCompleto: function (titulo, tel) {
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Mar',
    apellido: 'Val',
}

// Utilizaremos el metodo que esta en persona1
// Con los datos de persona2 
console.log(persona1.nombreCompleto('Dios', 'La oracion'));
console.log(persona1.nombreCompleto.call(persona2));

// Primero pasamos el objeto que usara la funcion
// Luego el valor de los argumentos que pusimos en la funcion (Si este tiene argumentos)
console.log(persona1.nombreCompleto.call(persona2, 'Profesional', '31298361'));