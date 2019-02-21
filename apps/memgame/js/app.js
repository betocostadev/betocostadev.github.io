/* global document: true */ /* eslint no-use-before-define: 0 */

// DOM variables
const startBtn = document.getElementById('startGame');
const aboutBtn = document.getElementById('about');
const gameSection = document.getElementById('game');
const gameGrid = document.getElementById('game-grid');
const body = document.getElementsByTagName('body');
const startCounter = document.getElementById('startCounter');
const status = document.getElementById('status');
const movesDisplay = document.getElementById('movesDisplay');
const winnerRatingDisplay = document.getElementById('winnerRating');
const loserRatingDisplay = document.getElementById('loserRating');
const doomContainer = document.getElementById('doom');
const doomDisplay = document.getElementById('doomDisplay');
const timeElapsedWinnerDisplay = document.getElementById('timeElapsedWinnerDisplay');

const landing = document.getElementById('landing');
const closeAbout = document.getElementById('closeAboutModal');
const modalAbout = document.getElementById('modal-about');
const modalWinner = document.getElementById('modal-winner');
const modalLoser = document.getElementById('modal-loser');
const memHeading = document.getElementById('memHeading');

// Sound Variables
const flipCardSound = document.getElementById('flipCardSnd');
const flipBackSound = document.getElementById('flipBackSnd');
const successSound = document.getElementById('sucessSnd');

// Game logic variables
let moves = 0;
let correct = 0;
let cards = [];
let cardsrc = [];
let imgsrcCheck = [];
let win = false; // Check for winner boolean
let elapsed = 0; // Elapsed time starter
let stopElapsed; // Used to stop the countdown in the elapsed time function
let countdown; // Used to reset the countdown in the timer function

aboutBtn.addEventListener('click', () => {
  modalAbout.classList.toggle('modal-display');
  modalAbout.classList.add('displayAnim');
  modalAbout.firstElementChild.classList.add('modal-body-display');
});

closeAbout.addEventListener('click', () => {
  modalAbout.classList.remove('displayAnim');
  modalAbout.classList.add('hideAnim');
  modalAbout.firstElementChild.classList.remove('modal-body-display');
  modalAbout.firstElementChild.classList.add('modal-body-hide');
  setTimeout(() => {
    modalAbout.classList.toggle('modal-display');
    modalAbout.classList.remove('hideAnim');
    modalAbout.firstElementChild.classList.remove('modal-body-hide');
  }, 580);
});

function winner() {
  correct += 1;
  if (correct === 16) {
    setTimeout(() => {
      modalWinner.classList.toggle('modal-display');
      modalWinner.classList.add('displayAnim');
      doomContainer.classList.add('hide');
      win = true;
      if (moves < 12) {
        winnerRatingDisplay.textContent = `Rating: ★★★ | ${moves} moves`;
        winnerRatingDisplay.classList.add('good');
      } else if (moves <= 16) {
        winnerRatingDisplay.textContent = `Rating: ★★☆ | ${moves} moves`;
        winnerRatingDisplay.classList.add('good');
      } else if (moves <= 22) {
        winnerRatingDisplay.textContent = `Rating: ★☆☆ | ${moves} moves`;
      } else {
        winnerRatingDisplay.textContent = `Rating: ☆☆☆ | ${moves} moves`;
      }
      // console.log('nothing');
    }, 400);
  }
}

function compareCards() {
  moves += 1;
  if (moves < 12) {
    movesDisplay.textContent = `Rating: ★★★ | ${moves} moves`;
  } else if (moves <= 17) {
    movesDisplay.textContent = `Rating: ★★☆ | ${moves} moves`;
  } else if (moves <= 23) {
    movesDisplay.textContent = `Rating: ★☆☆ | ${moves} moves`;
  } else {
    movesDisplay.textContent = `Rating: ☆☆☆ | ${moves} moves`;
  }
  // Sort the cards array to avoid more checkings.
  cards.sort();
  if (cards[0] === cards[1] && (imgsrcCheck[0] !== imgsrcCheck[1])) {
    // card === card
    setTimeout(() => {
      cardsrc.forEach((card) => {
        card.classList.remove('card-show');
        card.classList.add('card-correct');
        card.classList.add('correct');
        /* For card matches the event listener is removed to avoid the user to click again
        on the card and break the function */
        card.firstChild.removeEventListener('click', checker);
        successSound.play();
        winner();
        imgsrcCheck = [];
      });
      cardsrc = [];
    }, 600);
    // console.log(cardsrc[0]);
    // console.log(cardsrc[1]);
  } else {
    // card !== card
    setTimeout(() => {
      cardsrc.forEach((card) => {
        card.classList.remove('card-show');
        card.classList.add('card-incorrect');
        flipBackSound.play();
      });
    }, 600);
    setTimeout(() => {
      cardsrc.forEach((card) => {
        card.classList.add('card-hide', 'hidden-card');
        card.classList.remove('card-incorrect');
        card.firstChild.classList.add('img-hide');
      });
      cardsrc = [];
    }, 1000);
  }
  cards = [];
  imgsrcCheck = [];
}

// Gets the clicked elements and places them on arrays before checking for the right cards.
function checker(e) {
  // Returns an e.target.parent = card.div
  const card = e.target.parentNode;
  // Returns an element name created previously to check the cards.
  const firstCard = e.target.attributes.name.nodeValue;
  /* Since some cards have differente names (img_1.svg === img9.svg) and yet they represent
  the same image, the line below get's their source to avoid breaking the game
  when it compares the images. Ex: Without it, the user could click on the same target
  and get a correct card. */
  const imgCheck = e.target.attributes.src.nodeValue;
  e.target.classList.remove('img-hide');
  e.target.classList.add('img-show');
  card.classList.remove('card-hide', 'hidden-card');
  card.classList.add('card-show');
  // Adds the elements to their respective arrays.
  imgsrcCheck.unshift(imgCheck);
  cards.unshift(firstCard);
  cardsrc.unshift(card);
  // console.log(moves);
  // Avoid for a correct card when the users click twice on the same image.
  if (imgsrcCheck[0] === imgsrcCheck[1]) {
    cards.pop();
    cardsrc.pop();
    imgsrcCheck.pop();
  }
  // Starts the compare function
  flipCardSound.play();
  if (cards.length === 2) {
    compareCards();
  }
}

// player lost ? run the function : '';
function endGame() {
  modalLoser.classList.remove('modal-display');
  modalLoser.classList.add('displayAnim');
  loserRatingDisplay.textContent = `Rating: ☆☆☆ | ${moves} moves`;
}

// Uses the timeIsUp to set a lose state:
function loser() {
  setInterval(() => {
    const timeIsUp = doomDisplay.textContent;
    doomDisplay.classList.add('good');
    if (timeIsUp === '00:15') {
      doomDisplay.classList.remove('good');
      doomDisplay.classList.add('danger');
    }
    if ((timeIsUp === '00:00') && (!win)) {
      endGame();
    }
  }, 1000);
}

/* Gets the time from the timer functions and fix the display on the DOM */
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  // console.log(display);
  startCounter.textContent = display;
  doomDisplay.textContent = display;
  if (display === '01:15') {
    loser(display);
  }
}

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

/* Counts the time Elapsed. Clear interval used to stop the function if the player wins
 or the game time ends. */
function elapsedTime() {
  stopElapsed = setInterval(() => {
    elapsed += 1;
    // console.log(elapsed);
    if (elapsed > 74 || correct === 16) {
      if (elapsed < 35) {
        timeElapsedWinnerDisplay.textContent = `Time elapsed: ${elapsed} seconds`;
        timeElapsedWinnerDisplay.classList.add('good');
        clearInterval(stopElapsed);
      } else if (elapsed < 55) {
        timeElapsedWinnerDisplay.textContent = `Time elapsed: ${elapsed} seconds`;
        clearInterval(stopElapsed);
      } else {
        timeElapsedWinnerDisplay.textContent = `Time elapsed: ${elapsed} seconds`;
        timeElapsedWinnerDisplay.classList.add('danger');
        clearInterval(stopElapsed);
      }
    }
  }, 1000);
}

// Starts the game:
function startGame() {
  // Runs the game time '75'
  doomTime(75);
  // Starts the elapsed time function - Check it if you change the game time!
  elapsedTime();
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
  }, 400);
}

// Uses the timer function to apply the 5 seconds delay at the start:
function startTimer() {
  const seconds = parseInt(5, 10);
  timer(seconds);
  setTimeout(() => { startGame(); }, 5000);
}

// Adds cards to the game Grid and sets the proper classes to elements:
function renderGame() {
  body[0].classList.toggle('bodyChange');
  landing.classList.add('hide');
  gameSection.classList.toggle('hide');
  // Randomize the cards placement:
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  images.sort(() => Math.random() - 0.5);
  for (let i = 0; i < 16; i += 1) {
    const num = images.pop(1);
    const card = document.createElement('div');
    card.classList.add('card', 'correct');
    const cardImg = document.createElement('img');
    // Adds 'name' 'something', easier to make the compare function using it.
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

// Start Game => Render game.
startBtn.addEventListener('click', renderGame);
