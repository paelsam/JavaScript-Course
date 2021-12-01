// Funciones Callback: Son funciones que se pasan como argumentos a otras funciones.
// Nota: Las funciones se llaman de manera secuencial, es decir, la primera funcion se ejecuta y luego la segunda, etc.

// Funcion callback que se pasara como parametro a la funcion suma:
let imp = (message) => { console.log(message) }

// Funcion sumar que tiene 3 argumentos:
// El argumento callback es la funcion que se ejecutara cuando se imprima la funcion:
function sumar(num1, num2, imp){
    let resul =  num1 + num2;
    // Pasamos el resultado de la suma a la funcion imprimir:
    imp(`Resultado: ${resul}`);
}

// Imprimimos la funcion sumar:
// sumar(2,3,imp); 


// Recursividad en JavaScript
let suma = function(n){
    if (n == 0){
        return 0;
    }
    else {
        return n + suma(n-1);
    }
}
console.log(suma(100));


// Llamadas asincronicas en JavaScript:
// Nota: Las llamadas asincronicas son funciones que se ejecutan en el futuro, no en el momento en el que se llaman.

function miFucionCallback(){
    console.log('Saludo despues de 3 segundos');
}
// setTimeout: Funcion que ejecuta una funcion en el futuro.
// El primer parametro es la funcion callback que se ejecutara, el segundo parametro es el tiempo que se demora en ejecutarse.
// setTimeout(miFucionCallback, 3000);
// Podemos poner una funcion completa como parametro
// setTimeout(function(){console.log('Hola mundo')}, 4000);
// O una Arrow Function
// setTimeout(()=>console.log('Arrow Function en 5 segundos'), 5000);

// setInterval: Funcion que ejecuta una funcion en el futuro varias veces cada cierto tiempo.
// El primer parametro es la funcion callback que se ejecutara, el segundo parametro es el tiempo que se demora en ejecutarse.
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}
// Cada segundo llamara a la funcion relog:
console.log(setInterval(reloj, 1000)); // 1 Seg