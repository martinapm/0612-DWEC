//9 Operadores de objetos

const persona = {
    nombre: "Martina",
    edad: 22,
    ocupacion: "Estudiante"
};

console.log("Objeto Persona antes del Delete:");
console.log(persona);

delete persona.edad;

console.log("Objeto Persona después del delete:");
console.log(persona);


