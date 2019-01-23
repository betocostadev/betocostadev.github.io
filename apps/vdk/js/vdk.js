// Virtual Drum Kit
const shareBtn = document.getElementById('shareBtn');
const social = document.getElementsByClassName('social')[0];
const shareBack = document.getElementById('shareBack');

shareBtn.addEventListener('click', () => {
  if (social.classList.contains('open')) {
    social.classList.remove('open');
    shareBack.style.fill = '#fff';
  } else {
    social.classList.add('open');
    // shareBtn.setAttribute('style', 'path', 'fill:red');
    shareBack.style.fill = 'yellow';
  }
});
