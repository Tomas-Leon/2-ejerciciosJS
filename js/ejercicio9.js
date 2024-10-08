//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

//  Ejemplo:

//input: Hola mundo ---> Output: oauo

//--------------------------------------------------------------------------

let frase = prompt("Introduce una frase:").toLowerCase(); // Convertir a minúsculas
let vocalesEncontradas = "";

// Recorrer cada carácter de la frase
for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i);
    
    // Comprobar si el carácter es una vocal
    if ('aeiou'.includes(caracter)) {
        vocalesEncontradas += caracter; // Añadir la vocal a la lista
    }
}
// Mostrar las vocales encontradas
if (vocalesEncontradas.length > 0) {
    document.write('Las vocales que aparecen en la frase son: ' + vocalesEncontradas)
} else {
    document.write('No se encontraron vocales en la frase.')
}


//For: crea un bucle que recorre uno por uno los caracteres de una cadena
//length: Obtiene el número total de caracteres en una cadena.
//charAt: Accede a un carácter en un índice específico de la cadena.
//includes: Verifica si una cadena contiene una subcadena específica.
//1++: es la forma abrviada de decir i=i+1.Esto significa que después de cada iteración del bucle, el valor de i se incrementa en 1.