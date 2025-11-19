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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("{document.getElementById(\"buscar\").addEventListener(\"click\", function () {\n  var expresion = document.getElementById(\"regex\").value.trim();\n  var texto = document.getElementById(\"texto\").value.trim();\n  var resultado = document.getElementById(\"resultado\");\n  if (!expresion || !texto) {\n    resultado.className = \"resultado bad\";\n    resultado.textContent = \"Debes llenar ambos campos.\";\n    return;\n  }\n  var regex;\n  try {\n    regex = new RegExp(expresion, \"g\");\n  } catch (err) {\n    resultado.className = \"resultado bad\";\n    resultado.textContent = \"La expresión regular no es válida.\";\n    return;\n  }\n  var coincidencias = texto.match(regex);\n  if (coincidencias) {\n    resultado.className = \"resultado ok\";\n    resultado.innerHTML = \"Se encontraron <strong>\".concat(coincidencias.length, \"</strong> coincidencia(s):<br><br>\") + coincidencias.map(function (c) {\n      return \"\\u2022 \".concat(c);\n    }).join(\"<br>\");\n  } else {\n    resultado.className = \"resultado bad\";\n    resultado.textContent = \"No se encontraron coincidencias.\";\n  }\n});\n\n//# sourceURL=webpack://unidad1/./src/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;