'use strict';
// Sobreescritura: Sobreescribir una función de la clase Empleado en la clase hija Gerente.
class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    // Metodo que vamos a sobreescribir:
    obtenerDetalles() {
        return `${this.nombre} tiene un sueldo de ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    // Sobreescribimos el metodo con el nuevo atributo de la clase hija:
    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()}\nDepartamento: ${this.departamento}`;
    }
}
// Podemos poner un objeto como parametro para acceder al metodo
// obtenerDetalles.
function imprimir(object) {
    // Aplicamos el concepto de Polimorfismo
    // Podemos llamar metodos de diferentes clases en una sola funcion.
    console.log(object.obtenerDetalles());
    // La palabra instanceof nos ayuda a identificar de que tipo es nuestro parametro.
    // Preguntamos si nuestro parametro es un objeto de tipo Empleado
    if (object instanceof Gerente) {
        // Como Gerente es hijo de Empleado, entonces tambien se imprimira 
        // Para objetos de tipo Empleado
        console.log('Objeto de clase Gerente');
        console.log(object.departamento);
    } else if (object instanceof Empleado) {
        console.log('Objeto de clase Empleado');
    } else if (object instanceof Object) {
        console.log('Objeto de clase Object');
    }
}

let empleado1 = new Empleado('Elkin Panameño', 5000);
let gerente1 = new Gerente('Elkin Panameño', 10000, 'Sistemas');
imprimir(empleado1);
imprimir(gerente1);