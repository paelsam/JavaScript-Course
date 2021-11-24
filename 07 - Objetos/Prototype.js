/* 
Son un mecanismo mediante el cual los objetos en 
JavaScript heredan características entre sí. 
*/
function Persona(nombre, apellido, email){
    // Creamos las propiedades del objeto   
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    // Tambien podemos agregar metodos al constructor:
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
// Ahora, heredaremos la propiedad telefono entre los objetos:
// Para añadir la propiedad telefono a los objetos, lo hacemos de la siguiente forma:
Persona.prototype.tel = 3154321541;

let padre = new Persona('Elkin', 'Panameño', 'elkinsamir@gmail.com');
// Podemos modificarlo si queremos:
padre.tel = 3136961050;
console.log(padre.tel);

let madre = new Persona('Leidi', 'Panameño', 'panamenosuleidi@gmail.com');
console.log(madre.tel);