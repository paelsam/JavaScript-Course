// Generators: Convertimos una funcion en un iterable.
function* iterable() {
	yield "Hola";
	console.log("Hola Consola");
	yield "KlK";
}


let iterador = iterable();

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

/* for (let y of iterador) {
	console.log(y);
} */

const arr = [...iterable()];
// console.log(arr);


function cuadrado(valor) {
	setTimeout(() => {
		console.log({valor, resultado: valor**2})
	}, Math.random() * 1000);
}

// Funcion generadora:
function* generador() {
	console.log("Inicia Generator");
	for (let i = 0; i <= 10; i++) {
		yield cuadrado(i);
	}
	console.log("Termina Generator");
}

let gen = generador();

for (let y of gen) {
	console.log(gen);
}