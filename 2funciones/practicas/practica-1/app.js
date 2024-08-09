/* Esta línea de código llama a la función generarNumeroSecreto, 
obtiene el número secreto que genera y 
lo guarda en la variable numeroSecreto.*/
let numeroSecreto = generarNumeroSecreto();

// Muestra el valor de la variable numeroSecreto en la consola del navegador.
console.log(numeroSecreto); 

// Función para asignar texto a un elemento HTML
function asignarTextoElemento (elemento, texto) {
    let elementoHtml = document.querySelector (elemento);
elementoHtml.innerHTML = texto;
return; 
}
// Función para mostrar un mensaje de alerta
function intentoDeUsuario () {
    alert ('click desde la funcion o boton');
    return; 
}

// La función genera un número aleatorio entre 1 y 10 y te lo devuelve.
function generarNumeroSecreto() {
    return Math.floor (Math.random () *  10) + 1 
}

// Asignar texto a los elementos h1 y p
asignarTextoElemento ('h1' , 'Juego del numero secreto?');  
asignarTextoElemento ('p' , 'Indica un numero del 1 al 10?:');  