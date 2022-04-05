// Propiedades dinamicas de los objetos: 

// Agregar datos de manera dinamica a Objetos:

const objUsuario = { 
	[`id_${Math.round(Math.random() * 50) + 5}`]: "Random Value"
};

console.log(objUsuario);

const usuarios = ['Elkin', 'Samir', 'Jon', 'James'];

usuarios.forEach((usuario, index) => objUsuario[`id_${index}`] = usuario);

console.log(objUsuario);