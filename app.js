let cartes = document.getElementsByClassName("cours_dispo_carte");

Array.from(cartes).forEach((carte) => {
  carte.addEventListener("click", () => {
    carte.classList.toggle("selected");
  });
});

document.title = "blop";
