/* eslint-disable */
(function () {

  // Smooth Scroll below not needed anymore. Applied to the main view.
  /* const knowMoreBtn = document.getElementById('down-btn');

  knowMoreBtn.addEventListener('click', function () {
    const aboutSect = document.getElementById('about');
    aboutSect.scrollIntoView({ behavior: 'smooth' });

  }) */

  const hello = document.getElementById('helloDiv');
  hello.addEventListener("animationend", function() {
    hello.classList.add('disabled');
  }, 3500);

}());
