// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// }

// const number = 146;
// const isMyNumberEven = isEven(number);
// console.log(isMyNumberEven);

// const evenNumberFunction = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const myNumber = 2;
// const myEvenNumber = evenNumberFunction(myNumber);
// console.log(myEvenNumber);

const evenNumber = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const number = 1;

const proveEven = evenNumber(number);
console.log(proveEven);

const oddNumber = (num) => {
  if (num % 2 === 1) {
    return true;
  }
  return false;
};

const myNum = 1;
const provedOdd = oddNumber(myNum);
console.log(provedOdd);

console.log("-------- Leap Year -------");

function isLeapYear(year) {
  if (year % 2 === 0) {
    return true;
  }
  return false;
}

const myYear = 2100;
console.log(isLeapYear(myYear));
// 20 number module er 7 number ta ses 8 number ta start
