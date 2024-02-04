let scaleFactor = 1; // Initial scale factor

document.addEventListener('DOMContentLoaded', () => {
  // Initial resize to fit the window
  resizeRectangles();

  // Resize on window resize
  window.addEventListener('resize', resizeRectangles);

  // Adjust sizes on scroll
  window.addEventListener('wheel', handleScroll, {passive: false});
});

function resizeRectangles() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  // Base size calculation
  const baseWidth = window.innerWidth * 0.1; // 10% of window width
  const baseHeight = baseWidth / aspectRatio; // Adjusted based on aspect ratio

  document.querySelectorAll('.rectangle').forEach((rect, index) => {
    // Adjust size based on index and scale factor to maintain aspect ratio
    const factor = 1 + index * 0.5; // Modify this as needed
    const width = baseWidth * factor * scaleFactor;
    const height = baseHeight * factor * scaleFactor;
    rect.style.width = `${width}px`;
    rect.style.height = `${height}px`;
  });
}

function handleScroll(event) {
  event.preventDefault(); // Prevent default scrolling

  // Adjust the scale factor based on scroll direction
  const direction = event.deltaY > 0 ? 1 : -1;
  scaleFactor += direction * 0.005; // Control the sensitivity
  scaleFactor = Math.max(0.1, scaleFactor); // Prevent too small

  resizeRectangles(); // Recalculate sizes with the new scale factor
}
