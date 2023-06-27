// Add these new JavaScript functions at the end of the file

function navigateFeaturedItems(direction) {
  const items = Array.from(document.getElementsByClassName('featured-item'));
  const activeItem = document.querySelector('.featured-item.active');
  const activeIndex = items.indexOf(activeItem);

  let newIndex;
  if (direction === 'prev') {
    newIndex = (activeIndex - 1 + items.length) % items.length;
  } else if (direction === 'next') {
    newIndex = (activeIndex + 1) % items.length;
  }

  activeItem.classList.remove('active');
  items[newIndex].classList.add('active');
}

function setupFeaturedItemsSlider() {
  const prevBtn = document.querySelector('.featured-item-prev');
  const nextBtn = document.querySelector('.featured-item-next');

  prevBtn.addEventListener('click', () => navigateFeaturedItems('prev'));
  nextBtn.addEventListener('click', () => navigateFeaturedItems('next'));

  setInterval(() => {
    navigateFeaturedItems('next');
  }, 5000);
}

window.addEventListener('DOMContentLoaded', () => {
  setupFeaturedItemsSlider();
});
