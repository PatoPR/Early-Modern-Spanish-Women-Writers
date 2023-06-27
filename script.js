// Featured items carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Function to show the current slide
const showSlide = (index) => {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Show the current slide
  slides[index].style.display = 'block';
};

// Function to navigate to the previous slide
const prevSlide = () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
};

// Function to navigate to the next slide
const nextSlide = () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
};

// Event listeners for navigation buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Automatic sliding every 5 seconds
setInterval(nextSlide, 5000);

