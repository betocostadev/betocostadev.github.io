/* global document: true */
const hamburguer = document.getElementById('menu-icon');
const hamb1 = document.getElementById('hamb1');
const hamb2 = document.getElementById('hamb2');
const hamb3 = document.getElementById('hamb3');
const nav = document.getElementById('nav-bar');
const menuLinks = Array.from(document.getElementsByClassName('nav-link'));

function toggleMenu() {
  if (nav.classList.contains('menu-close')) {
    hamb1.style.animation = 'hamb1 1.5s ease 0s 1 normal forwards';
    hamb2.style.animation = 'hamb2 1.5s ease 0s 1 normal forwards';
    hamb3.style.animation = 'hamb3 1.5s ease 0s 1 normal forwards';
    nav.classList.remove('menu-close');
    nav.classList.add('menu-open');
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].classList.add('grow');
    }
  } else if (nav.classList.contains('menu-open')) {
    hamb1.style.animation = 'hamb1rev 1.5s ease 0s 1 reverse backwards running';
    hamb2.style.animation = 'hamb2rev 1.5s ease 0s 1 reverse backwards running';
    hamb3.style.animation = 'hamb3rev 1.5s ease 0s 1 reverse backwards running';
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].classList.remove('grow');
      menuLinks[i].classList.add('shrink');
    }
    setTimeout(() => {
      nav.classList.remove('menu-open');
      nav.classList.add('menu-close');
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].classList.remove('shrink');
      }
    }, 1000);
  }
}

hamburguer.addEventListener('click', toggleMenu);
hamburguer.addEventListener('blur', toggleMenu);
menuLinks.forEach(el => el.addEventListener('click', toggleMenu));

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
}

showSlides(slideIndex);

// Thumbnail image controls
function plusSlides(num) {
  showSlides(slideIndex += num);
}

function currentSlide(num) {
  showSlides(slideIndex = num);
}

btnDot[0].addEventListener('click', currentSlide(1));
btnDot[1].addEventListener('click', currentSlide(2));
btnDot[2].addEventListener('click', currentSlide(3));

btnPrev.addEventListener('click', plusSlides(-1));
btnNext.addEventListener('click', plusSlides(1));
