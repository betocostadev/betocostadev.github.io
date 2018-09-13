/* eslint-disable */
/* Javascript Paint */
(function () {
  console.log('Im Working!');
  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  const boardWidth = window.innerWidth;
  const boardHeight = window.innerHeight;
  let newBoardWidth = boardWidth * 0.6;
  let newBoardHeight = boardHeight * 0.6;
  canvas.width = newBoardWidth;
  canvas.height = newBoardHeight;
  /* Find a way to make the user be able to select the color! */
  // let strokeColor = toString(document.getElementById('strokeColor').value);
  ctx.strokeStyle = '#bada55';
  ctx.lineJoin = 'round'; // Try turning off to see the difference
  ctx.lineCap = 'round'; // Try turning off to see the difference
  ctx.lineWidth = 10;

  /* TESTING! */
  const increase = document.getElementById('increaseLineWidth').value;
  const decrease = document.getElementById('decreaseLineWidth').value;

  increaseLineWidth.addEventListener('click', function increaseLineW() {
  ctx.lineWidth += 10;
  });
  decreaseLineWidth.addEventListener('click', function decreaseLineW() {
  ctx.lineWidth -= 10;
  });


  function decreaseLineWD() {
    ctx.lineWidth -= 10;
  }

  let isDrawing = false; // To avoid drawing when you let go of the click
  let lastX = 0;
  let lastY = 0;
  function draw(e) {
    if (!isDrawing) return; // Stop the FN from running when mouse is not down
    // Begin the Drawing:
    ctx.beginPath();
    // Start from
    ctx.moveTo(lastX, lastY);
    // Go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    console.log(e);
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
})();