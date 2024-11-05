//Ejercicio
//crear una funcion que me de un saludo de bienvenida
// function saludoBienvenida(){
//     console.log("Bienvenido")
// }

//funcion como valor de un enlace o variable
// let saludo=function(){
//     console.log("bienvenido")
// }
// saludo()

//de flecha simple
// let mensaje=texto=>console.log("hola, ",texto)
// console.log(mensaje("el primo"))

//flecha con parametros y mas lineas de codigo
// let registroUsuario=(nombre,apellido)=>{
//     let alumno=`${nombre},${apellido}`
//     return alumno
// }
// console.log(registroUsuario("edwin","cachondo"))

//antes de ejecutar hace el binding, en javascript lo que hace es subir las funciones declarativas a la cabecera de mi archivo
// En el caso de funcion como valor o funciones flecha el binding solo evalua el principio del archivo la declaracion de enlace o variable mas no el valor por eso en estos casos debemos ejecutar las funciones despues de haberlo creado 
// let  saludo=()=>{return "holaa"}
// console.log(saludo())
// en el caso de la funcion declarativa el binding eleva toda funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte del archivo incluso antes de que sea creada.
// function despedidad(){
//     return "adios"
// }

//crear una funcion que tenga o almacene una variable contador y podamos, con funciones, realizar la suma + 1 de esta variable y la resta - 1 de la misma variable, ademas de poder tener una funcion que me permita acceder al valor actual y poder mostrar.
//let contador=0
//return contador++
//function decremento
//return contador--
//return contador

function contador(){
    //variable local
    let contador=0

    function incrementar(){
        return contador++
    }

    function decrementar(){
        return contador--
    }

    function obtenerValor(){
         console.log(contador)
    }
    return {
        obtenerValor,
        incrementar,
        decrementar
    }
}

let count1=contador()
count1.incrementar()
for(let i=0;i<5;i++){
    count1.incrementar()
}
count1.obtenerValor()

let count2=contador()
for(let i=0;i<5;i++){
    count1.decrementar()
}
count2.obtenerValor()
// 

