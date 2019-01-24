// Virtual Drum Kit
/* global document: true window: true */
/* eslint no-useless-return: 1 */
const shareBtn = document.getElementById('shareBtn');
const social = document.getElementsByClassName('social')[0];
const shareBack = document.getElementById('shareBack');

/* Share Menu */
shareBtn.addEventListener('click', () => {
  if (social.classList.contains('open')) {
    shareBack.style.fill = '#fff';
    social.style.animation = 'gotransp 2s 1';
    setTimeout(() => { social.classList.remove('open'); }, 1900);
  } else {
    social.classList.add('open');
    // shareBtn.setAttribute('style', 'path', 'fill:red');
    shareBack.style.fill = 'yellow';
    social.style.animation = 'gopaque 2s 1';
  }
});

/* Play Drums */
function playSoundClick(e) {
  const audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.target.dataset.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  // console.log(audio);
  // console.log(key);
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  // console.log(audio);
  // console.log(key);
}

const keys = document.querySelectorAll('.key');
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  // console.log(e.propertyName);
  this.classList.remove('playing');
}
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
window.addEventListener('click', playSoundClick);
