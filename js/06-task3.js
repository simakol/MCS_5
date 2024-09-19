/*
? Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
? так щоб вона приймала об'єкт з параметрами будинку,
? включаючи довжини сторін будинку.
? Функція повинна розрахувати та повернути периметр будинку.
 */

// function calculateHousePerimeter({sideA, sideB, sideC, sideD}) {
//   return sideA + sideB + sideC + sideD;
// }

function calculateHousePerimeter(sides) {
  return Object.values(sides).reduce((sum, side) => sum + side, 0);
}

const houseSides = {
  sideA: 10,
  sideB: 15,
  sideC: 10,
  sideD: 15,
};

const perimeter = calculateHousePerimeter(houseSides);

console.log(`Периметр будинку: ${perimeter}`);
