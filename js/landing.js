

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


// --------------------------------- catalog cards ----------------------------------


const cardsItems = [

  {
    imgPath: './landing__img/dark__bread.webp',
    label: 'Dark Bread'
  },
  {
    imgPath: './landing__img/sweet__pastries.webp',
    label: 'Sweet Pastries'
  },
  {
    imgPath: './landing__img/ear__bread.webp',
    label: 'Ear Bread'
  },
  {
    imgPath: './landing__img/unleavened__bread.webp',
    label: 'Unleavened Bread'
  },
  {
    imgPath: './landing__img/bread__with__seeds.webp',
    label: 'Bread with Seeds'
  },
  {
    imgPath: './landing__img/bread__with__cereals.webp',
    label: 'Bread with cereals'
  },
];


document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector('.catalog__cards__container');
  cardsItems.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add('catalog-item__card');
    itemDiv.innerHTML = `<h1 class="item__title">${item.label}</h1>`;
    itemDiv.style.backgroundImage = `url(${item.imgPath})`
    cardsContainer.append(itemDiv);
  })
});


// --------------------- running num animation -----------------------


const time = 2000;
const step = 1;

function outThousandNum(num, element) {
  let e = document.querySelector('#' + element);
  let n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n + 'k';
  }, t);
}

function outNum(num, element) {
  let e = document.querySelector('#' + element);
  let n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}

function outNumAnim(element) {
  const windowHeight = window.innerHeight;
  const top = window.scrollY;
  const offset = element.offsetTop;

  if (top + windowHeight > offset && !element.hasAttribute('data-animated')) {
    outThousandNum(5, 'out-1');
    outNum(60, 'out-2');
    outNum(34, 'out-3');
    outNum(7, 'out-4');
    element.setAttribute('data-animated', 'true');
  }
}



// ----------------------- parallax ----------------------


window.addEventListener('scroll', function () {
  const layer = document.querySelector('.home-bakery__parallax');
  const yOffset = window.scrollY;
  const transform = `translateY(${yOffset * 0.5}px)`;
  layer.style.transform = transform;
});


// ---------------------- blocks animation -------------------------



const homeBakeryBlock = document.querySelector('.home-bakery__container');
const ourAdvantagesBlocks = document.querySelectorAll('.our-advantages__container');
const ourPricingBlock = document.querySelector('.our-pricing__container');
const footerFormBlock = document.querySelector('.contact-form__container');
const ourSuccessesBlock = document.querySelector('.our-successes__container');
const aboutBakeryBlock = document.querySelectorAll('.anim');

window.onscroll = () => {
  homeBakeryAnim([homeBakeryBlock]);
  ourAdvantagesAnim(ourAdvantagesBlocks);
  aboutBakeryAnim(aboutBakeryBlock)
  slideInUpAnim([ourPricingBlock, footerFormBlock]);
  outNumAnim(ourSuccessesBlock);
  colorChange();
  scrollFunction() 
}


function homeBakeryAnim(element = []) {
  const windowHeight = window.innerHeight;

  element.forEach((block) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      block.classList.add('animate__animated', 'animate__slideInDown', 'animate__slow')
    }
  });
}

function ourAdvantagesAnim(elements) {
  const windowHeight = window.innerHeight;

  elements.forEach((block, index) => {
    const top = window.scrollY;
    const offset = block.offsetTop;
    const offsetHeight = block.offsetHeight;

    if (top + windowHeight > offset && top < offset + offsetHeight) {
      block.classList.add('animate__animated', 'animate__fadeIn', 'animate__slow');
    } else {
      block.classList.remove('animate__animated', 'animate__fadeIn', 'animate__slow');
    }
  });
}

function slideInUpAnim(element = []) {
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

function aboutBakeryAnim(elements) {
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
      console.log(backgroundColor);
      if (backgroundColor === 'rgb(239, 136, 1)') {
        arrow.style.color = '#ffffff'
      }
       if (backgroundColor === "rgba(0, 0, 0, 0)") {
         arrow.style.color = '#ffffff'
       } 
       if (backgroundColor ==="rgb(255, 252, 249)") {
         arrow.style.color =  '#251408'
       }
       if (backgroundColor === "rgb(250, 235, 215)") {
         arrow.style.color =  '#251408'
       }
    }
  });
}


function topFunction() {
  document.documentElement.scrollTop = 0;
}

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = 0;
  }
}
