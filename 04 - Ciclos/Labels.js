// Uso de etiquetas: Nos indica a donde queremos ir;

// Ya que pusimos la label al inicio del for y en el continue eso significa
// Que apenas llegue al continue se dirigira en donde esta la etiqueta inicial:
inicio: 
for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 !== 0) {
        continue inicio;
    }
    console.log(contador);
}