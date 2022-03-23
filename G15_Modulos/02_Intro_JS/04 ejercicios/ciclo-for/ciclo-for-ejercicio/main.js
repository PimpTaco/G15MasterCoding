// Recorrer los numeros del 1 al 100 y decir cual es inpar y cual es par
// % -> modulo no da el residuo de la division

// Fizz bozz
// Recorrer los numeros del 1 al 100
// si el numoero es divisible entre 5 -> 5: Fizz
// Si el numero es divisible entre 3 -> 3: Bozz
// Si el numero es divisible entre 3 y 5 ->  15: FizzBozz

// 15 Fizz
// 15 Bozz


// for ( var x = 1; x <= 100; x= x + 1) {
//     if ( x % 2 ){
//         console.log ( x+ " Impar")
//     } else {
//         console.log(x+ " Par")
//     }
// }


for ( var y = 1; y <= 100; y = y +1) {
    if (((y % 5) === 0) && ((y % 3) === 0)) { 
        console.log ( y + " 15: FizzBooz")  
    } else if ((y % 3) === 0){
        console.log ( y + " 3: Bozz")     
    } else if ((y % 5) === 0){
        console.log ( y + " 5: Fizz")
    }
}
 
