// Al menos se ejecutara una vez la operacion
// En cambio, el ciclo while si la condicion es falsa, esta terminara.

let contador  = 0;
do {
    console.log(contador);
    // Post-incremento: Se incrementará el valor cuando se vuelva a llamar.
    contador++;
} while (contador < 3);
console.log('Fin Do-While :3')