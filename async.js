function cargarContenidoApple() {
  console.log("Cargando contenido de Apple...");

  setTimeout(async () => {
    try {
      const response = await fetch("https://www.apple.com/iphone/");
      const html = await response.text();

      console.log(
        "\nContenido cargado desde Apple (primeros 500 caracteres):\n",
      );
      console.log(html.slice(0, 500));
    } catch (error) {
      console.error("Error al cargar el contenido:", error);
    }
  }, 2000);
}

cargarContenidoApple();
