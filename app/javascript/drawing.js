
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('drawing-canvas');
  const context = canvas.getContext('2d');
  let isDrawing = false;
  let penColor = '#FF0000';
  let tool = 'pen';
  let lastX, lastY;
  let startX, startY;

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  document.getElementById('element-color').addEventListener('change', updatePenColor);
  document.getElementById('pen').addEventListener('click', () => tool = 'pen');
  document.getElementById('erase').addEventListener('click', () => tool = 'erase');
  document.getElementById('rectangle').addEventListener('click', () => tool = 'rectangle');
  document.getElementById('circle').addEventListener('click', () => tool = 'circle');
  document.getElementById('clear').addEventListener('click', clearCanvas);
  document.getElementById('export').addEventListener('click', exportToJPEG);

  function startDrawing(event) {
    isDrawing = true;
    startX = event.offsetX;
    startY = event.offsetY;
    if (tool === 'pen' || tool === 'erase') {
      [lastX, lastY] = [event.offsetX, event.offsetY];
    }
  }

  function draw(event) {
    if (!isDrawing) return;
    const x = event.offsetX;
    const y = event.offsetY;
    if (tool === 'pen' || tool === 'erase') {
      context.lineWidth = 5;
      context.strokeStyle = tool === 'erase' ? '#FFFFFF' : penColor;
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(x, y);
      context.stroke();
      lastX = x;
      lastY = y;
    } else if (tool === 'rectangle' || tool === 'circle') {
      context.fillStyle = penColor;
      if (tool === 'rectangle') {
        context.fillRect(startX, startY, x - startX, y - startY);
      } else if (tool === 'circle') {
        const radius = Math.sqrt(Math.pow(x - startX, 2) + Math.pow(y - startY, 2));
        context.beginPath();
        context.arc(startX, startY, radius, 0, 2 * Math.PI);
        context.fill();
      }
    }
  }

  function stopDrawing() {
    isDrawing = false;
  }

  function updatePenColor(event) {
    penColor = event.target.value;
  }

  function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function exportToJPEG() {
    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;
  
    const exportContext = exportCanvas.getContext('2d');
    exportContext.fillStyle = '#FFFFFF';
    exportContext.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
    exportContext.drawImage(canvas, 0, 0);
    const dataURL = exportCanvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'drawing.jpg';
    link.click();
  }  
  
});
