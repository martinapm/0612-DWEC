function crearPost() {
  let xhr = new XMLHttpRequest();

  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 201) {
      console.log("Respuesta de la API:", JSON.parse(xhr.responseText));
    }
  };

  let datos = {
    title: "Mi nuevo post",
    body: "Contenido del post"
  };

  xhr.send(JSON.stringify(datos));
}

crearPost();
