

// Optionally, you can add manual controls with the left and right arrows
const rightArrow = document.getElementById('right');
const leftArrow = document.getElementById('left');

rightArrow.addEventListener('click', () => {
  clearInterval(autoScrollX);
  carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
  resetAutoScroll();
});

leftArrow.addEventListener('click', () => {
  clearInterval(autoScrollX);
  carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  resetAutoScroll();
});

function resetAutoScroll() {
  autoScrollX = setInterval(() => {
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    scrollAmountX += cardWidth;

    if (scrollAmountX >= carousel.scrollWidth - carousel.offsetWidth) {
      carousel.scrollTo({ left: cardWidth, behavior: 'instant' });
      scrollAmountX = cardWidth;
    }
  }, 2000);
}

