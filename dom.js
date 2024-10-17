// Manipulacion del DOM
// Conseguir un elemento por ID
const searchButton = document.getElementById(
  "globalnav-menubutton-link-search",
);
// Crear elementos con el DOM
const span = document.createElement("span");
// Modificar el contenido
span.textContent = "Buscar";
// Estilos
span.style.fontSize = "14px";
span.style.marginLeft = "10px";
span.style.color = "#0071e3";
span.style.fontFamily = "Arial, sans-serif";
span.style.cursor = "pointer";
// Insertar elementos
searchButton.parentNode.insertBefore(span, searchButton.nextSibling);
//Eliminar elementos
const bagButton = document.getElementById("globalnav-menubutton-link-bag");
bagButton.remove();
// Eventos
span.addEventListener("click", () => {
  alert('Has hecho clic en el span "Buscar"');
});
