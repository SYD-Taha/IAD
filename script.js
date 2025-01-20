document.addEventListener('DOMContentLoaded', () => {
  const dotsContainer = document.getElementById('dots');
  const moodButtons = document.querySelectorAll('.mood-btn');

  // Load existing dots from local storage
  const savedDots = JSON.parse(localStorage.getItem('dots')) || [];
  savedDots.forEach((dot) => addDot(dot.color));

  moodButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const mood = button.getAttribute('data-mood');
      let color;

      // Assign colors based on mood
      if (mood === 'happy') color = '#ffd700';
      if (mood === 'neutral') color = '#808080';
      if (mood === 'sad') color = '#1e90ff';

      // Add the dot and save it
      addDot(color);
      savedDots.push({ color });
      localStorage.setItem('dots', JSON.stringify(savedDots));
    });
  });

  function addDot(color) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.backgroundColor = color;
    dotsContainer.appendChild(dot);
  }
});
