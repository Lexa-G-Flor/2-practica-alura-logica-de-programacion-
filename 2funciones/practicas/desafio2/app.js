// Desafio 2

    let titulo = document.querySelector ('h1');
    titulo.innerHTML = 'Hola, bienvenido al 2do desafio de logica de programacion: funciones';

/* 1.Crear una funcion e imprimir mensaje en la consola
*Crear una función que muestra "¡Hola, mundo!" en la consola.
    
Codigo HTML:
    <button onclick="mostrarHola()" class="button">Hola impreso</button>
*/

    function mostrarHola() {
        console.log ('!Hola, mundo¡');
    }

/* 2. Preguntar nombre e imprimir mensaje en la consola
*Crear una función que recibe un nombre como parámetro y 
muestra "¡Hola, [nombre]!" en la consola.

Codigo HTML:
<button onclick="mostrarHolaNombre()" class="button">Nombre impreso</button>
*/
  
    function mostrarHolaNombre() {
        nombre = prompt('Bienvenido, me podrias dar tu nombre: ');
        alert(`¡Hola, ${nombre}, bienvenida!`);
        console.log(`¡Hola, ${nombre}, bienvenida!`);
}

/* 3. Preguntar edad e imprimir mensaje del año y edad en la consola

*Crear una función que recibe un número como parámetro y 
devuelve el doble de ese número.

Codigo HTML
<button onclick="tuEdadDoble()" class="button">Edad doble</button>
        

*/

    function tuEdadDoble() {
        edad = prompt ('Me podrias decir tu edad;') // Pide la edad al usuario
        let resultadoEdad = edad * 2 // Calcula el doble de la edad
        let añoDoble = new Date().getFullYear() + (resultadoEdad - edad); // Calcula el año en que tendrá el doble de la edad
        console.log (`Tendras el doble de tu edad (${resultadoEdad}) en el ${añoDoble}`); // Muestra el resultado en la consola
        }
        
/* 4. Preguntar 2 números, generar un numero 
aleatorio y sumarlos para un promedio.

*Crear una función que recibe tres números como parámetros y 
devuelve su promedio.

Codigo HTML:
<button onclick="calcularPromedio()" class="button">Pequeño juego promedio</button>
        
*/

    function calcularPromedio(){
    numeroAleatoreo = Math.floor (Math.random () * 200 ) + 1 
    alert (`A este numero ${numeroAleatoreo} debes sumarle dos numeros para que den 300`);
    numeroB = parseInt ( prompt ('Me podrias dar el primer numero que sumados con el numero anterior de 300;'));
    numeroC = parseInt ( prompt ('Me podrias dar un segundo numero que sumados con los dos numeros anteriores den 300;'));
    promedio = (numeroAleatoreo + numeroB + numeroC) / 3
    console.log (`La suma de (${numeroAleatoreo})+(${numeroB})+(${numeroC}) = 300 y como promedio es ${promedio}`); // Muestra el resultado en la consola
    
    }

/* 5. Simulacion de juego el numero mayor
 Generar dos numeros aleatorios e imprimir el ganador

Crear una función que recibe dos números como parámetros y 
devuelve el mayor de ellos.

Codigo HTML:
<button onclick="simulacionDeJuego()" class="button">Simulacion de juego de carrera</button>
*/

    function simulacionDeJuego() {
        alert('Esta es una simulación de un juego por puntos');
      
        // Crea un objeto para cada jugador
        let jugadorA = { nombre: 'Jugador A', puntuacion: 0 };
        let jugadorB = { nombre: 'Jugador B', puntuacion: 0 };
      
        // Genera números aleatorios para la puntuación de cada jugador
        jugadorA.puntuacion = Math.floor(Math.random() * 20)+1;
        jugadorB.puntuacion = Math.floor(Math.random() * 20)+1;
      
        // Mostrar los resultados en la consola
        console.log(`${jugadorA.nombre} obtuvo ${jugadorA.puntuacion} puntos`);
        console.log(`${jugadorB.nombre} obtuvo ${jugadorB.puntuacion} puntos`);
        
        //Mostrar resultados en una alerta
        alert(`${jugadorB.nombre} obtuvo ${jugadorB.puntuacion} puntos`);
        alert (`${jugadorA.nombre} obtuvo ${jugadorA.puntuacion} puntos`);

        // Determinar el ganador
        let ganador = jugadorA.puntuacion > jugadorB.puntuacion ? jugadorA.nombre : jugadorB.nombre ;
        let puntos = ganador === jugadorA.nombre ? jugadorA.puntuacion : jugadorB.puntuacion;
        console.log (`El ganador es ${ganador} con ${puntos} puntos`);
        alert (`El ganador es ${ganador} con ${puntos} puntos `);
        }


/* 6. Multiplicar el numero por si mismo e imprimir 
Crear una función que recibe un número como parámetro y 
devuelve el resultado de multiplicar ese número por sí mismo.

Codigo HTML:
<button onclick="calculoCuadrado()" class="button">Simulacion matematica; Potenciación al cuadrado</button>
*/

      function calculoCuadrado () {
        numero = Math.floor(Math.random() * 20) + 1
        resultado = numero * numero;
        console.log("La operación es: " + numero + " * " + numero + " = " + resultado);
        alert("El cuadrado de " + numero + " es: " + resultado);

      }
      
      







