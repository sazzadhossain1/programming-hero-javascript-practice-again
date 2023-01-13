const numbers = [23, 65, 88, 21, 45];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 65, 88, 21);
console.log(max);

const max1 = Math.max(...numbers);
console.log(max1);

//======================

const numbers2 = [...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
