/* global document: true */ /* global window: true */
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


// Test to hide the lower frame
const body = document.getElementsByTagName('body')[0];
const bodyHeight = body.clientHeight;
const transpDiv = document.getElementsByClassName('transp')[0];

function offsetCheck() {
  const small = bodyHeight - (bodyHeight * 0.2);
  const windowOffset = window.pageYOffset;
  if (windowOffset >= small) {
    transpDiv.classList.add('menu-close');
  } else {
    transpDiv.classList.remove('menu-close');
  }
}

document.addEventListener('scroll', offsetCheck);
