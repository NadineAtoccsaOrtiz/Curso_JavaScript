# Indice
- [Indice](#indice)
- [Estructura de datos](#estructura-de-datos)
  - [Lista o Array](#lista-o-array)
    - [Creacion](#creacion)
    - [Acceder a un elemnto del array](#acceder-a-un-elemnto-del-array)
    - [Metodos](#metodos)
  - [TAREA](#tarea)
  - [Objetos](#objetos)
    - [Creacion](#creacion-1)
    - [Acceder a un elemento del objeto](#acceder-a-un-elemento-del-objeto)
    - [Metodos](#metodos-1)
# Estructura de datos
A parte de los tipos de datos primitivos javascript nos proporciona los tipos de datos complejos conocido tambien como datos estructurados o estructura de datos.
Para poder trabajar con estos tipos de datos, deberemos conocer la forma de representarlos en la memoria de nuestra maquina.
Javascript trabaja con dos tipos de datos estructurados que trabajan de manera independiendte o en conjunto.
Son los siguientes
## Lista o Array
Las listas en javascript son un tipo de dato estructurado que nos permite almacenar distintos tipos de datos primitivos separado por comas, cada tipo de dato que se almacene en una lista se le conoce como `elemento`.
Asi cada `elemento` estara separado por una coma. 
### Creacion
Primero debemos crear un enlace (una variable) y luego le asignamos (con simbolo =) la lista que se cree con `corchetes []`, los elementos estaran dentro de los corchetes sepaardos por comas.
```js
//estoy creando una lista vacia
let miLista=[]
//creando una lista de numeros
let numero=[2,4,5,6,7,8]
//creando una lista de nombres
let nombre=["edwin","jory","adan","nadine"]
//crear una lista mixta
let listaMixta=["edwin"1,"feli",2,false,["hola","mundo"]]
```
### Acceder a un elemnto del array
para poder acceder aun elemento del array debemos entender que javascript asignara por cada elemento un indice que nos permitira acceder a un elemento en especifico. Este indice es incremental y comenzara de 0 con el primer elemento, el ultimo elemento sera la cantidad de elementos menos 1.
```js
let numeros=[3,6,7,23,67,8]
console.log(numeros[2])
```
Existe otra manera de acceder a lo eleemntos de una lista, esto se logra recorriendo cada elemento de una lista, esto se logra con un bucle `for`.
```js
let nombres=["edwin","orlando","jory","cristian"]
for (let i=0<nombres.length,i++){
  console.log(nombres[i])
}
```
### Metodos
los metodos son funciones que nos permiten modificar, crear, actualizar y eliminar los elementos de una lista. Todas las variables que almacena una lista nos permite acceder a sus metodos, poniendo un punto despues del nombre de la variable.
- metodo para recuperar la longitud de elementos que tiene una lista,.
```js
let numeros=[2,3,4,5,6]
numeros.length
//accedemos al metodo de una lista con un punto
```
- metodo para agregar un elemento al final de la lista.
```js
let vocales=["a"]
vocales.push("e")

```
- metodo para eliminar el ultimo elemento de una lista
```js
let vocales=["a","e","i"]
//por defecto elimina el ultimo elemento de la lista
vocales.pop()
```
## TAREA
Averiguar que otros metodos exiten para el tratamiento de listas en javascript.

## Objetos
Los objetos son tipos de datos estructurados similares a las listas, para poder acceder a un elemento de la lista javascript les asignaba indices, en este caso, los objetos como unica diferencia de la listas, nosotros podremos asignar el nombre del elemento al cual deseamos acceder, a esto se le conoce como `clave:valor`. Cada clave:valor es un elemnto de un objeto, si desemos crear mas elemntos, tendremops que separarlos por comas.
### Creacion
Para crear un objeto debemos ecerrar los elementos en llaves `{}`, cada elemento estara conformado por su `clave:valor`.
```js
//lista
let datosJory=["jory","rodriguez","20","m"]
//objeto
let datosJoryObjeto={
  nombre:"jory",
  apellido:"rodriguez",
  edad:20,
  sexo:"M",
  ganado:["primo","chamos","enfermeras","mineros"]
  direccion:"pasaje querobamba 222"
  direccionPrecisa:{
    tipoCalle:"pasaje",
    nombreCalle:"querobamba",
    numeroVivienda:222
    numeroCuarto:5
  }
  accion:()=>{console.log("hola soy jory")}
}
//tambien se puede crear funciones de tipo clase

```
### Acceder a un elemento del objeto

### Metodos
