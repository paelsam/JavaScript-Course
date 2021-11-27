class Persona {
    static contadorPersona = 0;
    constructor(nombre, apellido){
        this._idPersona = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._idPersona + ' '  + this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    // Getters y Setters
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento
    }
}

let persona1 = new Persona('Elkin', 'Panameño');
console.log(persona1.toString());

let empleado1 = new Empleado('Samir', 'Angulo', 'Sistemas');
console.log(empleado1.toString());

let persona2 = new Persona('Ma', 'Val');
console.log(persona2.toString());