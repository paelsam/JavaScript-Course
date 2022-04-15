💻 El evento resize se activa cuando redimensionemos el tamaño de nuestra ventana, o el del viewport



window.addEventListener("resize", e => {



  console.clear()



  console.log("******* Evento Resize *********")



  //👉Hace referencia al ancho del viewport

  console.log("Ancho del viewport:",window.innerWidth,"px")

  

  //👉Hace referencia al alto del viewport

  console.log("Alto del viewport:",window.innerHeight,"px")

  

  //👉Hace referencia al ancho de la ventana del navegador

  console.log("Ancho de la ventana:",window.outerWidth,"px")

  

  //👉Hace referencia al alto de la ventana del navegador

  console.log("Alto de la ventana:",window.outerHeight,"px")



  console.log(e)

  

})





//*🔃 El evento scroll se activa cuando usamos la barra de desplazamiento o nos movemos con la rueda del mouse



window.addEventListener("scroll", e => {

  

  console.clear()



  console.log("******* Evento Scroll *********")

  

  //👉Hace referencia a la barra de desplazamiento X, mientras mas se aleja de la izquierda mas va a aumentar

  console.log("Scroll X:",window.scrollX, "px")

  

  //👉Hace referencia a la barra de desplazamiento Y, mientras mas se aleje del top mas va a aumentar

  console.log("Scroll Y:",  window.scrollY, "px")



  console.log(e)



})





//*buffering El evento load se activa cuando la ventana del navegador haya terminado de cargar



window.addEventListener("load", e => {



  console.log("******* Evento Load *********")

  

  //👉Hace referencia a la coordernada en la que se emepezo a dibujar la ventana del navegador en vertical

  console.log("Screen X:",window.screenX, "px")

  

  //👉Hace referencia a la coordernada en la que se emepezo a dibujar la ventana del navegador en horizontal

  console.log("Screen Y:",  window.screenY, "px")



  console.log(e)



})





//*🔁 El evento DOMContentLoaded se activa cuando la ventana del navegador haya terminado de cargar



window.addEventListener("DOMContentLoaded", e => {

  

  console.log("******* Evento DOMContentLoaded *********")

  

  //👉Hace referencia a la coordernada en la que se emepezo a dibujar la ventana del navegador en vertical

  console.log("Screen X:",window.screenX, "px")

  

  //👉Hace referencia a la coordernada en la que se emepezo a dibujar la ventana del navegador en horizontal

  console.log("Screen Y:",  window.screenY, "px")

  

  console.log(e)



})



🥊DOMContentLoaded VS 🥊load



✅✅ Cuando tengamos que hacer que algo se cargue al momento de que el DOM este listo, es mucho mas eficiente trabajar con con el evento 'DOMContentLoaded' que con el 'load', sobre todo cuando estemos haciendo peticiones asincronas. Porque el evento DOMContentLoaded es disparado cuando el HTML se cargo por completo, en cambio el evento load se dispara hasta que haya cargado todo el documento HTML, las hojas de estilos, los scripts, imagenes, etc...