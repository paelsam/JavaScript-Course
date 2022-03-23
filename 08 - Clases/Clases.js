// Las clases son plantillas por las cuales crearemos objetos.
// Las clases tienen instancias y metodos.


// Ejemplo de una clase:
class Persona {
    // Creamos el metodo constructor:
    constructor(nombre, apellido, edad){
        // Ponemos guion bajo en los nombres de la variable
        // Para que no haya problemas en los get y set
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre
    }

}

let persona1 = new Persona('Elkin', 'Angulo', 16);
// Metodo set
persona1.nombre = 'Elkin Samir';
// Metodo get
console.log(persona1.nombre);
