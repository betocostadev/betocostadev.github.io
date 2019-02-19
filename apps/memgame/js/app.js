/* global document: true */

const startBtn = document.getElementById('startGame');
const aboutBtn = document.getElementById('about');
const gameSection = document.getElementById('game');
const gameGrid = document.getElementById('game-grid');
const body = document.getElementsByTagName('body');
const startCounter = document.getElementById('startCounter');
const status = document.getElementById('status');
const movesDisplay = document.getElementById('movesDisplay');
const endMovesDisplay = document.getElementById('totalMoves');
const endMovesLoser = document.getElementById('totalMovesLoser');
const doomContainer = document.getElementById('doom');
const doomDisplay = document.getElementById('doomDisplay');

const landing = document.getElementById('landing');
const closeAbout = document.getElementById('closeAboutModal');
const modalAbout = document.getElementById('modal-about');
const modalWinner = document.getElementById('modal-winner');
const modalLoser = document.getElementById('modal-loser');
const memHeading = document.getElementById('memHeading');

const flipCardSound = document.getElementById('flipCardSnd');
const flipBackSound = document.getElementById('flipBackSnd');
const successSound = document.getElementById('sucessSnd');

let moves = 0;
let correct = 0;
let cards = [];
let cardsrc = [];
let imgsrcCheck = [];
let win = false;

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

function winner() {
  correct += 1;
  if (correct === 16) {
    setTimeout(() => {
      modalWinner.classList.toggle('modal-display');
      modalWinner.classList.add('displayAnim');
      endMovesDisplay.textContent = moves;
      doomContainer.classList.add('hide');
      win = true;
      if (moves < 25) {
        endMovesDisplay.classList.add('good');
      }
      // console.log('nothing');
    }, 400);
  }
}

function compareCards() {
  cards.sort();
  if (cards[0] === cards[1] && (imgsrcCheck[0] !== imgsrcCheck[1])) {
    // console.log('Certo, yes!');
    setTimeout(() => {
      cardsrc.forEach((card) => {
        card.classList.remove('card-show');
        card.classList.add('card-correct');
        card.classList.add('correct');
        card.firstChild.removeEventListener('click', checker);
        successSound.play();
        winner();
        imgsrcCheck = [];
      });
      cardsrc = [];
    }, 500);
    // console.log(cardsrc[0]);
    // console.log(cardsrc[1]);
  } else {
    // console.log('errado!');
    setTimeout(() => {
      cardsrc.forEach((card) => {
        card.classList.remove('card-show');
        card.classList.add('card-incorrect');
        flipBackSound.play();
      });
    }, 500);
    setTimeout(() => {
      cardsrc.forEach((card) => {
        card.classList.add('card-hide', 'hidden-card');
        card.classList.remove('card-incorrect');
        card.firstChild.classList.add('img-hide');
      });
      cardsrc = [];
    }, 900);
  }
  cards = [];
  imgsrcCheck = [];
}

function checker(e) {
  const card = e.target.parentNode;
  const firstCard = e.target.attributes.name.nodeValue;
  const imgCheck = e.target.attributes.src.nodeValue;
  e.target.classList.remove('img-hide');
  e.target.classList.add('img-show');
  card.classList.remove('card-hide', 'hidden-card');
  card.classList.add('card-show');
  imgsrcCheck.push(imgCheck);
  cards.push(firstCard);
  cardsrc.push(card);
  moves += 1;
  movesDisplay.textContent = moves;
  // console.log(moves);
  flipCardSound.play();
  if (cards.length === 2) {
    compareCards();
  }
}

function endGame() {
  modalLoser.classList.remove('modal-display');
  modalLoser.classList.add('displayAnim');
  endMovesLoser.textContent = moves;
}

function loser() {
  setInterval(() => {
    const timeIsUp = doomDisplay.textContent;
    doomDisplay.classList.add('good');
    if (timeIsUp === '00:15') {
      doomDisplay.classList.remove('good');
      doomDisplay.classList.add('danger');
    } else if ((timeIsUp === '00:00') && (!win)) {
      endGame();
    }
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  // console.log(display);
  startCounter.textContent = display;
  doomDisplay.textContent = display;
  if (display === '01:30') {
    loser(display);
  }
}

let countdown;
function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function doomTime(time) {
  const seconds = parseInt(time, 10);
  timer(seconds);
}

function startGame() {
  doomTime(80);
  doomContainer.classList.remove('hide');
  const cardImages = Array.from(gameGrid.querySelectorAll('div.card > img'));
  cardImages.forEach((cardImg) => {
    cardImg.addEventListener('click', checker);
  });
  memHeading.classList.toggle('hide');
  status.classList.remove('hide');
  status.classList.add('status');
  const startcards = Array.from(document.getElementsByClassName('card'));
  startcards.forEach((card) => {
    card.classList.add('card-hide');
    card.firstChild.classList.add('img-hide');
  });
  setTimeout(() => {
    startcards.forEach((card) => {
      card.classList.remove('correct');
      card.classList.add('hidden-card');
    });
  }, 450);
}

function startTimer() {
  const seconds = parseInt(5, 10);
  timer(seconds);
  setTimeout(() => { startGame(); }, 5000);
}

function renderGame() {
  body[0].classList.toggle('bodyChange');
  landing.classList.add('hide');
  gameSection.classList.toggle('hide');
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  images.sort(() => Math.random() - 0.5);
  for (let i = 0; i < 16; i += 1) {
    const num = images.pop(1);
    const card = document.createElement('div');
    card.classList.add('card', 'correct');
    const cardImg = document.createElement('img');
    cardImg.setAttribute('src', `img/img_${num}.svg`);
    switch (num) {
      case 1:
        cardImg.setAttribute('name', 'android');
        break;
      case 2:
        cardImg.setAttribute('name', 'accessible');
        break;
      case 3:
        cardImg.setAttribute('name', 'motorcycle');
        break;
      case 4:
        cardImg.setAttribute('name', 'boat');
        break;
      case 5:
        cardImg.setAttribute('name', 'fitness');
        break;
      case 6:
        cardImg.setAttribute('name', 'taxi');
        break;
      case 7:
        cardImg.setAttribute('name', 'flight');
        break;
      case 8:
        cardImg.setAttribute('name', 'cafe');
        break;
      case 9:
        cardImg.setAttribute('name', 'android');
        break;
      case 10:
        cardImg.setAttribute('name', 'accessible');
        break;
      case 11:
        cardImg.setAttribute('name', 'motorcycle');
        break;
      case 12:
        cardImg.setAttribute('name', 'boat');
        break;
      case 13:
        cardImg.setAttribute('name', 'fitness');
        break;
      case 14:
        cardImg.setAttribute('name', 'taxi');
        break;
      case 15:
        cardImg.setAttribute('name', 'flight');
        break;
      case 16:
        cardImg.setAttribute('name', 'cafe');
        break;
      default:
    }
    gameGrid.appendChild(card);
    card.appendChild(cardImg);
  }
  startTimer();
}

startBtn.addEventListener('click', renderGame);
