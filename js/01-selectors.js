/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// const magicButtonEl = document.querySelector('#magic-btn');

// console.dir(magicButtonEl);

// const navLinkEl = document.querySelectorAll('.js-site-nav-link');

// console.log(navLinkEl);

/*
 * Властивості «навігації» по DOM-вузлах
 */
const siteNavEl = document.querySelector('.js-site-nav');

console.log(siteNavEl);
console.log(siteNavEl.children);
console.log(siteNavEl.firstChild); // повертає першу дитину будь-якого вузла
console.log(siteNavEl.firstElementChild); // повертає першу дитину  вузла елементу
console.log(siteNavEl.lastElementChild);

console.log(siteNavEl.previousElementSibling);
console.log(siteNavEl.nextElementSibling);
