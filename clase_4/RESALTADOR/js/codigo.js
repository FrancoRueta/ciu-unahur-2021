//Nos traemos todos los parrafos del documento.
let parrafosDocumento = document.querySelectorAll("p");




//Creamos la funcion a ejecutar cada vez que se clickee un elemento.
const cambiarColor = nodo => { nodo.classList.toggle("color-resaltado") }



//Creamos el bucle foreach, para agregar un eventListener a cada uno de los parrafos. 
parrafosDocumento.forEach(nodo => {
    nodo.addEventListener("click",() =>  {cambiarColor(nodo)});
});





