 
 
 # Javascript

# Proyecto de Carga de Tarjetas con JavaScript y API

Este proyecto es una aplicación web sencilla que carga tarjetas dinámicas desde una API utilizando JavaScript o Jquery. Cada tarjeta muestra una imagen, un título y un breve texto. Además, cuenta con un scroll infinito para cargar más contenido automáticamente.

---

## Funcionalidades
- Carga de tarjetas dinámicas desde una API.
- Imágenes aleatorias para cada tarjeta.
- Scroll infinito para cargar más contenido.

---

## Tecnologías Usadas
- HTML5
- Tailwind CSS
- JavaScript 
- Jquery
- API JSONPlaceholder (https://jsonplaceholder.typicode.com)
- API gatos: (https://cataas.com/cat)

## Dependencias y configuración

En el js, la API se define con la variable apiUrl: const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

Si usas otra API o necesitas una clave de autenticación, actualiza el campo apiKey.

## Descripción del código

 ### El flujo de trabajo general es el siguiente:

 - Carga inicial: Al cargar la página, la función loadCards() realiza una solicitud AJAX a la API y genera las tarjetas.

 - Generación de tarjetas: Cada objeto de la API se traduce en una tarjeta con una imagen aleatoria, un título y un breve texto.

 - Scroll infinito: La función checkScroll() detecta cuando el usuario llega al final de la página y carga más tarjetas automáticamente


