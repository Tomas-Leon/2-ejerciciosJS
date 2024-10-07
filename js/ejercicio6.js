//6.- Escribe un programa que pida dos números y escriba en la pantalla
//cual es el mayor.

//  Ejemplo: 

//input: 15 , 3 ---> Output: El 15 es el número más grande

//--------------------------------------------------------------------------

let num3 = parseInt(prompt('ingrese un numero'))
let num4 = parseInt(prompt('ingrese otro numero'))
if (num3 > num4) {
    document.write('El numero mayor es: '+num3)
} else if (num4 > num3) {
    document.write('El numero mayor es: '+num4)
} else {
    document.write('Ambos numeros son iguales')
}