function Libro (titulo, autor, numPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }


// Array de objetos Libro con datos
let libros = [
    new Libro ("Harry Potter", "J.K. Rowling", 500),
    new Libro ("El Hobbit", "J.R.R. Tolkien", 300),
    new Libro ("1984", "George Orwell", 400)
];

/**
 * Función que filtra los libros que tienen más de 300 páginas
 * @param {Array} lista - Array de objetos Libro a filtrar
 * @returns {Array} - Array con los libros que cumplen la condición
 */
function libroMasPaginas(lista) {
    // Utiliza el método filter para crear un nuevo array con los libros que tienen más de 300 páginas
    return lista.filter(libro => libro.numPaginas > 300);
}

// Mostrar en consola los libros que tienen más de 300 páginas
console.log(libroMasPaginas(libros));
