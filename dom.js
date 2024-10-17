// Manipulacion del DOM

const searchButton = document.getElementById(
  "globalnav-menubutton-link-search",
);
const span = document.createElement("span");
span.textContent = "Buscar";
span.style.fontSize = "14px";
span.style.marginLeft = "10px";
span.style.color = "#0071e3";
span.style.fontFamily = "Arial, sans-serif";
span.style.cursor = "pointer";
searchButton.parentNode.insertBefore(span, searchButton.nextSibling);
