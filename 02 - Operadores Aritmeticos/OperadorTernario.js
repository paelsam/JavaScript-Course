// Operador ternario en JavaScript
// Estructura: Condicion + ? + 'Resultado Verdadero' + : + 'Resultado Falso'
let resultado = (3 > 2) ? 'Verdadero' : 'Falso';
console.log(resultado);

let a = 2;
let numeroPar = (a % 2 == 0) ? 'Es par' : 'Es impar';
console.log(numeroPar);

let edad = 21, adulto = 18;
let calculoEdad = edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';
console.log(calculoEdad);

let vacaciones = true, diaRetiro = false;
let irAlJuego = vacaciones || diaRetiro ? 'Puedes ir al juego de tu hijo' : 'No puedes ir, estas ocupado';
console.log(irAlJuego)
