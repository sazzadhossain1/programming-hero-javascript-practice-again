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

console.log("========== Sum Element from the array ==========");

const number = [10, 20, 30, 40, 50, 60, 70];

function sumArrayNumber(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    sum = sum + element;
  }
  console.log(sum);
}
sumArrayNumber(number);

console.log("======== Get Bigest number from the array ========");

function getBigNumber(num) {
  let getBigNumber = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element > getBigNumber) {
      getBigNumber = element;
    }
  }
  console.log(getBigNumber);
}

getBigNumber(number);

console.log("==================================================");

function sumFunction(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    sum = sum + element;
  }
  console.log(sum);
}
sumFunction(number);
console.log("==================================================");

function bigestFunction(num) {
  let getBigNumber = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element > getBigNumber) {
      getBigNumber = element;
    }
  }
  console.log(getBigNumber);
}
bigestFunction(number);

console.log("=============== Find min number ===============");

const minimumNumber = [10, 2, 20, 30, 40, 50, 60, 70];

function minNumber(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  console.log(min);
}
minNumber(minimumNumber);

console.log("========== Practice More ============");
const getMinumeNumber = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  console.log(min);
};

getMinumeNumber(minimumNumber);

console.log("=========== Math.max and Math.min ==========");

console.log(Math.max(...number));
console.log(Math.min(...number));

console.log("============= xxxxxxxxxxxx =============");

// Find Max Number //
// function maxNumber(num) {
//   let element = num[0];
//   for (let i = 0; i < num.length; i++) {
//     if (element < num[i]) {
//       element = num[i];
//     }
//   }
//   console.log(element);
// }
// maxNumber(number);

// Find Min Number //
function minNumber(num) {
  let element = num[0];
  for (let i = 0; i < num.length; i++) {
    if (element > num[i]) {
      element = num[i];
    }
  }
  console.log(element);
}

minNumber(number);

console.log("=========== Remove Duplicate Number ============");

const names = [
  "sazzad",
  "hossain",
  "tomal",
  "yeasin",
  "sazzad",
  "yeasin",
  "tomal",
];

function removeDuplicate(nam) {
  const unique = [];

  for (let element of nam) {
    if (unique.indexOf(element) === -1) {
      unique.push(element);
    }
  }
  console.log(unique);
}

removeDuplicate(names);

console.log("========== Regular for loop ==========");

function remove(nam) {
  const unique = [];
  for (let i = 0; i < nam.length; i++) {
    if (unique.indexOf(nam[i]) === -1) {
      unique.push(nam[i]);
    }
  }

  return unique;
}

console.log(remove(names));
