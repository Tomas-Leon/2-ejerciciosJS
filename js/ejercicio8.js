//8.- Escribe un programa que pida un número y diga si es divisible por 2

//  Ejemplo: 

//input: 10 ---> Output: El 10 es divisible por 2.
//input: 15 ---> Output: El 15 no es divisible por 2.

//--------------------------------------------------------------------------

let num8 = parseInt(prompt('Ingrese un numero'))
if (num8 % 2 === 0) {
    document.write('El numero '+ num8 +' es divisible por 2.')
} else {
    document.write('El numero '+ num8 +' no es divisible por 2.')
}