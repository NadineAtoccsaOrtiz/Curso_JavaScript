
- **shift() Elimina el primer elemento de un array y lo devuelve.**
```js
let arr = [1, 2, 3];
let removed = arr.shift();  // removed = 1, arr = [2, 3]
```

- **unshift() Agrega uno o más elementos al principio de un array.**
```js
let arr = [1, 2, 3];
arr.unshift(0);  // [0, 1, 2, 3]
```

- **concat() Combina dos o más arrays en uno nuevo sin modificar los originales.**
```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);  // [1, 2, 3, 4]
```
- **join() Une todos los elementos de un array en una cadena de texto.**
```js
let arr = ['a', 'b', 'c'];
let str = arr.join('-');  // "a-b-c"
```

- **slice() Devuelve una copia superficial de una porción de un array, desde el índice start hasta el índice end.**
```js
let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3);  // [2, 3]
```

- **splice() Cambia el contenido de un array eliminando, reemplazando o agregando elementos.**
```js
let arr = [1, 2, 3, 4];
arr.splice(2, 1, 'a', 'b');  // Elimina el 3 y agrega 'a' y 'b'. Resultado: [1, 2, 'a', 'b', 4]
```

- **forEach() Ejecuta una función en cada elemento del array (sin retornar nada).**
```js
let arr = [1, 2, 3];
arr.forEach(item => console.log(item));  // 1 2 3
```

- **map() Crea un nuevo array con los resultados de la función aplicada a cada elemento.**
```js
let arr = [1, 2, 3];
let newArr = arr.map(x => x * 2);  // [2, 4, 6]
```

- **filter() Crea un nuevo array con los elementos que pasen una condición.**
```js
let arr = [1, 2, 3, 4];
let evenArr = arr.filter(x => x % 2 === 0);  // [2, 4]
```

- **reduce() Ejecuta una función reductora sobre un array (de izquierda a derecha) para reducirlo a un solo valor.**
```js
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0);  // 10
```

- **reduceRight()Similar a reduce(), pero la función reductora se ejecuta de derecha a izquierda.**
```js
let arr = [1, 2, 3, 4];
let sumRight = arr.reduceRight((acc, curr) => acc + curr, 0);  // 10
```
- **some() Verifica si al menos un elemento en el array cumple con la condición.**
```js
let arr = [1, 2, 3, 4];
let hasEven = arr.some(x => x % 2 === 0);  // true
```
- **every() Verifica si todos los elementos en el array cumplen con la condición.**
```js
let arr = [2, 4, 6];
let allEven = arr.every(x => x % 2 === 0);  // true
```
- **find() Devuelve el primer elemento que cumple con la condición.**
```js
let arr = [1, 2, 3, 4];
let firstEven = arr.find(x => x % 2 === 0);  // 2
```

- **findIndex() Devuelve el índice del primer elemento que cumple con la condición.**
```js
let arr = [1, 2, 3, 4];
let index = arr.findIndex(x => x === 3);  // 2
```

- **includes() Verifica si un array contiene un valor específico.**
```js
let arr = [1, 2, 3];
let hasThree = arr.includes(3);  // true
```

- **indexOf() Devuelve el primer índice de un valor en el array, o -1 si no lo encuentra.**
```js
let arr = [1, 2, 3];
let index = arr.indexOf(2);  // 1
```

- **lastIndexOf() Devuelve el último índice de un valor en el array, o -1 si no lo encuentra.**
```js
let arr = [1, 2, 3, 2];
let lastIndex = arr.lastIndexOf(2);  // 3
```

- **sort() Ordena los elementos de un array en su lugar.**
```js
let arr = [3, 1, 2];
arr.sort();  // [1, 2, 3]
 ```
 
- **reverse() Invierte el orden de los elementos de un array.**
```js
let arr = [1, 2, 3];
arr.reverse();  // [3, 2, 1]
```

- **fill() Rellena los elementos de un array con un valor estático entre los índices proporcionados.**
```js
let arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);  // [1, 0, 0, 4]
```

- **flat() "Aplana" un array de arrays en un solo array (por defecto hasta una profundidad de 1).**
```js
let arr = [1, [2, 3], [4, [5]]];
let flattened = arr.flat();  // [1, 2, 3, 4, [5]]
 ```

- **flatMap() Primero mapea cada elemento usando una función y luego aplana el resultado.**
```js
let arr = [1, 2, 3];
let flatMapped = arr.flatMap(x => [x, x * 2]);  // [1, 2, 2, 4, 3, 6]
 ```

- **El método join() te permite convertir un arreglo en una cadena de texto, utilizando un delimitador que tú determines (como una coma, espacio, guion, etc.).**
```js
Copiar código
let lista = ["Hola", "mundo", "esto", "es", "JavaScript"];
let texto = lista.join(" ");  // Unir con espacio
console.log(texto);
```

-**El método más común para convertir un texto en una lista es usar split(). Este método divide una cadena en un arreglo utilizando un delimitador específico.**
```js
let texto = "Hola mundo, esto es JavaScript";
let lista = texto.split(" ");  // Divide la cadena en cada espacio
console.log(lista);
```