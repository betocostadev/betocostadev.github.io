/* eslint-disable */
/* Javascript Paint */
(function () {
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  const boardWidth = window.innerWidth;
  const boardHeight = window.innerHeight;
  let newBoardWidth = boardWidth * 0.5;
  let newBoardHeight = boardHeight * 0.5;
  canvas.width = newBoardWidth;
  canvas.height = newBoardHeight;

  ctx.lineJoin = 'round'; // Try turning off to see the difference
  ctx.lineCap = 'round'; // Try turning off to see the difference
  ctx.lineWidth = 1;

  /* INC/DEC Line Width */
  const increaseLW = document.getElementById('increaseLineWidth');
  const decreaseLW = document.getElementById('decreaseLineWidth');

  increaseLW.addEventListener('click', function increaseLineW() {
  ctx.lineWidth += 2;
  });
  decreaseLW.addEventListener('click', function decreaseLineW() {
  ctx.lineWidth -= 2;
  });


  let isDrawing = false; // To avoid drawing when you let go of the click
  let lastX = 0;
  let lastY = 0;
  function draw(e) {
    if (!isDrawing) return; // Stop the FN from running when mouse is not down
    // Get the color from user:
    let strokeColor = document.getElementById('strokeColor').value;
    ctx.strokeStyle = strokeColor;
    // Begin the Drawing:
    ctx.beginPath();
    // Start from
    ctx.moveTo(lastX, lastY);
    // Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // console.log(e);
    // Update the last position of the mouse
    /* // Normal way to update
    lastX = e.offsetX;
    lastY = e.offsetY; */
    // ES6 Way to do the samething (Destructuring an array):
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
  // Avoid the canvas to draw from where you stopped.
  // It needs to update the new position and don't start the drawing from the previous location.
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

  // Touch Events - Based on http://bencentra.com/code/2014/12/05/html5-canvas-touch-events.html
  // Set up touch events for mobile, etc
  canvas.addEventListener("touchstart", function (e) {
      mousePos = getTouchPos(canvas, e);
    let touch = e.touches[0];
    let mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
  }, false);
  canvas.addEventListener("touchend", function (e) {
  let mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
  }, false);
  canvas.addEventListener("touchmove", function (e) {
  let touch = e.touches[0];
  let mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
    });
  canvas.dispatchEvent(mouseEvent);
  }, false);
  // Get touch canvas position
  function getTouchPos(canvasDom, touchEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top
    };
  }
  // Prevent scrolling when touching the canvas
  canvas.addEventListener("touchstart", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  canvas.addEventListener("touchend", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  canvas.addEventListener("touchmove", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
})();