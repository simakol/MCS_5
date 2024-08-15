/*
 * - Стек викликів
 * - Порядок виконання
 */

//http://latentflip.com/loupe/
//https://www.jsv9000.app/

const fn1 = function () {
  console.log('fn1 execution');

  fn2();
};

const fn2 = function () {
  console.log('fn2 execution');

  fn3();
};

const fn3 = function () {
  console.log('fn3 execution');
};

fn1();
