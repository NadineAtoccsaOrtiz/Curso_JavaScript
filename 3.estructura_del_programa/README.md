# Estructura Del Programa
## Indice
- [Estructura Del Programa](#estructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expresiones y Declaraciones](#expresiones-y-declaraciones)
  - [Binding o enlace](#binding-o-enlace)
  - [El Entorno](#el-entorno)
  - [Control de Flujo](#control-de-flujo)
    - [Ejecucion condicional](#ejecucion-condicional)
## Interaccion basica con el usuario
Podemos interactuar con el usuario desde Javascript utilizando un metodo sencillo que viene implementado en los navegadores.
El metodo es conocido como `window` o el metodo de ventana, este metodo en realidad es un objeto que contiene o almacena varias funciones, entre ellas las de mostrar mensajes o pedir datos al usuario.
- **alert** - Esta funcion nos muestra un mensaje en pantalla
```js
window.alert("mensaje")
```
- **confirm** - Preguntar al usuario y ofrecer dos botones que se traducen en valores boleanos `Aceptar` (true) y `cancelar` o `cerrar` (false).
```js
window.confirm("¿quieres ser mi enamorado?")
//si deseamos capturar la respuesta almacenaremos el codigo en una variable
respuesta=window.confirm("quieres salir del closed!?")
```
- **prompt** - Pregunta al usuario y espera que se ingrese una respuesta
```js
window.promt("como te llamas??")
//si deseamos almacenar la respuesta usaremos una variable
respuesta=window.prompt("como te llamas?")
```
## Expresiones y Declaraciones
- **Expresiones** - En javascript un fragmento de codigo que produce un valor es llamada `Expresion`. Tambien se dice que una `expresion` es el fragmento de una `oracion`.
```js
1
"hola"
3*6
5>7
!true
```
- **Declararciones** - En javascript es una oracion y es algo que tiene sentido, dato: toda oracion que termina en `;` es una declaracion, no es una obligacion pero es recomendable que la oracion termine en `;` para saber que esta finalizando la declaracion.
```js
!true;
let estado=!false;
```
## Binding o enlace 
Cuando creamos un valor, estos valores son volatiles, solo existen en la ejecucion del propgrama y solo cuando son llamados.
El binding o enlace es la manera que javascript recuerda los valores y mantiene un estado interno asi como la reutilizacion.
**¿como usamos los binding en javascript?**
Para usar el binding primero debemos usar la palabra reservada o `keyword` de nombre `let`, despues debemos darle un nombre para identificar el enlace, luego asignarle el valor.
```js
//este es un enlace que puede apuntar a varios valores
//como un pulpo con muchos brazitos
let edad_persona=34

//si deseamos que nuestro enlace solo apunte a un valor
//un pulpo cion un solo brazo
//entonces para crear este enace debemos ahcer uso del keyword const
const edad=45
//este valor siempre apuntara al valor 45 no podra modificar su enlace a otro valor
```
>[!NOTE]
>**¿Que nombre ponerle a nuestros enlaces?**- El nombre de un enlace debera describir el valor al que esta enlazado, y debera estar escrita en `camelCase` 
```js
//quiero crear un enlace que tenga el valor de la fecha actual
//incorrecto
let yyyymmdd="20240910"
//correcto, dos palabras juntas y la segunda palabra empieza con mayuscula, (asi se escribe en camelCase)
let fechaActual="09-10-2024"
//correcto
let edadActualAlumno=34
```
## El Entorno
El entorno es conocido como el momento en el que se ejcuta o inicia un archivo javascript.
El entorno al crearce no se crea vacio, dentro del entorno se creara la coleccion de enlaces y valores. 
**Tarea** - Averiguar mas sobre la ejecucion en linea de los entornos en javascript
## Control de Flujo
Una sentencia se ejecuta como si fuera una historia de arriba abajo.
por ejemplo:
```js
let elNumero=Number(prompt("eligen un numero")) //para pedir datos al usuario es prompt
console.log(`tu numero es la raiz cuadrada de: ${elNumero*elNumero}`)
//primero le pido al usuario un numero y despues muestra un mensaje y el cuadro de ese numero
```
### Ejecucion condicional
Hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condicion, distintas alternativas.
**Como creamos una condicion en javascript**
La ejecucion condicional se crea con la palabra reservada (keyword) `if` a continuacion de una `condicion` en llaves `{}` se escribe el cuerpo del codigo que deseo ejecutar en caso la condicion sea `verdad`.
-**condicion simple `if`**
```js
let comparacion=5>4
if comparacion{
  prompt("escribe tu nombre")
}
```