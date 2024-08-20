/* Esta línea de código llama a la función generarNumeroSecreto, 
obtiene el número secreto que genera y 
lo guarda en la variable numeroSecreto.*/
let numeroSecreto = generarNumeroSecreto();


//Agregado
let intentos = 1;
console.log (numeroSecreto); 

// Función para asignar texto a un elemento HTML
function asignarTextoElemento (elemento, texto) {
    let elementoHtml = document.querySelector (elemento);
elementoHtml.innerHTML = texto;
return; 
}


function verificarIntento () {
    let numeroDeUsuario = parseInt (document.getElementById ('valorUsuario').value);

    console.log (numeroSecreto); 
    console.log (intentos);

    if (numeroDeUsuario === numeroSecreto) {

        //Agregado; RESUMEN del if / else
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);

    } else { 
        if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento ('p', 'El numero secreto es menor');
        } else {
        asignarTextoElemento ('p', 'El numero secreto es mayor');
        }
    }
    
    //agregado
    intentos ++;

    }
    

// La función genera un número aleatorio entre 1 y 10 y te lo devuelve.
function generarNumeroSecreto() {
    return Math.floor (Math.random () *  10) + 1 
}

// Asignar texto a los elementos h1 y p
asignarTextoElemento ('h1' , 'Juego del numero secreto?');  
asignarTextoElemento ('p' , 'Indica un numero del 1 al 10?:');  