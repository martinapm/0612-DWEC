document.addEventListener("DOMContentLoaded", function () {
  console.log("El árbol DOM está completamente cargado y listo para manipularse.");
  console.log(document.body.children);
});

const boton = document.querySelector("button");

boton.addEventListener("click", cambiarContenido);

function cambiarContenido() {
  const h1 = document.createElement("h1");
  h1.textContent = "Encabezado dinámico";

  const hr = document.createElement("hr");

  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = "Párrafo creado dinámicamente";
  div.appendChild(p);

  const body = document.body;
  const boton = document.querySelector("button");

  body.insertBefore(h1, boton);
  body.insertBefore(hr, boton);
  body.insertBefore(div, boton);

  const enlace = document.querySelector("a");
  enlace.href = "https://www.wikipedia.org";
  enlace.textContent = "Ir a Wikipedia";
}