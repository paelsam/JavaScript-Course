// Tipo de dato Symbol: Es un tipo de dato especial que no se puede asignar un valor.


let newSymbol = Symbol("anything");
let newSymbol2 = Symbol("anything");
console.log(newSymbol);
console.log(newSymbol2);

// newSymbol y newSymbol2 no son lo mismo
console.log(newSymbol === newSymbol2); // false

let persona = {
    [newSymbol]: "Juan",
}

persona.newSymbol = "Pedro";
console.log(persona);