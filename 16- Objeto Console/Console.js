// Esta linea de codigo nos muestra todos los metodos del objeto console.
console.log(console);

console.error("Esto es un ERROR!");
console.warn("Esto es un Aviso OjO");
console.info("Esta es una Informacion");
console.log("Un registro de lo que ha pasado en nuestra aplicacion");

let nombre = "Elkin",
  apellido = "Panameño",
  edad = 16;

console.info(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
// Podemos usar comodines con porcentajes para llamar variables a un String:
console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);
// Limpiamos la consola:
console.clear();

console.log(window);
console.log(document);

// Para ver todos los Elementos como si fueran un Objeto
console.dir(document);
console.dir(window);
console.clear();

// Creamos grupos de datos:
console.group("Mis redes sociales:");
console.log("@paelsam");
console.log("Elkin Angulo");
console.log("@Paelsam31");
console.groupEnd();

console.clear();

// Representamos los objetos como si fueran tablas:
// Sort: Lo ordenamos alfabeticamente
console.table(Object.entries(console).sort());
console.clear();

// Tambien funciona con Arrays y Objects:
const vocales = ["a", "e", "i", "o", "u"];
console.table(vocales);

const persona = {
  nombre: "Elkin",
  apellido: "Panameño",
  edad: 16,
};
console.table(persona);
console.clear();

// Podemos medir el tiempo que tarda en hacerse una ejecucion:
console.time("Cuanto tiempo tarda el codigo");
const array = Array(1000);

for (let i = 0; i < array.length; i++) {
  array[i] = i;
}
console.timeEnd("Cuanto tiempo tarda el codigo");
console.clear();

for (let i = 0; i < 10; i++) {
  // Contamos el numero de veces que se repite una linea de codigo;
  console.count("For");
  console.log(i);
}
console.clear();

let x = 4,
  y = 2,
  pruebaXY = " Se espera x sea menor que y";
console.assert(x < y, (x, y, pruebaXY));
