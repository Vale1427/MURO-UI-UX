function search() {
  // Obtener el valor ingresado en el campo de búsqueda
  var searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Obtener todos los elementos en los que se realizará la búsqueda (pueden ser específicos)
  var searchElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

  // Limpiar resultados anteriores
  document.getElementById("searchResults").innerHTML = "";

  // Realizar la búsqueda y mostrar los resultados
  searchElements.forEach(function (element) {
    var content = element.textContent.toLowerCase();
    if (content.includes(searchTerm)) {
      var resultItem = document.createElement("div");
      resultItem.textContent = content;
      document.getElementById("searchResults").appendChild(resultItem);
    }
  });
}
