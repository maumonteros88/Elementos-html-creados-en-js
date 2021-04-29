document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("agregar");
  const texto = document.getElementById("texto");
  const url = document.getElementById("url");
  const divGrande = document.getElementById("div-grande");
  const imagenGrande = document.getElementById("imagenGrande");
  const btnCerrar = document.getElementById("btn-cerrar");

  boton.addEventListener("click", () => {
    if (texto.value === "" || url.value === "") {
      alert("Debe ingresar ambos campos");
    } else {
      const div = document.createElement("div");
      div.classList.add("caja");

      const p = document.createElement("p");
      p.textContent = texto.value;

      const imagen = document.createElement("img");
      imagen.src = url.value;
      imagen.classList.add("imagen");
      imagen.addEventListener("click", function () {
        imagenGrande.src = imagen.src;
        divGrande.classList.add("open");
        btnCerrar.addEventListener("click", cerrarImagen);
      });

      div.appendChild(imagen);
      div.appendChild(p);
      document.getElementById("container").appendChild(div);
      texto.value = "";
      url.value = "";
    }
  });

  function cerrarImagen() {
    if (btnCerrar) {
      imagenGrande.src = "";
      divGrande.classList.remove("open");
    }
  }
});
