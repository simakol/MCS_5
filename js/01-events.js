/*
 * Подія сlick
 *
 * - Іменування колбеків для слухачів
 * - handle*: handleSubjectEvent
 * - *Handler: subjectEventHandler
 * - on*: onSubjectEvent
 */

/*
? Натискаючи на кнопку "Click me" змусь
? червоний квадратик зміщуватись на 50px по діагоналі
*/

const refs = {
  clickBtn: document.querySelector('.js-click'),
  resetBtn: document.querySelector('.js-reset'),
  box: document.querySelector('.js-box'),
};

// refs.clickBtn.addEventListener('click', handleClick);

// let count = 0;

// function handleClick() {
//   count += 1;
//   console.log('Ви клікнули на кнопку!');
//   console.log(`Ви клінкули ${count} разів`);
// }

//! ====

refs.clickBtn.addEventListener('click', handleClick);
refs.resetBtn.addEventListener('click', handleResetClick);

let step = 0;

function handleClick(event) {
  console.log(event); // обʼєкт з усією актуальною інформацією про дану подію

  step += 50;
  refs.box.style.transform = `translate(${step}px, ${step}px)`;

  if (step === 200) {
    refs.clickBtn.disabled = true;
    refs.clickBtn.removeEventListener('click', handleClick);
  }
}

function handleResetClick() {
  step = 0;
  refs.box.style.transform = `translate(${step}px, ${step}px)`;
  refs.clickBtn.disabled = false;
  refs.clickBtn.addEventListener('click', handleClick);
}
