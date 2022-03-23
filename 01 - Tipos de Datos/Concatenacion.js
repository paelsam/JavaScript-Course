var nombre = 'Elkin';
var apellido = 'Panameño';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto); 

var nombreCompleto2 = 'Elkin' + ' ' + 'Angulo';
console.log(nombreCompleto2);

// El numero se convierte en cadena (String)
// El codigo se lee de izquierda a derecha
// Por eso como la variable nombre es un (string), el numero tambien se convierte en un string
var z = nombre + 3 + 1;
console.log(z);
console.log(typeof z);

// Si queremos que se haga la suma, debemos colocar los numeros que queremos usar en parentesis
x = nombre + (3 + 1);
console.log(x);

// Podemos hacerlo a la inversa, no hay problema.
// Recordemos que en Js la variables se leen de izquierda a derecha
x = 3 + 1 + nombre + apellido;
console.log(x);

// Practicando
x = nombre + 3 + 1 + apellido;
console.log(x)

x = nombre + (3 + 1) + apellido
console.log(x)

