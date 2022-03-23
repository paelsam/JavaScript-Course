let miNumero = "19x"; // NaN = Not a Number
console.log(typeof miNumero);

// Con la funcion Number podemos convertir un string a numero
let edad = Number(miNumero);
console.log(edad);

// La funcion isNaN es para saber si la variable es un numero o no
if (isNaN(edad)) {
  console.log("No es un Numero");
} else {
  // Utilizando el operador ternario
  let votar = edad >= 18 ? "Puedes Votar" : "No puedes Votar :(";
  console.log(votar);
}

// Otro ejemplo: Programa que solo acepta numeros:
let something = '1';
if (isNaN(something)) {
    console.log('No es un numero. Solo es aceptamos numeros');
} else {
    console.log('Si es un numero')
}