class Persona {
  static contadorPersona = 0;
  constructor(nombre, apellido, edad) {
    this._idPersona = ++Persona.contadorPersona;
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
  }
  // Getters y Setters
  get idPersona() {
    return this._idPersona;
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
  get edad() {
    return this._edad;
  }
  set edad(edad) {
    this._edad = edad;
  }
  toString() {
    // Template to String: Para llamar las tildes invertidas lo hacemos con Alt + 96
    return `${this._idPersona} | ${this._nombre} ${this._apellido}, ${this._edad}`;
  }
}

class Empleado extends Persona {
  static contadorEmpleado = 0;
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._idEmpleado = ++Empleado.contadorEmpleado;
    this._sueldo = sueldo;
  }
  get idEmpleado() {
    return this._idEmpleado;
  }
  get sueldo() {
    return this._sueldo;
  }
  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }
  toString() {
    return `${this._idEmpleado} | ${super.toString()} | ${this._sueldo}`;
  }
}

class Cliente extends Persona {
  static contadorCliente = 0;
  constructor(nombre, apellido, edad) {
    super(nombre, apellido, edad);
    this._idCliente = ++Cliente.contadorCliente;
    this._fechaRegistro = new Date();
  }
  get idCliente() {
    return this._idCliente;
  }
  toString() {
    return `${super.toString()} | ${this._fechaRegistro}`;
  }
}

let persona1 = new Persona("Elkin", "Angulo", 17);
console.log(persona1.toString());

let empleado1 = new Empleado("Elkin", "Panamian", 17, 5000);
console.log(empleado1.toString());

let empleado = new Empleado("Samir", "Angulo", 17, 5000);
console.log(empleado.toString());

let cliente1 = new Cliente("Elkin", "Panameño", 16);
console.log(cliente1.toString());

let cliente2 = new Cliente("Elkin", "Angulo", 16);
console.log(cliente2.toString());
