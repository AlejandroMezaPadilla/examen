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

eval("{var polacaAInfix = function polacaAInfix(tokens) {\n  var stack = [];\n  var operadores = [\"+\", \"-\", \"*\", \"/\"];\n  for (var i = tokens.length - 1; i >= 0; i--) {\n    var token = tokens[i];\n    if (!operadores.includes(token)) {\n      stack.push(token);\n    } else {\n      var _ref = [stack.pop(), stack.pop()],\n        op1 = _ref[0],\n        op2 = _ref[1];\n      stack.push(\"(\".concat(op1, \" \").concat(token, \" \").concat(op2, \")\"));\n    }\n  }\n  return stack[0];\n};\nvar evaluarPolaca = function evaluarPolaca(tokens) {\n  var stack = [];\n  var operadores = [\"+\", \"-\", \"*\", \"/\"];\n  for (var i = tokens.length - 1; i >= 0; i--) {\n    var token = tokens[i];\n    if (!operadores.includes(token)) {\n      stack.push(parseFloat(token));\n    } else {\n      var _ref2 = [stack.pop(), stack.pop()],\n        a = _ref2[0],\n        b = _ref2[1];\n      var _resultado = token === \"+\" ? a + b : token === \"-\" ? a - b : token === \"*\" ? a * b : token === \"/\" ? a / b : 0;\n      stack.push(_resultado);\n    }\n  }\n  return stack.pop();\n};\nvar inputExpresion = document.getElementById(\"inputExpresion\");\nvar expresionNormal = document.getElementById(\"expresionNormal\");\nvar resultado = document.getElementById(\"resultado\");\nvar btnGuardar = document.getElementById(\"btnGuardar\");\nvar btnLimpiar = document.getElementById(\"btnLimpiar\");\nvar historialDiv = document.getElementById(\"historial\");\nvar historial = [];\nvar actualizarVista = function actualizarVista() {\n  var tokens = inputExpresion.value.trim().split(\" \");\n  if (tokens.length > 1) {\n    try {\n      expresionNormal.textContent = polacaAInfix(tokens);\n      resultado.textContent = evaluarPolaca(tokens);\n    } catch (_unused) {\n      expresionNormal.textContent = \"Expresión inválida\";\n      resultado.textContent = \"---\";\n    }\n  } else {\n    expresionNormal.textContent = \"---\";\n    resultado.textContent = \"---\";\n  }\n};\nvar renderHistorial = function renderHistorial() {\n  historialDiv.innerHTML = historial.map(function (item, i) {\n    return \"<p class=\\\"history-item\\\">\".concat(i + 1, \". \").concat(item.polaca, \" \\u2192 \").concat(item.normal, \" = \").concat(item.res, \"</p>\");\n  }).join(\"\");\n};\nvar guardarOperacion = function guardarOperacion() {\n  if (resultado.textContent !== \"---\" && inputExpresion.value.trim() !== \"\") {\n    historial.push({\n      polaca: inputExpresion.value.trim(),\n      normal: expresionNormal.textContent,\n      res: resultado.textContent\n    });\n    renderHistorial();\n    limpiarCampos();\n  }\n};\nvar limpiarCampos = function limpiarCampos() {\n  inputExpresion.value = \"\";\n  expresionNormal.textContent = \"---\";\n  resultado.textContent = \"---\";\n};\ninputExpresion.addEventListener(\"keyup\", actualizarVista);\ninputExpresion.addEventListener(\"change\", actualizarVista);\nbtnGuardar.addEventListener(\"click\", guardarOperacion);\nbtnLimpiar.addEventListener(\"click\", limpiarCampos);\n\n//# sourceURL=webpack://unidad1/./src/index.js?\n}");

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