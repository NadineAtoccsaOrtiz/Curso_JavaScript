//crear una lista que almacene las 5 bocales y luego las muestre por consola
// let vocales=["a","e","i","o","u"]
// console.log(vocales)
//acceder a la vocal o
// console.log(vocales[3])
//acceder a los elementos de la lista con for
// for (let i = 0;i<vocales.length;i++){
//     console.log(vocales[i])
// }
// console.log(vocales.length)

//trabajo
// tengo una lista de 7 frutas 
//crear un programa que identifique si en mi lista existe naranja, en caso de que si, 
//me mostrara su indice, caso contrario me mostrara un mensaje de error
let listaFrutas = ["pera", "uva", "naranja", "manzana"];

for (let i = 0; i < listaFrutas.length; i++) {
    if (listaFrutas[i] === "naranja") {
        console.log(`La fruta naranja se encuentra en el índice ${i}`);
        break;  
    }
}

//crear dos funciones que reciban por parametros una lista de numeros, una funcion encontrar y devolvera el numero menor de la lista y la otra funcion encotrara y devolvera el numero mayor de la lista
//no usar los metodos de min y max.
let numeros = [7, 2, 3, 4, 5];

function numeroMenor(numeros) {
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) menor = numeros[i];  
    }
    return menor;
}

function numeroMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) mayor = numeros[i]; 
    }
    return mayor;
}

console.log(numeroMenor(numeros));  
console.log(numeroMayor(numeros));  

//crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista
function contarVocal(lista) {
    let contador = 0; 
    
    for (let i = 0; i < lista.length; i++) {
        let palabra = lista[i];

    
        for (let j = 0; j < palabra.length; j++) {
            if (palabra[j] === 'a' || palabra[j] === 'A') { 
                contador++;
            }
        }
    }

    return contador;
}

let palabras = ["manzana", "banana", "cereza", "uva"];
let Cantidad = contarVocal(palabras);

console.log("Cantidad de vocales 'a'=", Cantidad);

//texto a lista
let texto="hola mundo"
let listaTexto=texto.split("")
console.log(listaTexto)

let lista=["hola","como","estas"]
let nuevoTexto=lista.join(",")
console.log(nuevoTexto)

//Ejercicio
//la siguiente url
//www.gatitas.com/?q=marina+gold
//crea un programa que me capture solo la query
//"marina gold"

let url = "www.gatitas.com/?q=marina+gold";
let query = url.split('=')[1].split("+").join(" ")
console.log(query);
//otra forma
let cortarUrl=url.split("=")
let primerElemento=cortarUrl[1]
let dividoTexto=primerElemento.split("+")
let juntarTexto=dividoTexto.join(" ")
console.log(juntarTexto)

//ejemplo de objetos
let datosJoryObjeto={
    nombre:"jory",
    apellido:"rodriguez",
    edad:20,
    sexo:"M",
    ganado:["primo","chamos","enfermeras","mineros"],
    direccion:"pasaje querobamba 222",
    direccionPrecisa:{
      tipoCalle:"pasaje",
      nombreCalle:"querobamba",
      numeroVivienda:222,
      numeroCuarto:5
    },
    accion:()=>{console.log("hola soy jory")}
  }
  console.log(datosJoryObjeto)
  //notacion tipo punto, para aceder a metodos
  console.log(datosJoryObjeto.ganado)
  // notacion tipo corchete, mas usado en lista
  console.log(datosJoryObjeto["sexo"])
  console.log(datosJoryObjeto.direccionPrecisa.numeroVivienda)
  console.log(datosJoryObjeto.ganado[3])

  //ejercicio
  //crear una funcion que me genere un objeto de caracteristiacs tecnicas de una computadora, el objeto debera tener como minimo los siquientes valores
  //marca, modelo, prcesador, ram, disco y trajeta de video
  function computadora(marca, modelo, procesador,ram, disco, tarjetaVideo){
    let caracteristicas={
        marca:marca,
        modelo:modelo,
        procesador:procesador,
        ram:ram,
        procesador:procesador,
        disco:disco,
        tarjetaVideo:tarjetaVideo
    }
    return caracteristicas
  }
  let mipc=computadora("apple","28436","intel","8gb","400","nivia")
  console.log(mipc)
//otra forma
const pc =(marca, modelo, procesador,ram, disco, tarjetaVideo)=>{
    return {
        marca,
        modelo,
        procesador,
        ram,
        procesador,
        disco,
        tarjetaVideo
    }
}
let objetopc=pc("apple","28436","intel","8gb","400","nivia")
console.log(objetopc)
//en este caso la clave marca existe en mi objeto y podemos actualizar su valor por intel
objetopc["marca"]="intel"
console.log(objetopc)
//en este caso la clave color no existe por lo tanto se creara un nuevo elemento con la clave color y su valor negro
objetopc["color"]="negro"
console.log(objetopc)
 
//averiguar como eliminar un elemento de un objeto
delete objetopc.ram
console.log(objetopc)
//ejercicios del 7 al 10