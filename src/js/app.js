document.addEventListener("DOMContentLoaded", function () {
  crearGaleria();
});

function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  const cantidadImagenes = 16;
  for (let i = 1; i <= cantidadImagenes; i++) {
    const img = document.createElement("IMG");
    img.src = `src/img/galeria/${i}.webp`;
    img.loading = "lazy";
    img.alt = "Imagen de galeria";
    img.addEventListener("click", () => {
      mostrarImg(i);
    });
    galeria.appendChild(img);
  }
}

function mostrarImg(indice) {
  console.log("indice de la img" + indice);

  const galeria = document.querySelector(".galeria");
  const modal = document.createElement("DIV");
  modal.classList.add("modal");

  const img_modal = document.createElement("IMG");
  img_modal.src = `src/img/galeria/${indice}.webp`;
  img_modal.loading = "lazy";
  img_modal.alt = "Imagen de galeria";
  img_modal.classList.add("imgModal");
  modal.appendChild(img_modal);

  const btnModal = document.createElement("P");
  btnModal.textContent = "X";
  btnModal.classList.add("btnModal");
  btnModal.onclick = cerrarModal;
  modal.appendChild(btnModal);

  galeria.appendChild(modal);
}

function cerrarModal() {
  const modal = document.querySelector(".modal");
  modal.remove();
}

function navFijo() {
  const sectionFestival = document.querySelector(".festival");
  const nav = document.querySelector(".header-bg");
  if (sectionFestival.getBoundingClientRect().bottom > 1) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}
