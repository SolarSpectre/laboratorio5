// Manipulacion del DOM

const searchButton = document.getElementById(
  "globalnav-menubutton-link-search",
);
const span = document.createElement("span");
span.textContent = "Buscar";
searchButton.parentNode.insertBefore(span, searchButton.nextSibling);
