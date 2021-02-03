'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const h1 = document.querySelector('h1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Page navigation
//first example is not as DRY. Adds too many functions if there were more than 3 links
// document.querySelectorAll('.nav__link').forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//Better and common example
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Cookie notice

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. You must comply. <button class="btn btn--close-cookie">Yes Overlord</button>';
header.append(message);
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//learn more link smooth scrolling

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  //newer method only works on the most modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});

// //tabbed component

// tabsContainer.addEventListener('click', function (e) {
//   const clicked = e.target.closest('.operations__tab');

//   // guard clause idk wtf
//   if (!clicked) return;

//   //active tab
//   tabs.forEach(t => t.classList.remove('operations__tab--active'));
//   clicked.classList.add('operations__tab--active');

//   //activate content area
//   console.log(clicked.dataset.tab);
//   document
//     .querySelector(`operations__content--${clicked.dataset.tab}`)
//     .classList.add('operations__content--active');
// });

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//don't use this method because it is too many functions being thrown out there
// tabs.forEach(t =>
//   t.addEventListener('click', function (e) {
//     console.log('This is something');
//   })
// );

/////////////////////////////////////////////////////////////////
// notes
/////////////////////////////////////////////////////////////////

/// styles attributes and classes

// const logo = document.querySelector('.nav__logo');

// const alertH1 = function (e) {
//   alert('This is an alert');
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// NOTES

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// old school way. More modern to use add event listener
// h1.onmouseenter = function (e) {
//   alert('you are reading the heading');
// };

//smooth scrolling from NavBar

//dom traversing
//going down
// console.log(h1.querySelectorAll('.highlight'));
// h1.firstElementChild.style.color = 'white';

// //selecting parents, going upwards
// console.log(h1.parentNode);
// h1.closest('h1').style.background = 'var(--gradient-secondary)';

// //going sideways
// console.log(h1.previousElementSibling);
