
// Función para asignar texto a un elemento HTML
function asignarTextoElemento (elemento, texto) {
    let elementoHtml = document.querySelector (elemento);
elementoHtml.innerHTML = texto;
}
// Función para mostrar un mensaje de alerta
function intentoDeUsuario () {
    alert ('click desde la funcion o boton');
}
// Asignar texto a los elementos h1 y p
asignarTextoElemento ('h1' , 'Juego del numero secreto?');  
asignarTextoElemento ('p' , 'Indica un numero del 1 al 10?:');  