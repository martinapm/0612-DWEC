//10



// ejercicio10.js
const a = 10;
const b = 5;
const c = 2;

// Sin paréntesis - la precedencia natural se aplica
const resultado1 = a + b * c;
console.log("Sin paréntesis: a + b * c =", resultado1);
console.log("Primero multiplica (5 * 2 = 10), luego suma (10 + 10 = 20)");

// Con paréntesis - cambiamos la precedencia
const resultado2 = (a + b) * c;
console.log("\nCon paréntesis: (a + b) * c =", resultado2);
console.log("Primero suma (10 + 5 = 15), luego multiplica (15 * 2 = 30)");

// Ejemplo con booleanos
const resultado3 = a > 5 && b < 10 || c == 0;
console.log("\nSin paréntesis:", resultado3);

const resultado4 = a > 5 && (b < 10 || c == 0);
console.log("Con paréntesis:", resultado4);