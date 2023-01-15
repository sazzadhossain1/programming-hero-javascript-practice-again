const numbers = [4, 6, 8, 10];
const output = [];

const doubleIt = (number) => {
  return number * 2;
};

for (let number of numbers) {
  const result = doubleIt(number);
  output.push(result);
}
// console.log(output);

const output1 = numbers.map(function (num) {
  return num * 2;
});
console.log(output1);

//////////////////////////////////////////////////
//////////////// Js Bangladesh //////////////////
////////////////////////////////////////////////

const names = ["mohammad", "Sazzad", "hossain", "tomal"];
const nameUpperCase = names.map(function (name) {
  return name.toUpperCase();
});
console.log(nameUpperCase);
console.log(names);

//------------------------------

const number = [10, 20, 30, 40];
const name = ["shah", "mohammad", "yeasin", "hossain"];
const object = [
  { name: "Humayun Ahmed", availableBook: 30 },
  { name: "Jafar Iqbal", availableBook: 10 },
  { name: "Ahmed Sofa", availableBook: 5 },
  { name: "freelancer Omuk", availableBook: 1 },
];

const newNumber = number.map(function (curentValue, index, arr) {
  console.log(curentValue * 2);
  console.log(index);
  console.log(arr);
});

const nameMap = name.map((nm) => {
  return nm.toUpperCase();
});

console.log(nameMap);

const newObject = object.map((item) => {
  return item.availableBook * 50;
});

console.log(newObject);

//////////////////////////////////////////////////
///////////////// Jhankar vai ///////////////////
////////////////////////////////////////////////

const friends = ["solim", "saidee", "shojib", "sagor"];

const friendLength = [];
const fLength = friends.map((fl) => {
  return friendLength.push(fl.length);
});
console.log(friendLength);

//------------------------------------

const procucts = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];

const productNames = procucts.map((product) => {
  return product.name;
});
console.log(productNames);
const productPrice = procucts.map((productPrice) => {
  return productPrice.price;
});
console.log(productPrice);
