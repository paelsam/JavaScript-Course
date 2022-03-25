// Lista de numeros. Los cuales definiremos si son pares o impares.
let list = [1, 3, 2, 4, 5, 6, 1, 2, 6, 7];

/* list.forEach((n) => {
  if (list[n] % 2 == 0) {
    console.log("Es par el numero ", list[n]);
  } else {
    console.log("Es impar el numero ", list[n]);
  }
}); */

// Es mejor poner mejor variables a las literales
// Por eso puse la variable adulto = 18;
/* let edades = [12, 21, 3, 12, 53],
  adulto = 18;
edades.forEach((edad) => {
  if (edad < adulto) {
    console.log("Es menor de edad", edad);
  } else {
    console.log("Es mayor de edad", edad);
  }
}); */

let edad = 17,
  adulto = 18;
if (edad >= adulto) {
  console.log("Es un adulto");
} else {
  console.log("Es menor de edad");
}
