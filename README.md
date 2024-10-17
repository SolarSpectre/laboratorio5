## Ejercicios de Manipulación del DOM y Asincronismo con la Página de Apple

¡Bienvenido al repositorio de Ejercicios de Manipulación del DOM y Asincronismo! Este proyecto incluye una colección de ejercicios diseñados para practicar técnicas de JavaScript enfocadas en la manipulación del Modelo de Objetos del Documento (DOM) y la implementación de operaciones asincrónicas, utilizando elementos y estructuras presentes en la página de Apple.

# 📚 Descripción de los Ejercicios

En este repositorio encontrarás diversos ejercicios que exploran aspectos importantes del JavaScript moderno. Los temas cubiertos incluyen:

    Manipulación del DOM: Aprende a interactuar con el DOM seleccionando, modificando y creando elementos HTML de manera dinámica.
    Manejo de Eventos: Implementa eventos para hacer las páginas interactivas (como clics, envíos de formularios, entre otros).
    JavaScript Asincrónico: Usa setTimeout, setInterval y promesas con fetch para realizar solicitudes asincrónicas y controlar el flujo de ejecución.

Cada ejercicio se basa en funcionalidades comunes de la página de Apple, como menús de navegación, galerías de productos e interacciones de búsqueda.

# 🚀 Comenzando

Requisitos Previos

Para comenzar con los ejercicios, asegúrate de tener lo siguiente instalado:

    Node.js (opcional, para servir archivos o ejecutar herramientas si es necesario)
    Un navegador web moderno (preferentemente Chrome o Firefox)
    Un editor de texto o IDE (como VS Code)

# ✨ Ejemplos de Ejercicios

1. Manipular el Botón de Búsqueda

   Tarea: Añadir un elemento span al lado del botón de búsqueda (#globalnav-menubutton-link-search) que muestre el texto "Buscar".
   Habilidades Practicadas: Manipulación del DOM, creación de elementos y su inserción dinámica.
   Código de Ejemplo:

   javascript

   const searchButton = document.getElementById('globalnav-menubutton-link-search');
   const span = document.createElement('span');
   span.textContent = 'Buscar';
   searchButton.parentNode.insertBefore(span, searchButton.nextSibling);
