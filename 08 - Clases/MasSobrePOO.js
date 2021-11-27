class Persona{
    // Creando atributos estaticos
    static contadorObjetoPersona = 0; // Atributo de clase
    email = 'Atributo no estatico'; // Atributo de nuestros objetos
    constructor(nombre, apellido){
        // Aumento +1 en la variale estatica:
        Persona.contadorObjetoPersona++;
        this._nombre = nombre;
        this._apellido = apellido;
        this._id = Persona.contadorObjetoPersona;
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
        return this._id + ' ' + this._nombre + ' ' + this.apellido;
    }
    // Sobreescibiendo un metodo de la clase Object
    toString(){
        // Aplicando Polimorfismo
        return this.nombreCompleto();
    }
    // Metodos Estaticos:  Son metodos que estan afliados a la clase:
    // No se puede llamar con los objetos, solo con la clase misma
    static saludar(){
        return 'Saludando desde un metodo estatico';
    }
    static saludar2(persona){
        return 'Hola ' + persona.nombre;
    }
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona{
    static contadorObjetoEmpleado = 0;
    constructor(nombre, apellido, departamento){
        Empleado.contadorObjetoEmpleado++;
        super(nombre, apellido); // Llamamos al contructor de la clase Padre (Persona)
        this._departamento = departamento;
        this._id = Empleado.contadorObjetoEmpleado;
    }
    // Getters y Setters
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    get id(){
        return this._id;
    }
    set id(id){
        this._id = id;
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
console.log(persona1.toString());
console.log(persona1.email);
// persona1.saludar(); // No es posible hacer esto
console.log(Persona.saludar());
// Si podemos pasar como argumentos a objetos en un metodo estatico
console.log(Persona.saludar2(persona1));

let empleado1 = new Empleado('Elkin', 'Angulo', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1._apellido);

// Manejando el Polimorfismo:
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());
console.log(empleado1.email);

console.log(Empleado.email); // undefined
console.log(Persona.email); // No llamamos al atributo email.
// Creamos una nueva variable estatica llamada email.