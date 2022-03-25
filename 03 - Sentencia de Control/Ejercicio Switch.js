// Tambien podemos usar string, pero switch usa la comparacion estricta
let mes = 6, estacion = 'Estacion desconocida';

switch (mes){
    // Añadir mas casos para una sentencia
    case 1: case 2: case 12:
        estacion = 'Invierno';
        // Es importante poner break
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
}

console.log(estacion);