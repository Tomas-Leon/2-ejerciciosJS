//10.- Escribe un programa que pida un número y nos diga si es divisible 
//por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

//  Ejemplo: 

//input: 20 ---> Output: El 20 es divisible por 2.

//--------------------------------------------------------------------------

const num9 = parseInt(prompt("Introduce un número:"));

if (num9 % 2 === 0) {
    document.write("El " + num9 + " es divisible por 2.");
} else if (num9 % 3 === 0) {
    document.write("El " + num9 + " es divisible por 3.");
} else if (num9 % 5 === 0) {
    document.write("El " + num9 + " es divisible por 5.");
} else if (num9 % 7 === 0) {
    document.write("El " + num9 + " es divisible por 7.");
} else {
    document.write("El " + num9 + " no es divisible por 2, 3, 5 o 7.");
}