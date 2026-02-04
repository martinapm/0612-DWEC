function obtenerPostConError() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let respuesta = JSON.parse(xhr.responseText);
        console.log("Título del post:", respuesta.title);
      } else {
        console.error("Error al realizar la petición");
      }
    }
  };

  xhr.send();
}

obtenerPostConError();
