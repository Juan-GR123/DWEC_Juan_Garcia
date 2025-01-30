# Tarea 4.5
  ## Descripción
  
  Este proyecto explicará los pasos que hay que seguir para que un código js funcione correctamente en navegadores antiguos 

  ## Pasos
  
  ### Paso1: Instalar node y empezar el proyecto
  npm init -y

  ### Paso2: Instalar webpack, babel y core-js
  npm install --save-dev webpack webpack-cli webpack-merge @babel/core @babel/preset-env babel-loader core-js regenerator-runtim

  - webpack: un agrupador de módulos que le permite agrupar y minimizar sus archivos JavaScript.
  - webpack-cli: le permite ejecutar Webpack desde la línea de comandos.
  - webpack-merge: permite combinar configuraciones de Webpack para crear diferentes configuraciones (modernas/antiguas).
  - @babel/core y @babel/preset-env: configura babel para transpilar código moderno.
  - babel-loader: carga babel en webpack para transpilarlo.
  - core-js: una biblioteca que proporciona polyfills para nuevas funciones de JavaScript.
  - regenerator-runtime: proporciona polyfills para funciones async/await.

  ### Paso3: Configura Babel para especificar a qué navegadores quieres realizar la transpilación y qué características quieres rellenar en el siguiente fichero
  - babel.config.js

  ### Paso4: Configura webpack creando los siguientes ficheros:

  - webpack.common.js: contiene la configuración común para navegadores modernos y antiguos.

  - webpack.modern.js: contiene la configuración para navegadores modernos.

  - webpack.legacy.js: contiene la configuración para navegadores antiguos.

  ### Paso5: Instala plugins para que el index.html y el css se generen automáticamente al correr los scripts

  - Instale html-webpack-plugin, inclúyalo y configúrelo en webpack.common.js 
  - Instale css-loader, mini-css-extract-plugin, inclúyalos y configúrelos en webpack.common.js

  ### Paso6: Crea los scrips necesarios en package.json para crear los ficheros necesarios
  
  #### Desarrollo: este modo genera una salida más grande y más legible

  #### Producción: este modo genera una salida minimizada y optimizada. 

  ##### Scripts que se han utilizado:
    - "documenta": "npx jsdoc -c jsdoc.json",
    - "limpia": "rimraf documentacion",
    - "todo": "npm-run-all limpia documenta",
    - "compilar:antiguo": "webpack --config webpack.legacy.js --mode %variable%",//hace que el código sirva para navegadores antiguos
    - "compilar:moderno": "webpack --config webpack.modern.js --mode %variable%",//hace que el código funcione en navegadores modernos
    - "des": "cross-env variable=development run-s compilar:antiguo compilar:moderno",
    - "prod": "cross-env variable=production run-s compilar:antiguo compilar:moderno",
    //"des" y "prod": llaman a las dos variables anteriores
    - "limpia2": "rimraf compilado",
    - "todo2": "run-s limpia2 des"

  ## Una vez realizados todos esos pasos y configurados todos los archivos ya se podrán ejecutar los scripts "des" y "prod" y subir los archivos a un servidor donde probarlos. 
    

