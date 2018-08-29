/* eslint-disable */
(function () {

  const knowMoreBtn = document.getElementById('down-btn');

  knowMoreBtn.addEventListener('click', function () {
    const aboutSect = document.getElementById('about');
    aboutSect.scrollIntoView({ behavior: 'smooth' });

  })

  const hello = document.getElementById('helloDiv');
  hello.addEventListener("animationend", function() {
    hello.classList.add('disabled');
  }, 3000);

}());
