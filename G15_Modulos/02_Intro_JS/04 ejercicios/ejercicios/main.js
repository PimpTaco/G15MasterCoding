var numCliente = prompt("Proporcione su numero de cliente")

if (numCliente == 1000){
    alert ("Felicidades, es usted el ganador")
} else ( alert ("Lo sentimos, sigue participando " + numCliente) )

var renumUno = prompt("ingrese un numero")
var renumDos = prompt("ingrese un segundo numero")

var numUno = parseInt (renumUno)
console.log (numUno)
console.log (typeof numUno)
var numDos = parseInt (renumDos)
console.log (numDos)
console.log (typeof numDos)

if (numUno <= numDos) {
    alert = (numUno + " es menor que " + numDos)
} else if (numDos < numUno) {
    alert = (numDos + " es menor que " + numUno)
} else (numUno === numDos) (
    alert = ("ambos son iguales")
)



