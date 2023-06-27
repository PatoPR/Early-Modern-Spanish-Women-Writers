let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(n) {
  currentSlide += n;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[currentSlide].style.display = "block";
}

changeSlide(0); // Show the first slide by default
