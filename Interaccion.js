/* INTERACCION-------------------------------------------------------------------------------------------------------------
Como usaremos el navegador como nuestro entorno de demostración, veamos un par de funciones para interactuar con el usuario: alert,prompt y confirm.
 */

/* Alert */
 /* La mini ventana con el mensaje se llama * ventana modal *. La palabra “modal” significa que el visitante no puede interactuar con el resto de la página. */

/* COMANDOS */
/* alert("Gracias Dios por permitirme pararme y comenzar un nuevo proyecto"); */
/* COMANDOS */


/* prompt
Permite aperturar un ventana modal que deacuerdo a la solicitud de la parte texto, te pemite ingresar un dato.

La función prompt acepta dos argumentos:

1.title
El texto a mostrar al usuario.

2.default
Un segundo parámetro opcional, el valor inicial del campo de entrada.*/

/* NOTA PARA EL PROGRAMADOR:
Corchetes en la sintaxis [...]
Los corchetes alrededor de default en la sintaxis de arriba denotan que el parámetro es opcional, no requerido. */

/* let age = prompt ('¿Cuántos años tienes?', 100); */

/* COMANDOS */
/* let age1 = prompt ('¿Quieres ver hoy a Yolanda?');
alert(`El equipo definio que ${age1} quiere ver a Yolanda!`) */; //Tienes 100 años!
/* COMANDOS */






/* Confirm
La función confirm muestra una ventana modal con una pregunta y dos botones: OK y CANCELAR.

El resultado es true si se pulsa OK y false en caso contrario.

La sintaxis:
result = confirm(pregunta);


*/
/* COMANDOS */
let isBoss= confirm("¿Eres PC?")
alert(isBoss)// true si se pulsa OK
/* COMANDOS */




/* Resumen
Cubrimos 3 funciones específicas del navegador para interactuar con los usuarios:

alert
muestra un mensaje.
prompt
muestra un mensaje pidiendo al usuario que introduzca un texto. Retorna el texto o, si se hace clic en CANCELAR o Esc, retorna null.
confirm
muestra un mensaje y espera a que el usuario pulse “OK” o “CANCELAR”. Retorna true si se presiona OK y false si se presiona CANCEL/Esc.
/*todos estos métodos son modales: detienen la ejecución del script y no permiten que el usuario interactúe con el resto de la página hasta que la ventana se haya cerrado.

Hay dos limitaciones comunes a todos los métodos anteriores:

La ubicación exacta de la ventana modal está determinada por el navegador. Normalmente, está en el centro.
El aspecto exacto de la ventana también depende del navegador. No podemos modificarlo.
Ese es el precio de la simplicidad. Existen otras formas de mostrar ventanas más atractivas e interactivas para el usuario, pero si la “apariencia” no importa mucho, estos métodos funcionan bien. */