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

let empleado1 = new Empleado('Elkin Panameño', 5000);
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente('Elkin Panameño', 10000, 'Sistemas');
console.log(gerente1.obtenerDetalles());
