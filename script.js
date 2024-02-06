let scaleFactor = 1; // Initial scale factor

document.addEventListener('DOMContentLoaded', () => {
  // Initial resize to fit the window
  resizeRectangles();

  // Resize on window resize
  window.addEventListener('resize', resizeRectangles);

  // Adjust sizes on scroll
  window.addEventListener('scroll', handleScroll); // Changed from 'wheel' to 'scroll'
});

function resizeRectangles() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const baseWidth = window.innerWidth * 0.1; 
  const baseHeight = baseWidth / aspectRatio; 

  document.querySelectorAll('.rectangle').forEach((rect, index) => {
    const factor = 1 + index * 0.5;
    const width = baseWidth * factor * scaleFactor;
    const height = baseHeight * factor * scaleFactor;
    rect.style.width = `${width}px`;
    rect.style.height = `${height}px`;
  });
}

function handleScroll() {
  // Calculate new scale factor based on scroll position
  // This is a simple example; you may need a more complex calculation
  scaleFactor = 1 + window.scrollY / 50;

  resizeRectangles(); // Recalculate sizes with the new scale factor
}
