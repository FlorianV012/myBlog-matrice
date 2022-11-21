// fenetre login
let btnLogin = document.getElementsByClassName("login_btn")[0];
let modale = document.getElementsByClassName("modale")[0];

console.log(btnLogin);

btnLogin.addEventListener("click", () => {
  modale.classList.toggle("active");
});

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

