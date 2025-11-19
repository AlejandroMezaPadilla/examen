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

eval("{// Obtener elementos\nvar expresionInput = document.getElementById(\"expresion\");\nvar textoInput = document.getElementById(\"texto\");\nvar btnValidar = document.getElementById(\"btnValidar\");\nvar resultado = document.getElementById(\"resultado\");\n\n// Evento\nbtnValidar.addEventListener(\"click\", function () {\n  var exp = expresionInput.value.trim();\n  var txt = textoInput.value.trim();\n  if (!exp || !txt) {\n    resultado.innerHTML = \"<span class=\\\"bad\\\">\\u26A0 Todos los campos son obligatorios.</span>\";\n    return;\n  }\n  var regex;\n\n  // Crear expresión regular dinámica\n  try {\n    regex = new RegExp(exp, \"g\");\n  } catch (error) {\n    resultado.innerHTML = \"<span class=\\\"bad\\\">\\u274C Expresi\\xF3n regular inv\\xE1lida.</span>\";\n    return;\n  }\n\n  // Validar coincidencias\n  var matches = txt.match(regex);\n  if (matches) {\n    resultado.innerHTML = \"\\n            <span class=\\\"ok\\\">\\u2714 Coincidencias encontradas:</span><br>\\n            \".concat(matches.join(\", \"), \"\\n        \");\n  } else {\n    resultado.innerHTML = \"<span class=\\\"bad\\\">\\u2716 No se encontraron coincidencias.</span>\";\n  }\n});\n\n//# sourceURL=webpack://unidad1/./src/index.js?\n}");

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