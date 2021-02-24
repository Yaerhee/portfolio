'use strict';

//responsive Navbar - change its colors when it is scrolled
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//fading home bar to transparent by scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - window.scrollY / homeHeight;
  });


//show arrow button by scrolling down
const arrowUp = document.querySelector('.arrow-up');
  document.addEventListener('scroll', ()=> {
    if(window.scrollY > homeHeight /2) {
      arrowUp.classList.add('visible');
    } else {
      arrowUp.classList.remove('visible');
    }
  });

arrowUp.addEventListener('click', ()=> {
  scrollIntoView('#home');
});

//scrolling function; accessible to home on top
const navbarLogo = document.querySelector('.navbar__logo');
navbarLogo.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if(link == null) {
    return;
  }

  navbarLogo.classList.remove('open');
  scrollIntoView(link);
});

//scrolling function; accessible to menus on navbar
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if(link == null) {
    return;
  }

  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

//scrolling function; accessible to menus on home
const containerMenu = document.querySelector('.home__container');
containerMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if(link == null) {
    return;
  }

  containerMenu.classList.remove('open');
  scrollIntoView(link);
});


//Navbar toggle button @ mobile
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

//universal scrolling function
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth' });
}