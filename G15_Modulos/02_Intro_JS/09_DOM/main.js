var titulo = document.getElementById ("titulo")
var parrafo = document.getElementById ("parrafo")
var boton = document.getElementById ("boton")
var input = document.getElementById('input')
var respuesta = document.getElementById ("respuesta")

console.log(titulo)
console.log(parrafo)

// titulo.innerHTML = "hola mundo desde jsssssss"

function cambiar (){

    titulo.innerHTML = "hola mundo cambio boton"
    parrafo.innerHTML = "que onda padrino"

    respuesta.innerHTML = input.value
}

boton.addEventListener("click", cambiar)

