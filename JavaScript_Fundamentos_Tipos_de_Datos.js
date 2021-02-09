/* TIPOS DE DATOS--------------------------------------------------------------
Un valor en JavaScript siempre pertenece a un tipo determinado, hay ocho tipos básicos de datos en JavaScript

-number para números de cualquier tipo: enteros o de punto flotante, los enteros están limitados por ±(253-1).

-bigint para números enteros de longitud arbitraria.

-string para cadenas. Una cadena puede tener cero o más caracteres, no hay un tipo especial para un único carácter.

-boolean para verdadero y falso: true/false.

-null para valores desconocidos,un tipo independiente que tiene un solo valor nulo: null.

-undefined para valores no asignados – un tipo independiente que tiene un único valor “indefinido”: undefined.

-object para estructuras de datos complejas.

-symbol para identificadores únicos.


JS se denomina como un lenguaje dinamicamente tipado ya que al definir el tipo de variable inicialmente, esta puede ser modificada de acuerdo al flujo de trabajo

Dentro de los valores numericos se define el infinity, -infinity y NaN.. Infinity representa el Infinito matemático ∞. Es un valor especial que es mayor que cualquier número

NaN representa un error de cálculo. Es el resultado de una operación matemática incorrecta o indefinida..*/

/* console.log(4/0) /*output: Infinity */
/* console.log(Infinity/1) /*output: Infinity */
/* alert("Hola"/1+3) /* Resultado en el browser:NaN */






/* BigInt-----------------------------------------------------------------------
En JavaScript, el tipo “number” no puede representar valores enteros mayores que  90071992547410000), o menor que -90071992547410000 para negativos. Es una limitación técnica causada por su representación interna.
Para solucionar tal limitante se propone agregando al final de numero>9007199254740991 la letra n */

let comun_Number= 90071992547410005n;/* Output: -90071992547410000 */
/* console.log(comun_Number) */ /*Output: 90071992547410005n
/* Los datos de tipo Bigint no puede ser operador con datos primitivos comunes
TypeError: Cannot mix BigInt and other types, use explicit conversions */









/* STRING-----------------------------------------------------------------------
Un string puede estar formado por un solo carácter o por varios de ellos.

En JavaScript, hay 3 tipos de comillas.

Comillas dobles: "Hola".
Comillas simples: 'Hola'.
Backticks (comillas invertidas): `Hola`.
Las comillas dobles y simples son comillas “sencillas” (es decir, funcionan igual). No hay diferencia entre ellas en JavaScript.

Los backticks son comillas de “funcionalidad extendida”. Nos permiten incrustar variables y expresiones en una cadena de caracteres encerrándolas en ${...},
*/
let name="JuanchoStyle"

/* Incrustar variables las comillas invertidas se establecen con Alt+Gr and }*/


/* console.log(`Todas las niñas esta enamoradas de,${name} `) */;/* Output:Todas las niñas esta enamoradas de,JuanchoStyle!  */

/* console.log(`Te quiero poner en ${1+3}`) /*Output: Te quiero poner en 4 */

/* La expresión dentro de ${...} se evalúa y el resultado pasa a formar parte de la cadena. Podemos poner cualquier cosa ahí dentro: una variable como name, una expresión aritmética como 1 + 2, o algo más complejo. */



/* BOOLEAN (TIPO LOGICO--------------------------------------------------------

El tipo booleano tiene sólo dos valores: true y false.

Este tipo se utiliza comúnmente para almacenar valores de sí/no: true significa “sí, correcto, verdadero”, y false significa “no, incorrecto, falso”.

los valores booleanos se pueden inicializar a variables y adicional son el resultado de operacion logicas comparativas como ==,<,>,!=,<= o >=.
    */

let a=4,b=5,c=7;

/* console.log(a==b) */;/* Output: false */
/* console.log(a>b); /* Output: false */
/* console.log(a<b); /* Output: true */
/* console.log(a!=b) */;/* Output: true */
/* console.log(a>=c) */;/* Output: false */
/* console.log(a<=c) */;/* Output: true */







/* NULL-------------------------------------------------------------------------
El valor especial null no pertenece a ninguno de los tipos descritos anteriormente.

Forma un tipo propio separado que contiene sólo el valor null

En JavaScript, null no es una “referencia a un objeto inexistente” o un “puntero nulo” como en otros lenguajes.

Es sólo un valor especial que representa “nada”, “vacío” o “valor desconocido”.

El código anterior indica que el valor de age es desconocido o está vacío por alguna razón.

*/

let nulo=null;
/* console.log(nulo/5) /* Output: 0 */

/* UNDEFINED---------------------------------------------------------------------

El valor especial undefined también se distingue. Hace un tipo propio, igual que null.

El significado de undefined es “valor no asignado”.

Si una variable es declarada pero no asignada, entonces su valor es undefined:

…Pero no recomendamos hacer eso. Normalmente, usamos null para asignar un valor “vacío” o “desconocido” a una variable, mientras undefined es un valor inicial reservado para cosas que no han sido asignadas.
*/


/* OBJECT---------------------------------------------------------------------
El tipo object (objeto) es especial.

/*Todos los demás tipos se llaman “primitivos” porque sus valores pueden contener una sola cosa (ya sea una cadena, un número o lo que sea). Por el contrario, los objetos se utilizan para almacenar colecciones de datos y entidades más complejas.

Siendo así de importantes, los objetos merecen un trato especial. Nos ocuparemos de ellos más adelante en el capítulo Objetos después de aprender más sobre los primitivos.
*/







/* typeof---------------------------------------------------------------

El operador typeof devuelve el tipo del argumento. Es útil cuando queremos procesar valores de diferentes tipos de forma diferente o simplemente queremos hacer una comprobación rápida.

Soporta dos formas de sintaxis:

Como operador: typeof x.
Como una función: typeof(x).

En otras palabras, funciona con paréntesis o sin ellos. El resultado es el mismo.

La llamada a typeof x devuelve una cadena con el nombre del tipo:

*/
console.log( typeof undefined ,// "undefined"

typeof 0, // "number"

typeof 10n, // "bigint"

typeof true, // "boolean"

typeof "foo", // "string"

typeof Symbol("id"), // "symbol"

typeof Math ,// "object"Math es un objeto incorporado que proporciona operaciones matemáticas. Lo aprenderemos en el capítulo Números. Aquí sólo sirve como ejemplo de un objeto.

typeof null, // "object"El resultado de typeof null es "object". Esto está oficialmente reconocido como un error de comportamiento de typeof que proviene de los primeros días de JavaScript y se mantiene por compatibilidad. Definitivamente null no es un objeto. Es un valor especial con un tipo propio separado.

typeof alert, // "undefined"El resultado de typeof alert es "function" porque alert es una función. Estudiaremos las funciones en los próximos capítulos donde veremos que no hay ningún tipo especial “function” en JavaScript. Las funciones pertenecen al tipo objeto. Pero typeof las trata de manera diferente, devolviendo function. Además proviene de los primeros días de JavaScript. Técnicamente dicho comportamiento es incorrecto pero puede ser conveniente en la práctica.
)