// Promesas: son objetos que representan una tarea asincrona.
// Resolve: es una funcion que se ejecuta cuando la promesa se resuelve.
// Reject: es una funcion que se ejecuta cuando la promesa se rechaza.

const cuadradoPromise = (value) => {
    if (!(typeof value === 'number')) 
        return Promise.reject(new Error('El valor debe ser un numero'));
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value ** 2
            })
        }, 0 | Math.random() * 1000);
    });
}

// Then y Catch: son funciones que se ejecutan cuando la promesa se resuelve o se rechaza.
cuadradoPromise(5)
    .then((obj) => {
        console.log("Inicio Promise");
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise("2");
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        console.log("Fin Promise");
    })
    .catch(err => {
        console.error(err);
    })