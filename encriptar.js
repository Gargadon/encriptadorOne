function encripta(texto) {
  if ((/[^a-z\s]/.test(texto)) || (texto == '')) {
    alertaError();
  }

  const conversiones = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  texto = texto.replace(/[aeiou]/g, (match) => conversiones[match]);
  return texto;
}

function desencripta(texto) {
  if ((/[^a-z\s]/.test(texto)) || (texto == '')) {
    alertaError();
  }

  const conversiones = [
    ["ai", "a"],
    ["enter", "e"],
    ["imes", "i"],
    ["ober", "o"],
    ["ufat", "u"],
  ];

  for (let [buscar, reemplazar] of conversiones) {
    const regex = new RegExp(buscar, "g");
    texto = texto.replace(regex, reemplazar);
  }

  return texto;
}

function encriptaTexto(event) {
  event.preventDefault();
  const texto = document.getElementById("texto").value;
  const resultado = encripta(texto);
  document.getElementById("resultado").textContent = resultado;
  botonCopiar();
}

function desencriptaTexto(event) {
  event.preventDefault();
  const texto = document.getElementById("texto").value;
  const resultado = desencripta(texto);
  document.getElementById("resultado").textContent = resultado;
  botonCopiar();
}

function alertaError() {
  alert("El texto tiene caracteres no permitidos.\n" +
    "Únicamente se pueden introducir letras minúsculas.\n" +
    "No se permiten letras acentuadas, maýusculas, números u otros caracteres.");
  die();
}

function botonCopiar() {
  const boton = document.getElementById("botonCopiar");
  boton.style.display = "block";
}

function copiar() {
  const resultado = document.getElementById("resultado").textContent;
  navigator.clipboard.writeText(resultado);
}
