// Obtiene los elementos del DOM
var dropdown = document.querySelector(".dropdown");
var dropdownContent = document.querySelector(".dropdown-content");

// Agrega un evento de clic al botón para mostrar/ocultar el menú desplegable
dropdown.addEventListener("click", function () {
  dropdownContent.classList.toggle("show");
});

// Cierra el menú desplegable si el usuario hace clic fuera de él
window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
});

// Motstrar imagenes de la categoria seleccionada
function mostrarImagenes(categoria) {
  // oculta las imagenes
  var imagenes = document.querySelectorAll(".galeria img");
  imagenes.forEach(function (imagen) {
    imagen.style.display = "none";
  });

  // Muestra las imagenes de la categoria
  var imagenesCategoria = document.querySelectorAll("." + categoria);
  imagenesCategoria.forEach(function (imagen) {
    imagen.style.display = "block";
  });
}

const thumbnails = document.querySelectorAll(".thumbnail");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeButton = document.querySelector(".close");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let currentIndex = 0;

// codigo para mostrar la imagen ampliada cuando se hace clic en la miniatura

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const imageUrl = thumbnail.getAttribute("src");
    lightboxImage.setAttribute("src", imageUrl);
    lightbox.style.display = "flex";
  });
});

// //cerrar la ventana modal o emergente en el boton de cierre
closeButton.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// //cerrar la ventana modal al hacer click fuera de la imagen
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});
