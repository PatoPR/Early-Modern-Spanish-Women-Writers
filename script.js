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

// Automatic sliding every 10 seconds
setInterval(nextSlide, 7000);

function toggleReadMore() {
  const readMore = document.getElementById('read-more');
  const readMoreLink = document.getElementById('read-more-link');

  if (readMore.style.display === 'none') {
    readMore.style.display = 'inline';
    readMoreLink.textContent = 'Read Less';
  } else {
    readMore.style.display = 'none';
    readMoreLink.textContent = 'Read More';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var popupLinks = document.querySelectorAll('.popup-link');
  var popupCloseButtons = document.querySelectorAll('.popup-close');

  popupLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var popupId = this.getAttribute('href');
      var popup = document.querySelector(popupId);

      popup.style.display = 'block';
    });
  });

  popupCloseButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var popup = this.closest('.popup');
      popup.style.display = 'none';
    });
  });
});
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

