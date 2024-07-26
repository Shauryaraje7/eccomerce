// Get all the cards
const cards = document.querySelectorAll('.card');

// Add event listener to next buttons
cards.forEach(card => {
  const nextButton = card.querySelector('.nextt');
  const prevButton = card.querySelector('.prevv');
  const images = card.querySelectorAll('.image');
  let currentIndex = 0;

  nextButton.addEventListener('click', () => {
    // Increment the current index
    currentIndex = (currentIndex + 1) % images.length;
    // Update the display property of the img elements
    images.forEach((image, index) => {
      if (index === currentIndex) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });

  prevButton.addEventListener('click', () => {
    // Decrement the current index
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    // Update the display property of the img elements
    images.forEach((image, index) => {
      if (index === currentIndex) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});