
var valorUno = 10
var valorDos = 3

const resta = (a,b) => a-b
var respuesta =resta(valorUno,valorDos)
console.log (respuesta)


const multi = (a,b) => a*b
var respuesta =multi(valorUno,valorDos)
console.log (respuesta)


 //RETO 2
        //Una función que le pregunte al usuario dos valores y que regrese:
        //El área de un cuadrado
        //El área de un rectángulo
        //El área de un circulo (usando const para pi)}


var preg1= prompt("ingresa un numero")
var preg2= prompt("ingresa otro numero")

const areaCuad = (a) => a*a
var respCuad = areaCuad(preg1)
console.log (respCuad)

const areaRect = (a,b) => a*b
var respRect= areaRect(preg1,preg2)
console.log (respRect)


