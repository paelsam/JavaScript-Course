// Tiene predifinido los pasos de inicializacion de condicion e incremento:

for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log('Fin Ciclo For 7w7');

// Break: Para la ejecucion:

for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 == 0){
        console.log(contador);
        // Termina el ciclo
        break;
    }
}
console.log('Fin del ciclo for');

// Continue: Significa omitimos el valor actual y seguimos con la siguiente iteracion:

for (let contador = 0; contador <= 10; contador++) {
    if(contador % 2 !== 0) {
        continue;
    }
    console.log(contador);
}