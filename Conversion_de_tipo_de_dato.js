/* let numero_string= "5";
console.log(20/numero_string) /* Output:4, esto muestra que a pesar de que inicialemte la variable se establece como tipo String, la operacion lo renomba de tipo number

Las operaciones matemáticas convierten los valores a números.*/

/* ToString
La conversión a string ocurre cuando necesitamos la representación en forma de texto de un valor.

Por ejemplo, alert(value) lo hace para mostrar el valor como texto.

También podemos llamar a la función String(value) para convertir un valor a string:
*/
    /* let value= true;
    console.log(typeof value); /* Output: boolean */

    /* value= String(value);
    console.log(value,typeof value); /* Output:true string */


/* ToNumber
La conversión numérica ocurre automáticamente en funciones matemáticas y expresiones.
Por ejemplo, cuando se dividen valores no numéricos usando 
*/
/* console.log("6"/"3") /* Output: 2, a pesar de que se establecen dos componenetes de tipo string, se transmutan a tipo number*/

/* let str="125" */ /* Tipo string */
/* str = Number(str)
console.log(str, typeof str) /* Output: 125 number */

/*NOTA PARA EL PROGRAMADOR
Si el string no es un número válido, el resultado de la conversión será NaN. Por ejemplo: */
/* let age = Number("un texto arbitrario en vez de un número");

alert(age); */ // NaN, conversión fallida


/*Reglas de conversión numérica:
undefined----NaN
null------------	0
true and false----	1 y 0
string	Se eliminan los espacios al inicio y final del texto. Si el string resultante es vacío, el resultado es 0, en caso contario el número es “leído” del string. Un error devuelve NaN. */

/* Ejemplo */
/* let no_defined=undefined;
let change_no_defined=Number(undefined);
console.log(no_defined,change_no_defined ,typeof no_defined,typeof change_no_defined) /* Output=undefined, NaN, undefined, number */

console.log(
Number(" 123 "),/* Se eliminan los espacios al inicio y final del texto. Si el string resultante es vacío, el resultado es 0, en caso contario el número es “leído” del string. Un error devuelve NaN. */
Number("123z"),/* Si el string no es un número válido, el resultado de la conversión será NaN */
Number(true),/* true and false	1 y 0 */
Number(false)/* true and false	1 y 0 */
)/* Output: 123 NaN 1 0 */


/* Casi todas las operaciones matemáticas convierten valores a números. Una excepción notable es la suma +. Si uno de los valores sumados es un string, el otro valor es convertido a string.

Esto ocurre solo si al menos uno de los argumentos es un string, en caso contario los valores son convertidos a número.*/

console.log("1"+ 6);/* Concatena los elementos a pesar de que uno sea de tipo number en este caso el operador + no alcanzar a convertir la operacion a una algebraica */
console.log(10+ "12");/* Concatena los elementos a pesar de que uno sea de tipo number en este caso el operador + no alcanzar a convertir la operacion a una algebraica */


/* ToBoolean
La conversión a boolean es la más simple.

Ocurre en operaciones lógicas (más adelante veremos test condicionales y otras cosas similares) pero también puede realizarse de forma explícita llamando a la función Boolean(value).

Las reglas de conversión:

Los valores que son intuitivamente “vacíos”, como 0, "", null, undefined, y NaN, se convierten en false.
Otros valores se convierten en true.

Ten en cuenta: el string con un cero "0" es true
Algunos lenguajes (como PHP) tratan "0" como false. Pero en JavaScript, un string no vacío es siempre true.*/

console.log( Boolean(1) ); // true
console.log( Boolean(0) ); // false

console.log( Boolean("hola") ); // true
console.log( Boolean("") ); // false

console.log( Boolean("0") ); // true
console.log( Boolean(" ") ); // sólo espacios, también true (cualquier string no vacío es true)