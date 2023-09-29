

// ------------------------------------ burger menu --------------------------------------


const burgerIcon = document.querySelector('.burger-icon');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const hiddenOverflow = document.querySelector('.wrapper');

burgerIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
  overlay.classList.toggle('open');
  hiddenOverflow.classList.toggle('overlay__active');
  burgerIcon.classList.add('burger-menu__open');
});

document.addEventListener('click', (event) => {
  const isClickInsideMenu = sideMenu.contains(event.target);
  const isClickOnBurger = burgerIcon.contains(event.target);

  if (!isClickInsideMenu && !isClickOnBurger && sideMenu.classList.contains('open')) {
    burgerIcon.classList.remove('burger-menu__open');
    sideMenu.classList.remove('open');
    overlay.classList.remove('open');
    hiddenOverflow.classList.toggle('overlay__active');
  }
});


// -------------------- blocks animation ----------------------



const contactsBlock = document.querySelector('.contacts__container');
const mapBlock = document.querySelector('.map__container');
const contactFormBlock = document.querySelector('.contact-form__container');


window.onscroll = () => {
  contactBlockAnim([contactsBlock]);
  mapAnim([mapBlock]);
  footerAnim([contactFormBlock]);
  scrollFunction()
  colorChange();
}



function contactBlockAnim(element = []) {
  const windowHeight = window.innerHeight;
  element.forEach((block) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      block.classList.add('animate__animated', 'animate__bounceInRight');
    }
  });
}

function mapAnim(element = []) {
  const windowHeight = window.innerHeight;

  element.forEach((block) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      block.classList.add('animate__animated', 'animate__bounceInLeft');
    }
  });
}

function footerAnim(element = []) {
  const windowHeight = window.innerHeight;

  element.forEach((block) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      block.classList.add('animate__animated', 'animate__slideInUp');
    }
  });
}


// -------------------------- scrollUp arrow color change --------------------------------



const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer')
const arrow = document.querySelector('.arrow-up')

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= updateRectTop();  
}

  function updateRectTop() {
    let screenWidth = window.innerWidth;
    if (screenWidth <= 1000) {
      return 675;
    }
      return  670;
    }

  
const arrayElements = [...sections, footer];

function colorChange() {
  arrayElements.forEach((section) => {
    if (isElementInViewport(section)) {
      const computedStyle = window.getComputedStyle(section);
      const backgroundColor = computedStyle.backgroundColor;
      if (backgroundColor === 'rgb(255, 145, 182)') {
        arrow.style.color = '#ffffff'
      }
     
      if (backgroundColor === "rgba(0, 0, 0, 0)") {
        arrow.style.color = '#251408'
      }
    }
  });
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

//  window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
}
