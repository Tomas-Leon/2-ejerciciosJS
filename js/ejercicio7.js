//7.- Escribe un programa que pida 3 números y escriba en la 
//pantalla el mayor de los tres.

//  Ejemplo: 

//input: 15 , 3, 9 ---> Output: El 15 es el número más grande

//--------------------------------------------------------------------------

const num5 = parseInt(prompt('ingrese un numero'))
const num6 = parseInt(prompt('ingrese el segundo numero'))
const num7 = parseInt(prompt('ingrese el tercer numero'))
let mayor = num5
if (num6 > mayor) {
    mayor = num6
} 
if (num7 > mayor) {
    mayor = num7
} 
if (num5 === num6 && num6 === num7) {
    document.write('todos los numeros son iguales: '+num5)
}
else {
    document.write('el mayor de los tres numeros es: '+mayor)
}