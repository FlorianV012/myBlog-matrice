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
