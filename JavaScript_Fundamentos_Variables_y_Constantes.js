/* "use strict";
veremos las diferencias entre el modo estricto y el antiguo.
CMAScript 5 (ES5) añadío nuevas características al lenguaje y modificó algunas de las ya existentes. Para mantener el código antiguo funcionando, OJO: -la mayor parte de las modificaciones están desactivadas por defecto-. Tienes que activarlas explícitamente usando una directiva especial: "use strict".
Únicamente pueden aparecer comentarios por encima de "use strict".
No hay ninguna directiva del tipo "no use strict" que haga al motor volver al comportamiento anterior.Una vez entramos en modo estricto, no hay vuelta atrás.
El JavaScript moderno admite “clases” y “módulos”, estructuras de lenguaje avanzadas (que seguramente llegaremos a ver), que automáticamente habilitan use strict. Entonces no necesitamos agregar la directiva "use strict" si las usamos. */

/* alert("Hola People");
console.log("hola mundo") son los dos comandos que utilizaremos para observar las salida de las funciones y/O operaciones realizadas*/




//¿Que es una variable en JS?
/*  Se define como un almacenaje nombrado para datos  */

/* Recomendacion a l ahora de nombrar una variable:
Estando en el tema de las variables, existe una cosa de mucha importancia.

Una variable debe tener un nombre claro, de significado evidente, que describa el dato que almacena.

Algunas reglas buenas para seguir:

-Use términos legibles para humanos como userName p shoppingCart.
Evite abreviaciones o nombres cortos a, b, c, al menos que en serio sepa lo que está haciendo.
-Cree nombres que describen al máximo lo que son y sean concisos. Ejemplos que no son adecuados son data y value. Estos nombres no nos dicen nada. Estos solo está bien usarlos en el contexto de un código que deje excepcionalmente obvio cuál valor o cuales datos está referenciando la variable.
-Se debe estar de acuerdo cuáles términos utilizara un equipo y uno mismo. Si un visitante se le llamara “user”, deberíamos llamar las variables relacionadas currentUser o newUser en vez de currentVisitor o newManInTown.


Utilizar diferentes variables para distintos valores incluso puede ayudar a optimizar su código*/



/* Para genera una variable en JS se usa la palabra reservada "let" */
let x; /* Se declara */
x= "Hola Mundo"; /* Se inicializa */

/* Esto puede parecer más corto, pero no lo recomendamos. Por el bien de la legibilidad, por favor utiliza una línea por variable. */
let a="Juan",y="Bermudez",z="Villa";
console.log(a+" "+y+" "+z+"\n"+"Pone todo su empeño para ser un buen programador")

/*Algunas personas también definen variables múltiples en estilo multilínea:
let user = 'John',
age = 25,
message = 'Hola';*/

/* Las variables se pueden declarar una sola vez, pero inicializar con diferentes valores, esto genera que el espacio asignado en memoria no cambie, sin embargo el que se altera es el valor correspondiente */
let w="Mi primer valor"
w="Mi segundo valor"
w="Mi tercer valor"
console.log(w)

/*IMPORTANTE:Declarar dos veces lanza un error  */

/* Mi tercer valor es el resultado en consola */

/* Solo hay don simbolos que se permite utilizar como nombres de variables y son: */
let $="Signo de dolar"
let _="Simbolo de upercase"

/* IMPORTANTE:Se debe tener en cuenta que la gramatica del nombre de la variable
SI tiene en cuenta la composicion de mayusculas y minusculas manzana!=Manzana */

let manzana="Esta es una fruta en minuscula"
let Manzana="Esta es una fruta en mayuscula"
console.log(manzana==Manzana) /* Se establece que las dos variables anteriores tiene su propio espacio en memoria y que la diferencia en sintaxis es tenida en cuenta */


/* IMPORTANTE: Hay una lista de palabras reservadas, las cuales no pueden ser utilizadas como nombre de variable porque el lenguaje en sí las utiliza.

Por ejemplo: let, class, return, y function están reservadas. */




/* ¿Como se defininen las constantes en JS?
Las variables declaradas utilizando const se llaman “constantes”. No pueden ser alteradas. Al intentarlo causaría un error:
*/

const numero=4;
/* numero=3;  TypeError: Assignment to constant variable.*/
console.log(numero);


/* CONSTANTES EN MAYUSCULA--------------------------------------------------------
Existe una práctica utilizada ampliamente de utilizar constantes como aliases de valores difíciles-de-recordar y que se conocen previo a la ejecución.

Tales constantes se nombran utilizando letras mayúsculas y guiones bajos.

Por ejemplo, creemos constantes para los colores en el formato “web” (hexadecimal:
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";


let color = COLOR_ORANGE;
alert(color): #


Ventajas:

COLOR_ORANGE es mucho más fácil de recordar que "#FF7F00".
Es mucho más fácil escribir mal "#FF7F00" que COLOR_ORANGE.
Al leer el código, COLOR_ORANGE tiene mucho más significado que #FF7F00.
¿Cuándo se deben utilizar letras mayúsculas para una constante, y cuando se debe nombrarla de manera normal? Dejémoslo claro.

Ser una “constante” solo significa que el valor de la variable nunca cambia. Pero hay constantes que son conocidas previo a la ejecución (como el valor hexadecimal del color rojo) y hay constantes que son calculadas en el tiempo de ejecución, pero no cambian después de su asignación inicial.*/

const COLOR_ORANGE="#FF7F00";
console.log("COLOR_ORANGE")
