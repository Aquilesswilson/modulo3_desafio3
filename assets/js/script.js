
// Cambiar color de divs al hacer clic (3.2)
const ids = ["azul", "rojo", "verde", "amarillo"];
ids.forEach(id => {
  const div = document.getElementById(id);
  div.addEventListener("click", function () {
    div.style.backgroundColor = "black";
  });
});

// Cambiar color del div #key al presionar teclas a, s, d (3.3)
document.addEventListener("keydown", function (event) {
  const keyDiv = document.getElementById("key");

  if (!keyDiv) return;
  switch (event.key) {
    case "a":
      keyDiv.style.backgroundColor = "pink";
      break;
    case "s":
      keyDiv.style.backgroundColor = "orange";
      break;
    case "d":
      keyDiv.style.backgroundColor = "skyblue";
      break;
    case "q":
      crearDiv("purple");
      break;
    case "w":
      crearDiv("gray");
      break;
    case "e":
      crearDiv("brown");
      break;
  }
});

// Función para crear un div nuevo con color (3.4)
function crearDiv(color) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.style.width = "200px";
  nuevoDiv.style.height = "200px";
  nuevoDiv.style.backgroundColor = color;
  nuevoDiv.style.border = "1px solid black";
  nuevoDiv.style.margin = "10px";
  document.body.appendChild(nuevoDiv);
}

// Lógica de pintar con parámetro (puntos anteriores)
function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
if (ele) {
  ele.addEventListener("click", function (event) {
    pintar(event.target, "yellow");
  });
}
