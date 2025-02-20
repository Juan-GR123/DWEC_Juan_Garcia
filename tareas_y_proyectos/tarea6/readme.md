 
 
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


## Como configurar node para que admita tailwindcss y Jquery
- Primero habrá que crear un fichero Package.json con el comando npm init en la terminal
 
- Una vez creado el fichero pasaremos a instalar las dependencias necesarias para su funcionamiento

    - rimraf, parcel, npm-run-all: npm install --save-dev rimraf npm-run-all parcel 

 ### TailwindCSS

 - una vez instaladas las dependencias anteriores nos instalaremos tailwindCSS con el siguiente comando:
    
    - npm install --save-dev tailwindcss @tailwindcss/forms
 
 - Ademas deberemos instalarnos flowbite si queremos utilizar su codigo externo. Para ello utilizaremos el siguiente comando:

    - npm install flowbite

 - Cuando ya hayamos instalado todas las dependencias necesarias crearemos el fichero tailwind.config.js

    - El archivo tailwind.config.js es el archivo de configuración de TailwindCSS. Sirve para personalizar y extender la configuración predeterminada de Tailwind según las necesidades del proyecto. Se genera automáticamente al ejecutar el comando:

        - npx tailwindcss init

    - Por último, se creará un css llamado principal.css el cual contendrá las directivas de Tailwind, por ejemplo:

        - @tailwind base;
        - @tailwind components;
        - @tailwind utilities;     

 ### Jquery

 - Una vez configurado tailwindcss pasaremos a configurar Jquery. Primero se instalara su paquete en package.json con el comando "npm install jquery"

 - Cuando queramos utilizar jquery en un archivo js deberemos poner la siguiente linea de código:
    - import $, { event } from 'jquery'; //referencia a todos los elementos de jquery

 - Esta linea nos permitirá importar la biblioteca jQuery en un entorno modular como Node.js o un proyecto con Webpack   


 ### Configuracion de los scripts 

 - La última parte de la configuración se tratará de configurar los scripts de package.json para poder ejecutar correctamente tailwindcss y jquery estos script serán los siguientes:
    
    - tailwindcss -i ./fuente/estilos/principal.css -o ./fuente/estilos/salida.css --watch

- vigilar = Compila el archivo principal.css de Tailwind a salida.css y observa cambios en tiempo real.

    - tailwindcss -i ./fuente/estilos/principal.css -o ./fuente/estilos/salida.css
 
-  compilar = Compila principal.css a salida.css solo una vez, sin vigilancia continua.

    - parcel serve fuente/jquery.html --dist-dir compilado/desarrollo

- parcel:des= Inicia un servidor de desarrollo para jquery.html con recarga en vivo.

    - parcel build fuente/jquery.html --dist-dir compilado/desarrollo

- parcel:prod=  Genera una versión optimizada para producción de jquery.html con archivos minificados.

    - run-s limpia parcel:prod

- prod= Elimina archivos previos y genera la versión de producción.

    - rimraf compilado .parcel-cache

- limpia= Borra las carpetas compilado y .parcel-cache para una compilación limpia.

    - run-s limpia parcel:des

- des= Limpia y ejecuta el servidor de desarrollo.
