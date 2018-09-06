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
  // Descobrir como fazer um array dos links acima
  // Para poder fazer com que um clique em qualquer um desative o menu

  menuBtn.onclick = function () {
    menuBtn.classList.toggle('is-active');
    menu.classList.toggle('open');
  }
  // Fazendo da maneira besta, arrumar depois:
  menuLink[0].onclick = function () {
    menuBtn.classList.toggle('is-active');
    menu.classList.toggle('open');
  }
  menuLink[1].onclick = function () {
    menuBtn.classList.toggle('is-active');
    menu.classList.toggle('open');
  }
  menuLink[2].onclick = function () {
    menuBtn.classList.toggle('is-active');
    menu.classList.toggle('open');
  }
  menuLink[3].onclick = function () {
    menuBtn.classList.toggle('is-active');
    menu.classList.toggle('open');
  }
  // menuLink.forEach(menuLink => {
  //   menuBtn.classList.toggle('is-active');
  //   menu.classList.toggle('open')
  // });
  // menuLink[0].onclick = function () {
  //   menuBtn.classList.toggle('is-active');
  //   menu.classList.toggle('open');
  // }
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
