document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector("#agregar");

  boton.addEventListener("click", () => {
    const texto = document.querySelector("#texto");
    const url = document.querySelector("#url");

    if (texto.value === "" || url.value === "") {
      alert("Ambos campos deben ser llenados");
    } else {
      const div = document.createElement("div");
      div.classList.add("caja");

      const p = document.createElement("p");
      p.textContent = texto.value;

      const imagen = document.createElement("img");
      imagen.src = url.value;
      imagen.classList.add("imagen");

      div.appendChild(imagen);
      div.appendChild(p);

      document.querySelector(".container").appendChild(div);

      texto.value = "";
      url.value = "";

      const imagenes = document.querySelectorAll(".imagen");
      for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("click", abrirImagen);
      }
    }
  });

  const divGrande = document.getElementById("div-grande");
  const imagenGrande = document.getElementById("imagenGrande");
  const btnCerrar = document.getElementById("btn-cerrar");

  function abrirImagen(e) {
    const urlImagen = e.target.src;
    imagenGrande.src = urlImagen;

    divGrande.classList.add("open");
    divGrande.addEventListener("click", cerrarImagen);
  }

  function cerrarImagen(e) {
    if (e.target === btnCerrar) {
      divGrande.classList.remove("open");
    }
  }
});
