// Callback: Funcion que se ejecuta despues de una accion

const callCallbackFunction = (value, callback) => {
    setTimeout(() => {
        console.log("Llamando Funcion Callback");
        callback(value);
    }, 0 | Math.random() * 1000);
}

function callback(value) {
    console.log("Hola", value);
}

callCallbackFunction('Elkin',callback);