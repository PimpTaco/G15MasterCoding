
var requestempKelvin = prompt ("Temperatura en Kelvin")

console.log (typeof requestempKelvin)
var tempKelvin = parseInt (requestempKelvin)
console.log (tempKelvin)
console.log (typeof tempKelvin)

console.log (tempKelvin + "°" + " Kelvin")

var tempCelcius = tempKelvin - 273

console.log (tempCelcius + "°" + " Celcius")

var tempFarenheit = tempCelcius * 9/5 + 32

console.log (tempFarenheit + "°" + " Farenheit")
 
var tempConversion = alert ("La temperatura "+ tempKelvin + "°K" +" es igual a " + tempFarenheit +"°F")