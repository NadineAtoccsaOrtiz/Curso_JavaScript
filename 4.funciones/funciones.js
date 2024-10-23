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
let registroUsuario=(nombre,apellido)=>{
    let alumno=`${nombre},${apellido}`
    return alumno
}
console.log(registroUsuario("edwin","cachondo"))
