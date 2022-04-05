console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, who) {
    console.log(`${saludo} ${who} desde el ${this.lugar}`);
}

saludar("Hola", "Juan");

const obj = {
    lugar: "Contexto Objeto",
}

// Call: Ejecuta la función con el contexto del objeto
saludar.call(obj, "Hola", "Elkin");

// Si colocamos null como primer parámetro, el contexto será el contexto global
saludar.call(null, "Hola", "Nando");

// Con this es lo mismo: 
saludar.call(this, "Hola", "Fernando");

// Apply: Es lo mismo que call, pero recibe un array con los parametros.
saludar.apply(obj, ["Hola", "James"]);
saludar.apply(null, ["Hola", "Elkin"]);
saludar.apply(this, ["Hola", "Nando"]);


// Bind: Es lo mismo que call, pero retorna una función que se ejecuta con el contexto del objeto.

this.nombre = "Window"

const persona = {
    nombre: "Elkin",
    saludar: function() {
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar(); // Hola Elkin


const otraPersona = {
    saludar: persona.saludar.bind(persona),
    saludar2: persona.saludar.bind(this),
}

// Con bind, el contexto del objeto se queda igual, pero la función se ejecuta 
// con el contexto del objeto que se pasa como parámetro.
otraPersona.saludar(); // Hola undefined
otraPersona.saludar2(); // Hola Window