/* global document: true window: true */
// Buttons
const startBtn = document.getElementById('startGame');
const aboutBtn = document.getElementById('about');
const closeAbout = document.getElementById('closeAboutModal');
const modalAbout = document.getElementById('modal-about');

aboutBtn.addEventListener('click', () => {
  modalAbout.classList.toggle('modal-display');
});

closeAbout.addEventListener('click', () => {
  modalAbout.classList.toggle('modal-display');
});
