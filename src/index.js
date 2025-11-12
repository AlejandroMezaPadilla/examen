// index.js — Triplos y Cuádruplos mejorado con operaciones numéricas reales

// ====== FUNCIÓN PRINCIPAL ======
const generar = () => {
  const tipo = document.getElementById("tipo").value;
  const operacion = document.getElementById("operacion").value.trim();
  const resultadoEl = document.getElementById("resultado");
  const procesoEl = document.getElementById("proceso");
  const historialEl = document.getElementById("historial");

  if (!operacion) {
    alert("Por favor, escribe una operación válida.");
    return;
  }

  // ---- Variables base (puedes cambiarlas si gustas) ----
  const valores = { a: 5, b: 3, c: 2, d: 4, e: 1, m: 6, n: 3, p: 2, q: 1, x: 4, y: 2, r: 3, z: 0 };

  // ---- Reemplazar letras por valores numéricos ----
  let expresion = operacion;
  for (const [k, v] of Object.entries(valores)) {
    const regex = new RegExp(`\\b${k}\\b`, "g");
    expresion = expresion.replace(regex, v);
  }

  // ---- Separar variable destino ----
  const partes = expresion.split("=");
  let variableDestino = "resultado";
  let expresionEvaluar = expresion;

  if (partes.length === 2) {
    variableDestino = partes[0].trim();
    expresionEvaluar = partes[1].trim();
  }

  // ---- Evaluar resultado real ----
  let valorFinal;
  try {
    valorFinal = eval(expresionEvaluar);
  } catch (error) {
    resultadoEl.textContent = "Error en la operación.";
    procesoEl.textContent = "";
    return;
  }

  // ---- Mostrar resultado ----
  resultadoEl.textContent = `${variableDestino} = ${valorFinal}`;

  // ---- Analizar operación paso a paso ----
  const operadores = expresionEvaluar.match(/[\+\-\*\/]/g) || [];
  const operandos = expresionEvaluar.split(/[\+\-\*\/\(\)]+/).filter(Boolean);

  // ---- Generar proceso (simplificado) ----
  let pasosTriplo = "=== PROCESO DE TRIPLOS ===\n";
  let pasosCuadruplo = "=== PROCESO DE CUÁDRUPLOS ===\n";

  let temporales = [];
  let tCount = 1;

  // Ejemplo: procesa * y / primero, luego + y -
  const prioridad = ['*', '/', '+', '-'];
  let expresionTemp = expresionEvaluar;

  prioridad.forEach(op => {
    let regex = new RegExp(`(\\d+(?:\\.\\d+)?)(\\${op})(\\d+(?:\\.\\d+)?)`);
    while (regex.test(expresionTemp)) {
      expresionTemp = expresionTemp.replace(regex, (match, izq, operador, der) => {
        const temp = `t${tCount++}`;
        temporales.push({ operador, izq, der, temp });
        return temp;
      });
    }
  });

  // Generar pasos de triplos
  temporales.forEach((t, i) => {
    pasosTriplo += `(${i + 1}) (${t.operador}, ${t.izq}, ${t.der})\n`;
  });
  pasosTriplo += `(${temporales.length + 1}) (=, ${temporales.at(-1)?.temp || expresionEvaluar}, ${variableDestino})\n`;

  // Generar pasos de cuádruplos
  temporales.forEach((t, i) => {
    pasosCuadruplo += `(${i + 1}) (${t.operador}, ${t.izq}, ${t.der}, ${t.temp})\n`;
  });
  pasosCuadruplo += `(${temporales.length + 1}) (=, ${temporales.at(-1)?.temp || expresionEvaluar}, —, ${variableDestino})\n`;

  // ---- Mostrar proceso según selección ----
  let procesoTexto = "";
  if (tipo === "triplo") procesoTexto = pasosTriplo;
  else if (tipo === "cuadruplo") procesoTexto = pasosCuadruplo;
  else procesoTexto = `${pasosTriplo}\n${pasosCuadruplo}`;

  procesoEl.textContent = procesoTexto;

  // ---- Agregar al historial ----
  const li = document.createElement("li");
  li.textContent = `${operacion} = ${valorFinal}`;
  historialEl.appendChild(li);
};

// ====== LIMPIAR CAMPOS (sin borrar historial) ======
const limpiar = () => {
  document.getElementById("operacion").value = "";
  document.getElementById("resultado").textContent = "";
  document.getElementById("proceso").textContent = "";
};

// ====== EVENTOS ======
document.getElementById("generar").addEventListener("click", generar);
document.getElementById("limpiar").addEventListener("click", limpiar);
