const initializeKeyListener = () => {
  // Add event listener for keydown events
  document.addEventListener('keydown', (event) => {
    // Check if the key pressed is the spacebar
    if (event.code === 'Space') {
      // Prevent the default action of the spacebar (scrolling down)
      event.preventDefault();

      // Start the game
      startGame();
    }
  });
};
