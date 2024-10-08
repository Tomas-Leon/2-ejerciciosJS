//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es
//divisible (hay que decir todos por los que es divisible)

//  Ejemplo:
 
//input: 20 ---> Output: El 20 es divisible por 2 y por 5.
//input: 210 ---> Output: El 210 es divisible por 2, por 3, por 5 y por 7.

//--------------------------------------------------------------------------

const numero = parseInt(prompt("Introduce un número:"))

// Variable para almacenar los divisores
let divisores = []

if (numero % 2 === 0) {
    divisores.push("2");
}
if (numero % 3 === 0) {
    divisores.push("3");
}
if (numero % 5 === 0) {
    divisores.push("5");
}
if (numero % 7 === 0) {
    divisores.push("7")
}

//push:Si es divisible, se añade el número correspondiente al array 
//'divisores' utilizando el método push creando una cadena separada por comas.

if (divisores.length > 0) {
    document.write('el numero: '+numero+' es divisible por: '+divisores)
} else {
    document.write('El numero: '+numero+' no es divisible por 2, 3, 5 y 7')
}

//divisores.length > 0 comprueba si hay valores en el array lo que significa 
//que es divisible por unos de los numeros indicados