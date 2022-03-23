// var preguntaPrompt = prompt ("Eres bellisimo/a?")

// console.log (preguntaPrompt)

// var respuestaGeneral = preguntaPrompt.toLowerCase()

// console.log (respuestaGeneral)

// if (respuestaGeneral === "si" ) {
//     console.log("Ciertamente")
// } else if (respuestaGeneral === "no" ){
//     console.log("No te Creo")
// } else (
//     console.log("Esa no es una respuesta")
// )


// var numeroPrompt = prompt ()




var calificacion = prompt ("Escriba su calificacion del 1-10")

if (calificacion <1 || calificacion >10 ){
    alert ("Error")
} else if (calificacion <6){
    console.log ("Reprobado")
} else if (calificacion >6 && calificacion <8){
    console.log ("Regular")
} else if (calificacion == 9){
    console.log ("Bien")
} else if (calificacion == 10){
    console.log ("Excelente")
}

// 3. solicitar al usuario una calificacion (1-10) luego se debe comprobar que el numero este en ese rango, si no lo esta imprima un mensaje de error, si lo esta, imprima reprobado si es menor a 6, regular si esta entre 6-8, bien 9 y excelente 10