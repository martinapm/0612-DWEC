/**
 * Función que verifica si un número es entero y positivo
 * @param {number} n - Número a verificar
 * @returns {boolean} - True si es entero y positivo, false en caso contrario
 */
function esEntero (n){
    // Verificar que sea un número entero y mayor que 0
    return Number.isInteger(n) && n > 0;
}

// Declarar la variable para almacenar el tamaño del array
let N;

// Bucle do-while que se ejecuta hasta que el usuario ingrese un número válido
do {
    // Solicitar al usuario el tamaño del array y convierte el texto a número
    N = Number(prompt("Introduzca el tamaño de la array "));
    
    // Si no es un entero positivo, muestra mensaje de error
    if(!esEntero(N)) alert("Error. No puede estar vacío");

} 
// El bucle continúa mientras no se ingrese un entero positivo
while (!esEntero(N));

// Array vacío para almacenar los números
let numeros = [];

// Bucle for para solicitar N números al usuario
for(let a = 0; a < N; a++){
    let num;
    
    // Bucle interno para cada número individual
    do {
        // Solicitar un número positivo al usuario
        num = Number(prompt("Introduzca un número positivo: "));
        
        // Si no es válido, muestra error
        if(!esEntero(num)) alert("Error. Tiene que ser un número positivo");
    }
    // Repetir hasta que se ingrese un número válido
    while(!esEntero(num));
    
    // Agregar el número válido al array
    numeros.push(num);
}

// Ordenar el array de números en orden ascendente
numeros.sort((a, b) => a - b);

// Mostrar el array ordenado en la consola
console.log("Array ordenado:", numeros);
