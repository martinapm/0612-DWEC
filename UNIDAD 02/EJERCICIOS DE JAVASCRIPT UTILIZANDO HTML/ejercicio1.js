
//1. Uso de la instrucción break en un bucle

var numeros = [7, 14, 22, 27, 30, 44, 49, 55, 68];

for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);

   if (numeros[i]>50 ){
    console.log("Se ha encontrado un número mayor a 50");
    break;
   } 
} 
