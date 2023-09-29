

// ------------------------- burger menu --------------------------


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



// ----------------------------- blocks animation ---------------------------



const syllabusCards = document.querySelectorAll('.syllabus-card');
const quoteCards = document.querySelectorAll('.quote__card');
const aboutUsBlocks = document.querySelectorAll('.about-us__animation');
const aboutCompanyBlocks = document.querySelectorAll('.about-company__animation');
const designExelence = document.querySelector('.design-excellence__container');
const footerForm = document.querySelector('.footer__container');

window.onscroll = () => {
  fourElementsAnim(syllabusCards);
  fourElementsAnim(quoteCards);
  twoElementsAnim(aboutUsBlocks);
  fadeInAnim(aboutCompanyBlocks);
  designExelenceAnim([designExelence]);
  footerFormAnim([footerForm]);
  colorChange();
  scrollFunction()
}


function footerFormAnim(element = []) {
  const windowHeight = window.innerHeight;

  element.forEach((block) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      block.classList.add('animate__animated', 'animate__fadeInUp');
    } 
  });
}

function fadeInAnim(element = []) {
  const windowHeight = window.innerHeight;

  element.forEach((block) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;

    if (top + windowHeight < offset && top < offset + offsetHeight) {
      block.classList.add('animate__animated', 'animate__fadeIn', 'animate__slow');
    }
  });
}


function designExelenceAnim(element = []) {
  const windowHeight = window.innerHeight;

  element.forEach((block) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      block.classList.add('animate__animated', 'animate__fadeIn', 'animate__slow');
    }
  });
}


function twoElementsAnim(elements) {
  const windowHeight = window.innerHeight;

  elements.forEach((block, index) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      if (index === 0) {
        block.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow');
      } else {
        block.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow');
      }
    } 
  });
}


function fourElementsAnim(elements) {
  const windowHeight = window.innerHeight;

  elements.forEach((card, index) => {
    const top = window.scrollY;
    const offset = card.offsetTop;
    const offsetHeight = card.offsetHeight;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      if (index % 2 === 1) {
        card.classList.add('animate__animated', 'animate__fadeInRight');
      } else {
        card.classList.add('animate__animated', 'animate__fadeInLeft');
      }
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
      if (backgroundColor === 'rgb(255, 240, 248)') {
        arrow.style.color = ' #ee86a9'
      }
      if (backgroundColor === 'rgb(238, 134, 169)') {
        arrow.style.color = '#ffffff'
      }
      if (backgroundColor === "rgba(0, 0, 0, 0)") {
        arrow.style.color = '#000000'
      }
    }
  });
}


// window.addEventListener('scroll', () => {
//   colorChange();
// });

function topFunction() {
  document.documentElement.scrollTop = 0;
}

// window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
}



