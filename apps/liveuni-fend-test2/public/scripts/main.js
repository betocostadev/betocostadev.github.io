/* global document: true */
const option = document.getElementById('option');
const subMenu = document.getElementById('submenu');
const slideWidth = subMenu.offsetWidth;
// $0.textContent.toUpperCase()

function showOptions() {
  if (subMenu.dataset.slide === 'off') {
    subMenu.style.transform = `translate(${slideWidth}px)`;
    subMenu.dataset.slide = 'on';
  } else {
    subMenu.style.transform = `translate(-${slideWidth}px)`;
    subMenu.dataset.slide = 'off';
  }
//   subMenu.classList.toggle('slide');
}

option.addEventListener('click', showOptions);
