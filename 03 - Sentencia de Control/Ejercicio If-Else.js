/* let mes = 1;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = 'Invierno';
} else if(mes == 3 || mes == 4 || mes == 5) {
    estacion = 'Primavera';
} else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = 'Verano';
} else if (mes == 9 || mes == 10 || mes == 11) {
    estacion = 'Otoño';
} else {
    estacion = 'Valor Incorrecto';
}

console.log(estacion); */


let hora = 4, saludo;

if (hora >= 0 && hora < 6){
    saludo = 'Durmiendo'
} else if (hora >= 6 && hora <= 11) {
    saludo = 'Buenos Dias';
} else if(hora >= 12 && hora <= 18) {
    saludo = 'Buenas Tardes';
} else if (hora >= 19 && hora <= 24) {
    saludo = 'Buenas Noches';
} 
console.log(saludo)