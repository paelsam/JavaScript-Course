class Persona {
  static contadorPersona = 0;

  static get MAX_OBJ() {
    return 5;
  }

  constructor(nombre, apellido) {
    if (Persona.contadorPersona < Persona.MAX_OBJ) {
      this._idPersona = ++Persona.contadorPersona;
    }
    else {
        console.log('Numero maximo de objetos superado');
    }
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    return this._idPersona + " " + this._nombre + " " + this._apellido;
  }
  toString() {
    return this.nombreCompleto();
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }
  // Getters y Setters
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
}

console.log(Persona.MAX_OBJ);

let persona1 = new Persona('Elkin', 'Panameño');
console.log(persona1.toString());

let empleado1 = new Empleado('Samir', 'Angulo', 'Sistemas');
console.log(empleado1.toString());

let persona2 = new Persona('Ma', 'Val');
console.log(persona2.toString());

let persona3 = new Persona('James', 'Angulo');
let persona4 = new Persona('Alvaro', 'Angulo');
let persona5 = new Persona('Elkin', 'Angulo');
// Como se supero el numero maximo de objetos, ya no se crea un ID para el Objeto.
console.log(persona5.toString());