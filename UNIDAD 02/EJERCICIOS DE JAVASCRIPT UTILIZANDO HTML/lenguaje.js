console.log("JavaScript es clave para el frontend porque nos permite crear webs dinámicas y con interacción, que reaccionan cuando el usuario hace algo.");

console.log("Lo bueno de JavaScript:");
console.log("- Funciona directamente en el navegador, sin tener que instalar nada extra.");
console.log("- Funciona en todos los navegadores, así que no hay problema de compatibilidad.");
console.log("- Tiene un montón de librerías y frameworks (como React o Vue) que facilitan el trabajo.");
console.log("- Con un mismo lenguaje puedes programar tanto la parte del cliente como la del servidor (con Node.js).");

console.log("Cómo funciona con el DOM:");
console.log("JavaScript puede manipular el DOM, es decir, puede cambiar el contenido de una página, los estilos, o incluso añadir elementos nuevos al momento, según lo que haga el usuario.");

const fs = require('fs');

const contenido = `
JavaScript es clave para el frontend porque nos permite crear webs dinámicas y con interacción, que reaccionan cuando el usuario hace algo.

Lo bueno de JavaScript:

- Funciona directamente en el navegador, sin tener que instalar nada extra.
- Funciona en todos los navegadores, así que no hay problema de compatibilidad.
- Tiene un montón de librerías y frameworks (como React o Vue) que facilitan el trabajo.
- Con un mismo lenguaje puedes programar tanto la parte del cliente como la del servidor (con Node.js).

Cómo funciona con el DOM:
JavaScript puede manipular el DOM, es decir, puede cambiar el contenido de una página, los estilos, o incluso añadir elementos nuevos al momento, según lo que haga el usuario.
`;

fs.writeFile('resumen.txt', contenido, (err) => {
  if (err) throw err;
  console.log('El archivo resumen.txt ha sido guardado correctamente.');
});
