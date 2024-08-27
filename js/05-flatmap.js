/*
 * Метод flatMap
 */

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const flatArr = arr.flat();

// console.log(arr);
// console.log(flatArr);

// console.log([[4, 6, [2342, [234234, 4444]], [234234], [2342, [234, [5]]]]].flat(Infinity));

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

console.log(tweets);

// const tags = tweets.map(el => el.tags).flat();
// const tags = tweets.flatMap(el => el.tags)

//* v1
// const tags = tweets.flatMap(el => el.tags)
// const uniqueTags = [];

// tags.forEach(el => (uniqueTags.includes(el) ? '' : uniqueTags.push(el)));

// console.log(tags);
// console.log(uniqueTags);

//* v2
// const tags = tweets.flatMap(el => el.tags);
// const uniqueTags = [...new Set(tags)];

// console.log(uniqueTags);

//* v3 -> filter + indexOf
const tags = tweets.flatMap(el => el.tags);
const uniqueTags = tags.filter((el, i) => tags.indexOf(el) === i);

console.log(uniqueTags);
