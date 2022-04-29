// inputs
var askName = document.getElementById('askName')
var askAdress = document.getElementById('askAdress')
var askPhone = document.getElementById('askPhone')
var askPiña = document.getElementById('askPiña')

// boton
var boton = document.getElementById("boton")

// answers
var answerName = document.getElementById('answerName')
var answerAdress = document.getElementById('answerAdress')
var answerPhone = document.getElementById('answerPhone')
var answerPiña = document.getElementById('answerPiña')
var answerNopiña = document.getElementById('answerNopiña')

var orden = document.getElementById("orden")


function desplegarOrden (){

    orden.classList.remove("none")

    answerName.innerHTML = askName.value
    answerAdress.innerHTML = askAdress.value
    answerPhone.innerHTML = askPhone.value
    answerPiña.innerHTML = askPiña.value

    var formatPizza = askPiña.value.toUpperCase()

    if (formatPizza === "SI"){
        answerPiña.classList.remove("none")
        answerNopiña.classList.add("none")
    } else if (formatPizza === "NO"){
        answerPiña.classList.add("none")
        answerNopiña.classList.remove("none")
    } else {
        answerPiña.classList.add("none")
        answerNopiña.classList.add("none")
    } 


}

boton.addEventListener("click", desplegarOrden )