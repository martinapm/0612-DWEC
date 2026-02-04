// Clase que representa a un estudiante con sus propiedades básicas
class Estudiante {
    constructor(nombre, edad, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }
}

/**
 * Función que ordena estudiantes primero por promedio (ascendente) y luego por edad (ascendente)
 * @param {Array} listaEstudiantes - Array de objetos Estudiante a ordenar
 * @returns {Array} - Array de estudiantes ordenado
 */
function ordenarEstudiantes(listaEstudiantes) {
    // Utilizar el método sort con una función de comparación personalizada
    return listaEstudiantes.sort((a, b) => {
        // Primero compara por promedio
        // Si los promedios son diferentes, ordena por promedio
        if (a.promedio !== b.promedio) {
            return a.promedio - b.promedio; // Orden ascendente
        }
  
        // Si los promedios son iguales, ordena por edad
        return a.edad - b.edad; // Orden ascendente
    });
}

// Array de estudiantes de ejemplo
let estudiantes = [
    new Estudiante("Juan", 20, 8.5),
    new Estudiante("María", 19, 8.5),
    new Estudiante("Pedro", 21, 7.8),
    new Estudiante("Ana", 20, 8.5),
    new Estudiante("Carlos", 22, 9.2)
];

// Mostrar los estudiantes antes de ordenar
console.log("Estudiantes antes de ordenar:");
estudiantes.forEach(est => {
    console.log(`${est.nombre}, Edad: ${est.edad}, Promedio: ${est.promedio}`);
});

// Ordenar los estudiantes usando la función definida
let estudiantesOrdenados = ordenarEstudiantes(estudiantes);

// Mostrar los estudiantes después de ordenar
console.log("\nEstudiantes después de ordenar:");
estudiantesOrdenados.forEach(est => {
    console.log(`${est.nombre}, Edad: ${est.edad}, Promedio: ${est.promedio}`);
});
