// Que es Even Loop: Es una secuencia de eventos que se ejecutan en orden.
// Que es Asincronia: Es la capacidad de un programa de ejecutarse sin esperar a que termine una tarea.
// Que es Sincronia: Es la capacidad de un programa de ejecutarse esperando a que termine una tarea.
// Que es Callback: Es una funcion que se ejecuta cuando otra funcion termina de ejecutarse.
// Que es Promesa: Es una funcion que se ejecuta cuando otra funcion termina de ejecutarse.


/* Codigo Sincrono Bloqueante */
// Codigo que se ejecuta en orden. 

(()=>{
    console.log("Inicio");
    
    function dos() {
        console.log("Dos");
    }

    function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();

console.log("\n*************************************\n");

/* Codigo Asincrono No Bloqueante */
// Codigo que no se ejecuta en orden.

(()=>{
    console.log("Inicio");

    function dos() {
        setTimeout(()=>{
            console.log("Dos");
        }, 1000);
    }

    function uno() {
        setTimeout(()=>{
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})()