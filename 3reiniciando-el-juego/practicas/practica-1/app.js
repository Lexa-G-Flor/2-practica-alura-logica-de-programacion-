/* Esta línea de código llama a la función generarNumeroSecreto, 
obtiene el número secreto que genera y 
lo guarda en la variable numeroSecreto.*/
let numeroSecreto = generarNumeroSecreto();



// Función para asignar texto a un elemento HTML
function asignarTextoElemento (elemento, texto) {
    let elementoHtml = document.querySelector (elemento);
elementoHtml.innerHTML = texto;
return; 
}

//APUNTES - 

/*  1. Cambio de nombre de la funcion y verificacion en index.html

let numeroDeUsuario = document.querySelector ('input')
 
- Se cambia el nombre intentoUsurio por verificarIntento
- Recordar cambiar tambien donde se llama la funcion en index.html
- etiqueta input representa la caja de texto. Se encuentra en index.html
- document.querySelector es una función permite seleccionar un elemento HTML.
- Cuando solo hay un input se puede utilizar querySelector 

function verificarIntento () {
    let numeroDeUsuario = document.querySelector ('input')
    return; 
}

*/

/* 2. cambio del DOC y asignacion de id, del value

let numeroDeUsuario = document.getElementById ('valorUsuario').value;

- Pero cuando hay mas de un input se les asigna un id o nombre para buscarla
- Donde se utiliza document.getElementById ('id');
- este retorna el objeto
- Para solo ver el valor al final se agrega un punto y value
- document.getElementById ('valorUsuario').value;
- Se puede tener mas de un input. Pero se utiliza id  
 
function verificarIntento () {
    let numeroDeUsuario = document.getElementById ('valorUsuario');
    return; 
}

*/

/* 3. - Verificacion el tipo de dato, si numeroDeUsuario es un string o un número.
        -Si es un string, puedes usar parseInt() en la variable 
         para convertirlo a un número antes de realizar operaciones matemáticas.

        let numeroDeUsuario = parseInt (document.getElementById ('valorUsuario').value);
*/

/* 4. Comparar valores y verificar tipo de dato

console.log (typeof(numeroDeUsuario));
console.log (typeof(numeroSecreto));

- Muestra el valor de la variable en la consola del navegador.
- Se compara los dos numeros retornando un booleano o true - false (tipo de dato booleano == )
- Los tipos de datos booleanos son como interruptores que solo pueden estar en dos estados: verdadero o falso.
- Y se utiliza el === para que sea igual en tipo y en valor  

*/ 

function verificarIntento () {
    let numeroDeUsuario = parseInt (document.getElementById ('valorUsuario').value);
    
    console.log (typeof(numeroDeUsuario));
    console.log (numeroDeUsuario);
    console.log (typeof(numeroSecreto));
    console.log(numeroSecreto); 
    console.log (numeroDeUsuario === numeroSecreto); 
    return; 
}

// La función genera un número aleatorio entre 1 y 10 y te lo devuelve.
function generarNumeroSecreto() {
    return Math.floor (Math.random () *  10) + 1 
}

// Asignar texto a los elementos h1 y p
asignarTextoElemento ('h1' , 'Juego del numero secreto?');  
asignarTextoElemento ('p' , 'Indica un numero del 1 al 10?:');  