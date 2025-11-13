// 🧩 Conversión de notación polaca (prefija) a infija
const polacaAInfix = (tokens) => {
  const stack = [];
  const operadores = ["+", "-", "*", "/"];

  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];
    if (!operadores.includes(token)) {
      stack.push(token);
    } else {
      const [op1, op2] = [stack.pop(), stack.pop()];
      stack.push(`(${op1} ${token} ${op2})`);
    }
  }
  return stack[0];
};

// ⚙️ Evaluar notación polaca
const evaluarPolaca = (tokens) => {
  const stack = [];
  const operadores = ["+", "-", "*", "/"];

  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];
    if (!operadores.includes(token)) {
      stack.push(parseFloat(token));
    } else {
      const [a, b] = [stack.pop(), stack.pop()];
      const resultado =
        token === "+" ? a + b :
        token === "-" ? a - b :
        token === "*" ? a * b :
        token === "/" ? a / b : 0;
      stack.push(resultado);
    }
  }
  return stack.pop();
};

// 🎯 Elementos del DOM
const inputExpresion = document.getElementById("inputExpresion");
const expresionNormal = document.getElementById("expresionNormal");
const resultado = document.getElementById("resultado");
const btnGuardar = document.getElementById("btnGuardar");
const btnLimpiar = document.getElementById("btnLimpiar");
const historialDiv = document.getElementById("historial");

let historial = [];

// 🕹️ Función para mostrar resultados
const actualizarVista = () => {
  const tokens = inputExpresion.value.trim().split(" ");
  if (tokens.length > 1) {
    try {
      expresionNormal.textContent = polacaAInfix(tokens);
      resultado.textContent = evaluarPolaca(tokens);
    } catch {
      expresionNormal.textContent = "Expresión inválida";
      resultado.textContent = "---";
    }
  } else {
    expresionNormal.textContent = "---";
    resultado.textContent = "---";
  }
};

// 📦 Renderizar historial
const renderHistorial = () => {
  historialDiv.innerHTML = historial
    .map(
      (item, i) =>
        `<p class="history-item">${i + 1}. ${item.polaca} → ${item.normal} = ${item.res}</p>`
    )
    .join("");
};

// 💾 Guardar operación
const guardarOperacion = () => {
  if (resultado.textContent !== "---" && inputExpresion.value.trim() !== "") {
    historial.push({
      polaca: inputExpresion.value.trim(),
      normal: expresionNormal.textContent,
      res: resultado.textContent,
    });
    renderHistorial();
    limpiarCampos();
  }
};

// 🧹 Limpiar campos
const limpiarCampos = () => {
  inputExpresion.value = "";
  expresionNormal.textContent = "---";
  resultado.textContent = "---";
};

// 🧠 Eventos
inputExpresion.addEventListener("keyup", actualizarVista);   
inputExpresion.addEventListener("change", actualizarVista);   
btnGuardar.addEventListener("click", guardarOperacion);
btnLimpiar.addEventListener("click", limpiarCampos);
