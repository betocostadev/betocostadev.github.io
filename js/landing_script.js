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

  // Hamburger Menu
  const menuBtn = document.getElementsByClassName('hamburger')[0];
  const menu = document.getElementsByClassName('menu-object')[0];
  const menuLink = document.getElementsByClassName('menu-link');
  const menuLinks = Array.from(menuLink);

  // Array to close the menu when any link is clicked.
  menuLinks.forEach(menuLink => {
    menuLink.onclick = function () {
      menuBtn.classList.toggle('is-active');
      menu.classList.toggle('open');
    }
  });

  menuBtn.onclick = function () {
    menuBtn.classList.toggle('is-active');
    menu.classList.toggle('open');
  }


  // Hamb Menu display on scroll
  const menuContainer = document.getElementById('menu');
  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      menuContainer.classList.remove('disabled');
    } else {
      menuContainer.classList.add('disabled');
    }
}
  // Close the menu when focus is lost
  menuContainer.addEventListener("blur", function() {
    menuBtn.classList.toggle('is-active');
    menu.classList.toggle('open');
  }, true);

  // Sources - Modal
  const modal = document.getElementById('object-modal');
  const modalBtn = document.getElementById('res-modal');
  const closeBtn = document.getElementById('close-btn');

  modalBtn.onclick = function () {
    modal.style.display = 'block';
  }

  closeBtn.onclick = function () {
    modal.style.display = 'none';
  }

  window.onclick = function (ev) {
    if (ev.target == modal) {
      modal.style.display = 'none';
    }
  }


}());
