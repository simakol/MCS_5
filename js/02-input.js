/*
 * - Подія input - викликається кожного разу як відбулась зміна в полі вводу (chatty event)
 * - Подія blur - викликається кожного разу як з інпуту пропадає фокус
 * - Подія change - викликається кожного разу як з інпуту пропадає фокус АЛЕ якщо в інпуті щось змінилось
 */

const inputEl = document.querySelector('.js-user-name');
const checkboxPolicyEl = document.querySelector('.js-policy-checkbox');

/*
? Виводь в консоль все що користувач вводить в input

*/

// inputEl.addEventListener('input', handleInput);

// function handleInput(event) {
//   //* v1
//   //   console.log(inputEl.value);

//   //* v2
//   console.log(event.target.value);
// }

/*
? Користувач вводить в input своє ім'я після втрати
? фокусу отримує alert з повідомленням-привітанням
 */

inputEl.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
  const userName = event.target.value;
  console.log('=== BLUR ===');
  console.log(`Hello, ${userName}!`);
  console.log('======');
}

inputEl.addEventListener('change', handleInputChange);

function handleInputChange(event) {
  const userName = event.target.value;
  console.log('=== CHANGE ===');
  console.log(`Hello, ${userName}!`);
  console.log('======');
}

/*
? Після того, як користувач активує чекбокс, виводиться alert
*/

checkboxPolicyEl.addEventListener('change', handleCheckboxChange);

function handleCheckboxChange(event) {
  console.log(event);

  if (event.target.checked) {
    alert('Done!');
  }
}
