// app/javascript/drawing.js
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('drawing-canvas');
  const context = canvas.getContext('2d');
  let isDrawing = false;
  let penColor = '#FF0000';
  let lastX, lastY;

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  document.getElementById('pen-color').addEventListener('change', updatePenColor);

  function startDrawing(event) {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
  }

  function draw(event) {
    if (!isDrawing) return;
    const x = event.offsetX;
    const y = event.offsetY;

    context.strokeStyle = penColor;
    context.lineWidth = 5; 

    if (lastX && lastY) {
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(x, y);
      context.stroke();
    }

    [lastX, lastY] = [x, y];
  }

  function stopDrawing() {
    isDrawing = false;
    lastX = null;
    lastY = null;
  }

  function updatePenColor(event) {
    penColor = event.target.value;
  }
});
