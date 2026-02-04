function actualizarPost() {
  let xhr = new XMLHttpRequest();

  xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Post actualizado:", JSON.parse(xhr.responseText));
    }
  };

  let datosActualizados = {
    title: "Título actualizado"
  };

  xhr.send(JSON.stringify(datosActualizados));
}

actualizarPost();
