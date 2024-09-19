/*
? Допиши функцію таким чином щоб кожна властивість
? об'єкта product була незалежним параметром
 */

const product = {
  title: 'Smart TV',
  price: 25000,
  category: 'Electronics',
  details: {
    brand: 'Samsung',
    color: 'Black',
    weight: '15.5',
  },
};

//* Деструктуризація в середині функції
function displayProductInfo(obj) {
  console.log(`Назва товару: ${title}`);
  console.log(`Ціна: ${price} грн`);
  console.log(`Категорія: ${category}`);
  console.log('Деталі:');
  console.log(`- Бренд: ${brand}`);
  console.log(`- Колір: ${color}`);
  console.log(`- Вага: ${weight} кг`);
}

displayProductInfo(product);

//? Деструктуризація в параметрах функції
// function displayProductInfo(obj) {
//   console.log(`Назва товару: ${title}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log('Деталі:');
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);
