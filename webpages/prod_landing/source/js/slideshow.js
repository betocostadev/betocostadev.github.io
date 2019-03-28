/* global document: true */
// SLIDESHOW
const btnPrev = document.getElementsByClassName('previous')[0];
const btnNext = document.getElementsByClassName('next')[0];
const btnDot = document.getElementsByClassName('dot');
const slides = Array.from(document.getElementsByClassName('mySlides'));
const dotButtons = document.getElementsByClassName('dot-btn')[0];
const slideContainer = document.getElementById('slideContainer');

let slideIndex = 1;

function showSlides(num) {
  if (num > slides.length) { slideIndex = 1; }
  if (num < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < btnDot.length; i += 1) {
    btnDot[i].className = btnDot[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  btnDot[slideIndex - 1].className += ' active';
  // setTimeout(() => {
  //   showSlides(slideIndex += 1);
  // }, 5000);
}

showSlides(slideIndex);

// Thumbnail image controls
function plusSlides(num) {
  showSlides(slideIndex += num);
}

function currentSlide(num) {
  showSlides(slideIndex = num);
}

function checkDot(e) {
  if (e.target === btnDot[0]) {
    currentSlide(1);
  } else if (e.target === btnDot[1]) {
    currentSlide(2);
  } else if (e.target === btnDot[2]) {
    currentSlide(3);
  }
}

function checkBtn(e) {
  if (e.target === btnPrev) {
    plusSlides(-1);
  } else if (e.target === btnNext) {
    plusSlides(1);
  }
}

dotButtons.addEventListener('click', checkDot);
slideContainer.addEventListener('click', checkBtn);
