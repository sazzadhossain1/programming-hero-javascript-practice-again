// const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
// const bigNumbers = numbers.filter((number) => number > 20);
// console.log(bigNumbers);

// const smallNumber = numbers.filter(function (number) {
//   if (number < 10) {
//     return number;
//   }
// });
// console.log(smallNumber);

// const procucts = [
//   { name: "water bottle", price: 50, color: "yellow" },
//   { name: "mobile phone", price: 15000, color: "black" },
//   { name: "smart watch", price: 3000, color: "black" },
//   { name: "sticky note", price: 30, color: "pink" },
//   { name: "water glass", price: 3, color: "white" },
// ];

// const expecsive = procucts.filter((pro) => pro.price > 50);
// console.log(expecsive);

// const blackProduct = procucts.filter((product) => product.color === "black");
// console.log(blackProduct);

// // Find
// const whiteItem = procucts.find((product) => product.color === "pink");
// console.log(whiteItem);

const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter((number) => number > 20);
console.log(bigNumbers);

const smallNumber = numbers.filter((number) => number < 10);
console.log(smallNumber);

const procucts = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];

const expecsive = procucts.filter((procuct) => procuct.price > 50);
console.log(expecsive);

const productColor = procucts.filter(function (pColor) {
  return pColor.color === "black";
});
console.log(productColor);

const productPink = procucts.filter((procuct) => procuct.color === "pink");
console.log(productPink);

// Find
const pink = procucts.find((procuct) => procuct.color === "pink");
console.log(pink);
