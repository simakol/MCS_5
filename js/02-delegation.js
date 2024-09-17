/*
 * Додавання прослуховувача подій на кожен елемент
 */

//? Отримай колір квадратика по якому було здійснено клік

//! варіант як робити не треба (без делегування)
// const allBoxesEl = document.querySelectorAll('.js-box');

// allBoxesEl.forEach(box => {
//   //   box.addEventListener('click', () => console.log(event.target.dataset.color));
//   box.addEventListener('click', () => console.log(box.dataset.color));
// });

/*
 * Дегегування подій
 */

//? Отримай колір квадратика по якому було здійснено клік

const containerEl = document.querySelector('.js-container');

containerEl.addEventListener('click', handleBoxClick);

// function handleBoxClick(event) {
//   console.log('event.target ->', event.target);
//   console.log('event.currentTarget ->', event.currentTarget);

//   //   if (event.target.classList.contains('box')) {
//   //   if (event.target.dataset.color) {
//   if (event.target !== event.currentTarget) {
//     console.log(`Box color: ${event.target.dataset.color}`);
//   }
// }

function handleBoxClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  console.log(`Box color: ${event.target.dataset.color}`);
}
