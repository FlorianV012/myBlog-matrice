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
