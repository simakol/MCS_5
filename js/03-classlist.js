/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

//* Робота з інлайновими стилями
// const navLinkEl = document.querySelector('.js-site-nav-link');

// navLinkEl.style.color = 'red';
// navLinkEl.style.backgroundColor = 'blue';
// navLinkEl.style.textDecoration = 'none';

// console.dir(navLinkEl);

//* Робота з класами
const currentPage = '/portfolio';

const navLinkEl = document.querySelector(`a[href="${currentPage}"]`);

console.log(navLinkEl);
console.log(navLinkEl.classList);

navLinkEl.classList.add('current-link', 'some-class');
navLinkEl.classList.remove('some-class');

console.log(navLinkEl.classList.contains('site-nav-link')); // true
console.log(navLinkEl.classList.contains('some-class')); // false

// додає клас, коли його немає і видаляє, коли він є
navLinkEl.classList.toggle('some-class');
navLinkEl.classList.toggle('some-class');
navLinkEl.classList.toggle('some-class');

navLinkEl.classList.replace('some-class', 'my-new-class');

// console.dir(navLinkEl);

// if (mobileMenuEl.classList.contains('is-open')) {
//   mobileMenuEl.classList.remove('is-open');
// } else {
//   mobileMenuEl.classList.add('is-open');
// }

// mobileMenuEl.classList.toggle('is-open');
