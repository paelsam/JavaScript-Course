// setTimeout: Ejecuta una función después de un tiempo determinado.
console.log("Inicio");
const timeout = setTimeout(() => {
    console.log("Ejecutando un setTimeout esto se ejecuta una sola vez.");
}, 3000);


// setInterval: Ejecuta una función cada cierto tiempo.
const interval = setInterval(() => {
    console.log(
        "Ejecutando setInterval, esto se ejecuta cada intervalo de tiempo"
    );
}, 1000);


// clearTimeout: Limpia el tiempo de una función setTimeout. 
// Solo funciona con los metodos declarados en variables.
clearTimeout(timeout);

// clearInterval: Limpia el tiempo de una función setInterval.
// Solo funciona con los metodos declarados en variables.
clearInterval(interval);
console.log("Despues de la limpieza");