// Con las clases no funciona el metodo Hoisting
// Eso significa que no podemos crear objetos sin crear antes la clase
// Pero si funciona con los metodos:

// let persona2 = new Persona('Samir', 'Angulo', 16); // No es posible

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