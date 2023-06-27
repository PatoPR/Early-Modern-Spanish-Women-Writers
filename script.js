// Add these new JavaScript functions at the end of the file

function navigateFeaturedItems(direction) {
  const items = Array.from(document.getElementsByClassName('featured-item'));
  const activeItem = document.querySelector('.featured-item.active');
  let index = items.indexOf(activeItem);
  if (direction === 'prev') {
    index = (index - 1 + items.length) % items.length;
  } else if (direction === 'next') {
    index = (index + 1) % items.length;
  }
  activeItem.classList.remove('active');
  items[index].classList.add('active');
}

document.querySelector('.featured-item-prev').addEventListener('click', () => {
  navigateFeaturedItems('prev');
});

document.querySelector('.featured-item-next').addEventListener('click', () => {
  navigateFeaturedItems('next');
});
