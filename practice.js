const favoriteBook = "Rich dad VS Por dad";
const bookList = ["positioning", "hooked", "Start with why", "Shoe dog"];
console.log(bookList);

if (bookList[1] === "hooked") {
  console.log("I am hooked");
} else {
  console.log("There is no hooked");
}

let i = 0;
while (i <= 15) {
  console.log(i);
  i++;
}

for (let i = 0; i <= 10; i++) {
  console.log(i + 5);
}

console.log("------------ if else break and countinue ---------");

const phones = ["iphone", "shaomi", "samsung", "lg", "htc"];
phones[3] = "walton";
console.log(phones);

if (phones.indexOf("oppo") === -1) {
  console.log("There is no oppo phone");
}

if (phones.indexOf("walton") !== -1) {
  console.log("walton phone is available now");
}

console.log(
  "---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);
// let n = 1;
// for (let i = 1; i <= 7; i++) {
//   //   console.log(i);
//   n = n * i;
//   console.log(n);
// }

// function factory(num) {
//   let n = 1;
//   for (let i = 1; i <= num; i++) {
//     n = n * i;
//   }
//   console.log(n);
// }

// factory(5);

// let n = 1;
// for (let i = 1; i <= 7; i++) {
//   //   console.log(i);
//   n = n * i;
//   console.log(n);
// }

// function getFactorial(number) {
//   let factorial = 1;
//   for (let i = 1; i <= number; i++) {
//     factorial = factorial * i;
//     console.log(factorial);
//   }
//   return factorial;
// }

// console.log(getFactorial(5));

const arrowFactorialFunction = (number) => {
  let num = 1;
  for (let i = 1; i <= number; i++) {
    num = num * i;
    console.log(num);
  }
  return num;
};

const getResult = arrowFactorialFunction(10);
console.log(getResult);

console.log("-------- while loop ---------");

function whileLoopFactoryFunction(number) {
  let num = 1;
  let i = 1;
  while (i <= number) {
    num = num * i;
    i++;
    console.log(num);
  }
  return num;
}

const resultWhileLoopFunction = whileLoopFactoryFunction(20);
console.log(resultWhileLoopFunction);

console.log("======= Reverse =======");

function reverseLoopFunction(number) {
  let num = 1;
  for (let i = number; i >= 1; i--) {
    num = num * i;
    console.log(num);
  }
  return num;
}

console.log(reverseLoopFunction(10));

console.log(
  "-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);

function loopFunction(number) {
  let n = 1;
  for (let i = 1; i <= number; i++) {
    n = n * i;
    console.log(n);
  }
  return n;
}

const resultLoopFunction = loopFunction(10);
console.log(resultLoopFunction);

// Practice home work
//-------------------
// 1. celcius to faren heit (celcius)
// 2. A+ greating sestem
// 3. simple interest calculation formula
