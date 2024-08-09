// Resolución del desafío 1


/*1. cambiar nombre web
Cambia el contenido de la etiqueta h1 con document.querySelector 
y asigna el siguiente texto: Hora del Desafío.*/

    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Hora del Desafío';

 
/*2. Usar funcion; crear mensaje en la consola con botón 
Crea una función que muestre en la consola el mensaje 
El botón fue clicado siempre que se presione el botón Console.

En el index.html , agregamos en el onclick el siguiente código:
    <button onclick="mostarMensajeEnLaConsola()" class="button">Console</button*/

    function mostrarMensajeEnLaConsola() {
        console.log ('El boton fue clicado!');
    }

/*3. Usar funcion para preguntar y generar respuesta, con boton
Crea una función que se ejecute cuando se haga clic en el
botón "prompt", preguntando el nombre de una ciudad de Brasil.
 Luego, muestra una alerta con el mensaje concatenando la respuesta 
 con el texto: "Estuve en {ciudad} y me acordé de ti".

En el index.html , agregamos en el onclick el siguiente código:

    <button onclick="mostrarAlerta()" class="button">Alert</button>*/

    let ciudad;

    function mostrarAlerta1(){
        ciudad = prompt ('Porfavor, ingresa el nombre de una cuidad de Brasil:');
        alert('Ahora presiona el boton prompt');
    }   

    function mensajeMeAcordeDeTi(){
    alert(`Estube en ${ciudad} y me acorde de ti`);
    }

/*4. Crear alerta con boton
Crea una función que muestre una alerta con el mensaje: "Amo JS" 
siempre que se presione el botón "Alerta".

En el index.html , agregamos en el onclick el siguiente código:

<button onclick="mostarAlerta()" class="button">Alert</button> */

function mostrarAlerta2(){
    alert("Aprendiendo a amar JS");
} 

/*5. Solicitar dos numeros y sumar.
Al hacer clic en el botón "suma", pide 2 números y 
muestra el resultado de la suma en una alerta.

En el index.html , agregamos en el onclick el siguiente código:

 <button onclick="sumaDosNumeros()" class="button">Suma</button>*/

function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segundoNumero = parseInt (prompt('Digite el segundo numero'));
    let resultado = primerNumero + segundoNumero;
    alert (`${primerNumero} + ${segundoNumero} = ${resultado}`);
}
