class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    // Getter y Setters
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
    // Este metodo tambien se heredara a la clase Empleado
    nombreCompleto(){
        return this._nombre + ' ' + this.apellido;
    }
    // Sobreescibiendo un metodo de la clase Object
    toString(){
        // Aplicando Polimorfismo
        return this.nombreCompleto();
    }
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // Llamamos al contructor de la clase Padre (Persona)
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    // Sobreescritura del metodo nombreCompleto
    nombreCompleto(){
        // Super ejecuta el metodo de la clase Padre
        // Mandamos a llamar metodos de la clase padre 
        // Y añadimos nueva informacion al metodo nombreCompleto
        return super.nombreCompleto() + ', ' + this._departamento
    }
}

let persona1 = new Persona('Samir', 'Panameño');
console.log(persona1);
console.log(persona1.nombreCompleto());
console.log(persona1.toString());

let empleado1 = new Empleado('Elkin', 'Angulo', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1._apellido);

// Manejando el Polimorfismo:
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());