for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i = i + 2) {
  console.log("Number", " ", i);
}

for (let i = 0; i <= 10; i = i + 2) {
  console.log("This is Even Number", i);
}

const numbers = [45, 22, 34, 45, 33, 23, 21];

let n = 0;
while (n <= numbers.length) {
  console.log(numbers[n]);
  n++;
}

console.log("------- For Loops -------");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const items = ["bottle", "mobile", "charger", "lighter"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

console.log("-------------- Sum of all Numbers -------------");

const number = [10, 20, 30, 40, 50, 50, 70];

// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   const elements = number[i];

//   sum = sum + elements;
// }
// console.log(sum);

function sumArrayNumber(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    sum = sum + element;
  }
  console.log(sum);
}
sumArrayNumber(number);

console.log("======== Get Leargest Number =======");

function lergestElements(num) {
  let largest = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (largest < element) {
      largest = element;
    }
  }
  console.log(largest);
}

lergestElements(number);
