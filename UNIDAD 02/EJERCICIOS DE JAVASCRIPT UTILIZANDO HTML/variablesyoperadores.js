
let numero1 = 5;
const numero2 = 10;
var resultado;


resultado = numero1 + numero2;
console.log("Suma:", resultado);

resultado = numero2 - numero1;
console.log("Resta:", resultado);

resultado = numero1 * numero2;
console.log("Multiplicación:", resultado);

resultado = numero2 / numero1;
console.log("División:", resultado);


console.log("¿Es numero1 mayor que numero2?", numero1 > numero2);
console.log("¿Es numero1 igual a numero2?", numero1 == numero2);
console.log("¿Es numero1 distinto de numero2?", numero1 != numero2);


console.log("¿Es numero1 mayor que 3 y numero2 menor que 15?", numero1 > 3 && numero2 < 15);
console.log("¿Es numero1 menor que 3 o numero2 mayor que 8?", numero1 < 3 || numero2 > 8);
console.log("Negación de (numero1 > numero2):", !(numero1 > numero2));
