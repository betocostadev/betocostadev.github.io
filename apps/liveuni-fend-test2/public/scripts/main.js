/* global document: true */
// TODO: Create items based on Items

const option = document.getElementById('option');
const subMenu = document.getElementById('submenu');
const slideWidth = subMenu.offsetWidth;
const qtd = document.getElementsByTagName('input')[0];
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

function addQtd(value) {
  console.log(`O valor é ${value}`);
}

function addItems() {
  if (qtd.value === '' || isNaN(qtd.value)) {
    console.log('Sem valor, ou não é um número!');
  } else {
    addQtd(qtd.value);
  }
}

option.addEventListener('click', showOptions);
window.addEventListener('click', addItems);
