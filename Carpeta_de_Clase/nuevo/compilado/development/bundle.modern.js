/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./fuente/js/index.js":
/*!****************************!*\
  !*** ./fuente/js/index.js ***!
  \****************************/
/***/ (() => {

eval("class Persona{\r\n    constructor(nombre,edad){\r\n        this.nombre=nombre;\r\n        this.edad=edad;\r\n    }\r\n\r\n    saludar(){\r\n        console.log(`yo ${this.nombre} te saludo`);\r\n    }\r\n\r\n    async obtenerDatos(){\r\n        const info = await fetch('https://jsonplaceholder.typicode.com/users/1');\r\n        const datos= await info.json();\r\n        return (datos.name);\r\n    }\r\n}\r\n\r\nconst miPersona = new Persona(\"procopio\",25);\r\nconst {nombre,edad}=persona;\r\n\r\nconst saludoFlecha=()=>{\r\n    console.log(`Soy ${nombre} y te saludo`);\r\n}\r\n\r\nconsole.log(persona.saludo);\r\nconsole.log(saludoFlecha());\r\npersona.obtenerDatos().then(info=>console.log(\"información que me ha devuelto la API\",info));\r\n\r\n\n\n//# sourceURL=webpack://nuevo/./fuente/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./fuente/js/index.js"]();
/******/ 	
/******/ })()
;