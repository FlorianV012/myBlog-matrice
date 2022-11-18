let cartes = document.getElementsByClassName("cours_dispo_carte");
let cartesSelected= document.getElementsByClassName("selected");

Array.from(cartes).forEach((carte) => {
  carte.addEventListener("click", () => {
    carte.classList.toggle("selected");

    console.log(Array.from(cartesSelected).length);
    
  });
});



