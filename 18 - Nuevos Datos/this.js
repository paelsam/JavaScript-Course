// Que es this: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/this

// Este this hace referencia al objeto global (Window object):
console.log(this);
console.log(window);
console.log(this === window); // true

this.context = "Contexto Global";
console.log(this.context);

function print() {
    console.log(this.context);
}

print();

// Este this hace referencia al objeto:
const obj = {
    context: "Contexto Objeto",
    print: function() {
        console.log(this.context);
    }
}

obj.print();

const obj2 = {
    context: "Contexto Objeto 2",
    // Function Print del contexto global:
    print
}

obj2.print();

const obj3 = {
    context: "Contexto Objeto 3",
    // Las funciones flecha hacen referencia al la funcion 
    // Original donde se creo la funcion.
    // En este caso, la funcion flecha viene del scope global.
    print: () => {
        console.log(this.context); // Contexto Global
    }
}

obj3.print();

function Persona(nombre) {
    this.nombre = nombre;

    // return function () {
    //     // Retornara undefined porque esta funcion
    //     // Anonima esta en el scope global.
    //     console.log(this.nombre); 
    // }

    // En cambio, si lo hacemos con una funcion flecha:
    return () => console.log(this.nombre); 
}

let samir = new Persona("Samir");
samir();