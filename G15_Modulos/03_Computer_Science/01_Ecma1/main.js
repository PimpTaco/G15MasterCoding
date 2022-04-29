console.log ("funciona")

var alumno = "Andres Guevara"

console.log ("El siguiente alumno" + alumno + "es muy aplicado")

// ECMASCRIPT 6 TEMPLATE LITERALS

console.log ( `Este ejemplo es con ECMASCRIPT 6 ${alumno}`)

function suma (a,b){
    var c = a + b

    return c
}

var primer = 50;
var segunda = 100;

var respuesta = suma (primer,segunda)

console.log (`la suma de la variable primer ${primer} y segunda ${segunda} es ${respuesta}`)

var numeros = [10,20,30,40,100]

function sumarest (...num){
    for(let i of num){
        console.log(i)
    }
}

console.log ("aqui se esta llamando la notacion rest")
sumarest (1,3,4,5,6,7,76,656,77,345,54,65,44,)

function sumaarray (arreglo){
    var suma = 0;
    for (var i=0; i<arreglo.length;i++){
        suma = suma + arreglo [i];

    }
    console.log (`el valor de mi contador i es ${i}`)
    return suma;
}


var resultadoarray = sumaarray (numeros) ;
console.log (`sumaarray es igual a ${resultadoarray}`)