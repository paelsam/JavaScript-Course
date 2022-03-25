// Los arrglos con objetos que Nos permiten almacenar datos de diferente tipo:

// No es recomendable hacerlo:
// let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');

//Forma recomendable:
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

// Recorrer Arreglos: 
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

// Recorrer un arreglo con un for:
// length: Numero de elementos de una lista o string
for (i = 0; i < autos.length; i++) {
    console.log(i + ':' + autos[i]);
}

// Modificar un arreglo por el indice especificado:
autos[0] = 'Lamborguini';
console.log(autos[0]);

//Push: Agregamos nuevos elementos al arreglo:
autos.push('Audi');
console.log(autos);

// Formas no recomendables de añadir nuevos elementos a nuestro arreglo: 
console.log(autos.length);
autos[autos.length] = 'BMW';
console.log(autos);

// No es recomendable saltarnos indices porque ocupa espacios en memoria:
autos[6] = 'Porshe';
console.log(autos);

// Preguntar si es un arreglo con el metodo Array.isArray():
console.log(typeof autos);
console.log(Array.isArray(autos));

if (Array.isArray(autos) == true) {
    console.log('Es un Arreglo');
} else {
    console.log('No es un arreglo');
}

// Tambien podemos utilizar el metodo instanceof Array
console.log(autos instanceof Array);
// Este metodo lo podemos usar para comprobar otros objetos.