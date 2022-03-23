// Maps: 

const mapa = new Map();


// Formas de agregar valores:
mapa.set("name", "Elkin");
mapa.set("age", 16);
mapa.set("soltero", true);

// Propiedades:

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("age"));
console.log(mapa.get("name"));
mapa.set("name", "Samir");
console.log(mapa.get("name"));
mapa.delete("soltero");
console.log(mapa);


mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {})

// Iteraciones:
for (let [key, value] of mapa) {
	console.log("Llave: " + key, "Valor: " + value);
}

const mapa2 = new Map([
	[1, "uno"],
	[2, "dos"],
	[3, "tres"],
	[4, "cuatro"],
	[5, "cinco"],
	["seis", 6]
]);



const mapToArray = [...mapa2];
const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(mapa2);
console.log(mapToArray);
console.log(llavesMapa2, valoresMapa2);