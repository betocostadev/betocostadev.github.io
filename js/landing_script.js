/* eslint-disable */
(function () {

  // let myButton = document.getElementById('myButton');
  //   myButton.addEventListener('click', function () {
  //       incrementCounter();
  //       updateUI();
  //   });

  const knowMoreBtn = document.getElementById('down-btn');

  knowMoreBtn.addEventListener('click', function () {
    const aboutSect = document.getElementById('about');
    aboutSect.scrollIntoView({ behavior: 'smooth' });
    // this.classList.add('croxura');
    // alert('Hi!')
  })

  // function scrollToAbout() {
  //   const aboutSect = document.getElementById('about');
  //   // Scroll to a certain element
  //   aboutSect.classList.add('croxura');
  //   // aboutSect.scrollIntoView({
  //   //   behavior: 'smooth',
  //   // });
  // };

}());
