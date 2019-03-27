/* global document: true */
// SLIDESHOW
const btnPrev = document.getElementsByClassName('previous')[0];
const btnNext = document.getElementsByClassName('next')[0];
const btnDot = document.getElementsByClassName('dot');
const slides = document.getElementsByClassName('mySlides');
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
  console.log(slideIndex);
}

showSlides(slideIndex);

function plusSlides(num) {
  showSlides(slideIndex += num);
}

// Thumbnail image controls
function currentSlide(num) {
  showSlides(slideIndex = num);
}

btnDot[0].addEventListener('click', currentSlide(1));
btnDot[1].addEventListener('click', currentSlide(2));
btnDot[2].addEventListener('click', currentSlide(3));

btnPrev.addEventListener('click', plusSlides(-1));
btnNext.addEventListener('click', plusSlides(1));
