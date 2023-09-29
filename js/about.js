

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



// ----------------------- parallax ----------------------


window.addEventListener('scroll', function () {
  const layer = document.querySelector('.free-consultation__parallax'); 
  const yOffset = window.scrollY;
  const transform = `translateY(${yOffset * 0.5}px)`;
  layer.style.transform = transform;
});



// ---------------------------- slider animation ----------------------------




const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const slideCount = slides.length;
let slideIndex = 0;



prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);


function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
  updateDots();
}


function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
  updateDots();
}

const currentSlide = (n) => {
  slideIndex = n;
  updateSlider();
  updateDots();
}


function updateDots() {
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();
updateDots();



// -------------------------- blocks animation ---------------------------



const freeConsultationBlock = document.querySelector('.free-consultation__container');
const curriculumBlock = document.querySelector('.curriculum__container');
const skillUpgradeBlock = document.querySelectorAll('.show');
const yourInstructorBlock = document.querySelector('.your-instructor__info__block');
const contactForm = document.querySelector('.contact-form__container');


window.onscroll = () => {
  fadeInLeftAnim([freeConsultationBlock, yourInstructorBlock]);
  fadeInAnim([curriculumBlock]);
  skillUpgradeAnim(skillUpgradeBlock);
  footerFormAnim([contactForm]);
  colorChange();
  scrollFunction()
}

function fadeInLeftAnim(element = []) {
  const windowHeight = window.innerHeight;
  element.forEach((block) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      block.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow');
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

function skillUpgradeAnim(elements) {
  const windowHeight = window.innerHeight;

  elements.forEach((block, index) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;
    const delay = 1000;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      setTimeout(() => {
        block.style.opacity = '1';
      }, index * delay);
      block.classList.add('animate__animated', 'animate__fadeIn');
    }
  });
}

function footerFormAnim(element = []) {
  const windowHeight = window.innerHeight;

  element.forEach((block) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      block.classList.add('animate__animated', 'animate__slideInUp', 'animate__slow');
    }
  });
}



// -------------------------- scrollUp arrow color change --------------------------------



const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer')
const arrow = document.querySelector('.arrow-up')


// const {date, time} = {data: 'some date', time: '29.05.2002'};
// const datas = {data: 'some data', time: '29.05.2002'};
// деструктуризация 


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
      if (backgroundColor === 'rgb(226, 183, 185)') {
        arrow.style.color = '#251408'
      }
      if (backgroundColor === 'rgb(37, 20, 8)') {
        arrow.style.color = '#e2b7b9'
      }
      if (backgroundColor === "rgba(0, 0, 0, 0)") {
        arrow.style.color = '#251408'
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




// ----------------------------------card anim -----------------------------------

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target;
      const cards = section.querySelectorAll(".skill-upgrade__card");
      const arrows = section.querySelectorAll(".skill-upgrade__arrow"); 
console.log(arrows)

      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate__animated', 'animate__fadeIn', 'animate__slow');
        }, index * 700); 
          
      });

      arrows.forEach((arrow, index) => {
        setTimeout(() => {
          let screenWidth = window.innerWidth;
          if (screenWidth <= 800) {
            arrow.classList.add('animate__animated', 'animate__fadeInDown', 'animate__slow');
          } else {
          arrow.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slow');
          }
           observer.unobserve(section);
        }, index * 700); 
      });
    
    }
  });
}

const section = document.querySelector(".skill-upgrade");

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
});

sections.forEach(section => {
  observer.observe(section);
});





