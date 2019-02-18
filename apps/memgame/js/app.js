/* global document: true window: true */
// Buttons
const startBtn = document.getElementById('startGame');
const aboutBtn = document.getElementById('about');
const gameSection = document.getElementById('game');
const gameGrid = document.getElementById('game-grid');
const body = document.getElementsByTagName('body');

const landing = document.getElementById('landing');
const closeAbout = document.getElementById('closeAboutModal');
const modalAbout = document.getElementById('modal-about');

aboutBtn.addEventListener('click', () => {
  modalAbout.classList.toggle('modal-display');
  modalAbout.classList.add('displayAnim');
});

closeAbout.addEventListener('click', () => {
  modalAbout.classList.remove('displayAnim');
  modalAbout.classList.add('hideAnim');
  setTimeout(() => {
    modalAbout.classList.toggle('modal-display');
    modalAbout.classList.remove('hideAnim');
  }, 900);
});


function startGame() {
  body[0].classList.toggle('bodyChange');
  landing.classList.add('hide');
  gameSection.classList.toggle('hide');
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  images.sort(() => Math.random() - 0.5);
  for (let i = 0; i < 16; i++) {
    const card = document.createElement('div');
    card.classList.add('card', 'correct');
    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', `img/img_${images.pop(1)}.svg`);
    gameGrid.appendChild(card);
    card.appendChild(cardImg);
  }
}

startBtn.addEventListener('click', startGame);
