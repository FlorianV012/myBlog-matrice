// Page Cours

let cartes = document.getElementsByClassName("cours_dispo_carte");
let cartesSelected = document.getElementsByClassName("selected");
let nbCartesSelected = document.getElementById("cours_selected");

Array.from(cartes).forEach((carte) => {
  carte.addEventListener("click", () => {
    carte.classList.toggle("selected");

    nbCartesSelected.innerHTML = `<p class="cours_selected">Nombre de cours sélectionnés : ${
      Array.from(cartesSelected).length
    }</p>
    <p class="cours_selected">Supprimer la sélection 🗑</p> `;

    nbCartesSelected.lastElementChild.addEventListener("click", () => {
      Array.from(cartes).forEach((carte) => {
        carte.classList.remove("selected");
      });

      nbCartesSelected.innerHTML = ``;
    });
  });
});

// Slider

let arriere = document.getElementsByClassName("gauche");
let avant = document.getElementsByClassName("droit");
let images = document.getElementsByClassName("slider_img");

let imageActive = 0;

arriere[0].addEventListener("click", () => {
  if (imageActive <= 0) {
    images[imageActive].classList.remove("active");
    imageActive = images.length - 1;
    images[imageActive].classList.add("active");
  } else {
    images[imageActive].classList.remove("active");
    imageActive--;
    images[imageActive].classList.add("active");
  }
});

avant[0].addEventListener("click", () => {
  if (imageActive >= images.length - 1) {
    images[imageActive].classList.remove("active");
    imageActive = 0;
    images[imageActive].classList.add("active");
  } else {
    images[imageActive].classList.remove("active");
    imageActive++;
    images[imageActive].classList.add("active");
  }
});
