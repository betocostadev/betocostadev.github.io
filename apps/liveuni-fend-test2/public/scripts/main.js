/* global document: true */
// TODO: Create items based on Items

const option = document.getElementById('option');
const subMenu = document.getElementById('submenu');
const slideWidth = subMenu.offsetWidth;
const selectItem = document.getElementsByTagName('select')[0];
const qtd = document.getElementsByTagName('input')[0];
const main = document.getElementsByTagName('main')[0];

function showOptions() {
  if (subMenu.dataset.slide === 'off') {
    subMenu.style.transform = `translate(${slideWidth}px)`;
    subMenu.dataset.slide = 'on';
  } else {
    subMenu.style.transform = `translate(-${slideWidth}px)`;
    subMenu.dataset.slide = 'off';
  }
}

function renderItems(item, value) {
  main.removeChild(document.getElementsByTagName('section')[2]);
  const itemsContainer = document.createElement('section');
  itemsContainer.setAttribute('id', 'items');
  main.appendChild(itemsContainer);
  let text = '';
  if (item === 'itemA') {
    text = 'Item A';
  } else {
    text = 'Item B';
  }
  for (let i = 0; i < value; i += 1) {
    const div = document.createElement('div');
    div.setAttribute('class', 'item-display');
    const firstPar = document.createElement('p');
    firstPar.setAttribute('class', 'first-par');
    firstPar.textContent = [i + 1];
    const secondPar = document.createElement('p');
    secondPar.setAttribute('class', 'second-par');
    secondPar.textContent = `${text} ${[i + 1]}`;
    div.appendChild(firstPar);
    div.appendChild(secondPar);
    itemsContainer.appendChild(div);
  }
}

function addItems() {
  if (qtd.value === '' || isNaN(qtd.value)) {
    qtd.classList.add('missing-qtd');
  } else {
    const item = selectItem.value;
    qtd.addEventListener('input', renderItems(item, qtd.value));
    qtd.classList.remove('missing-qtd');
  }
}


option.addEventListener('click', showOptions);
selectItem.addEventListener('change', addItems);
subMenu.addEventListener('focusout', showOptions);
