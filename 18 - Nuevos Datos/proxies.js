// Que son los Proxies: permite crear un intermediario entre un objeto el cual
// puede interceptar y redefinir las operaciones que se realizan sobre el objeto.


// Objeto original: 
const Persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
};

// Manejando el Proxy: Interceptar las operaciones que se realizan sobre el objeto.
const handler = {};
const handler1 = {
    // Target: es el objeto que se esta manejando.
    // En este caso es el objeto Persona.
    // Prop: es el nombre de la propiedad que se esta manejando.
    get(target, prop) {
        if (prop === 'nombre') return 'Elkin';
        if (prop === 'apellido') return 'Panameño';
    }
}

// Proxies:
const proxy = new Proxy(Persona, handler);
const proxy2 = new Proxy(Persona, handler1);

// Proxie original sin modificaciones: 
console.log(proxy);

// Proxie con modificaciones en la propiedad nombre:
console.log(proxy2.nombre, proxy2.apellido);