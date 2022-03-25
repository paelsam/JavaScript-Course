'use strict';

// Para que nuestro programa no se cierre cuando se encuentre un error
// Usamos el Bloque try catch finally
try {
    // En el bloque try ponemos nuestro algoritmo que queremos comprobar
    let x = 10;
}
catch(error){
    // Con el bloque catch capturamos el error 
    // Este recibe un parametro. Puede ser cualquier nombre
    // Y si queremos, lo imprimimos.
    console.log(error);
}
finally {
    // El bloque finally se ejecutara, no importa si sale error o no.
    // Este bloque es opcional.
    console.log('Finally, we comming after that');
}

// Luego podemos seguir ejecutando el programa:
console.log('Continuamos...');