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

/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Sum Function
function sumFunction(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    sum = sum + element;
  }
  console.log(sum);
}
sumFunction(number);

// Get biggest Number
function bigFun(num) {
  let bigestNumber = 0;
  for (let i = 0; i < num.length; i++) {
    let element = num[i];
    if (bigestNumber < element) {
      bigestNumber = element;
    }
  }
  console.log(bigestNumber);
}
bigFun(number);

// Get Minume Number
function minFunction(num) {
  let element = num[0];
  for (let i = 0; i < num.length; i++) {
    if (element > num[i]) {
      element = num[i];
    }
  }
  console.log(element);
}
minFunction(number);

// Remove Duplicate Number
function reDup(nam) {
  const unique = [];
  for (let i = 0; i < nam.length; i++) {
    if (unique.indexOf(nam[i]) === -1) {
      unique.push(nam[i]);
    }
  }
  console.log(unique);
}
reDup(names);

///////////////////////////////////////////

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FooBar");
  } else if (i % 3 === 0) {
    console.log("Foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}

/////////////////////////////////////////////////////////
///////////////////////////////////////////////
/////////////////////////////

// for (let i = 7; i <= 19; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let oddNumber = 1;
// while (oddNumber <= 10) {
//   console.log(oddNumber);
//   oddNumber = oddNumber + 2;
// }

// for (let i = 1; i <= 10; i = i + 2) {
//   console.log(i);
// }

// function getBig(num) {
//   let big = 0;
//   for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     if (big < element) {
//       big = big + element;
//     }
//   }
//   console.log(big);
// }
// getBig(number);

// console.log("========= Convert feet to inch =========");

// function feetToInch(feet) {
//   const perInch = 12;
//   let totalInch = perInch * feet;
//   console.log(totalInch);
// }
// feetToInch(2);

// console.log("=========== Get Book Page ===========");

// function pageRequirements(firstB, secondB, thirdB) {
//   const firstBookPage = 100;
//   const totalPage = firstBookPage * firstB;
//   console.log(totalPage);

//   const secondBookPage = 200;
//   const totalPage2 = secondBookPage * secondB;
//   console.log(totalPage2);

//   const thirdBookPage = 300;
//   const totalPage3 = thirdBookPage * thirdB;
//   console.log(totalPage3);
// }

// pageRequirements(5, 2, 100);

// console.log("======= Best Friend Get Big Name ========");

// function bestFriend(fri) {
//   let bigName = fri[0];

//   for (let i = 0; i < fri.length; i++) {
//     const element = fri[i];
//     if (bigName.length < element.length) {
//       bigName = element;
//     }
//   }
//   console.log(bigName);
// }

// const friend = ["sazzad", "hossain", "tomal"];
// bestFriend(friend);

// console.log("========= Stope loop when get -1 number =======");
// function onlyPositive(num) {
//   for (let n of num) {
//     if (n === -1) {
//       break;
//     } else {
//       console.log(n);
//     }
//   }
// }
// const numbers = [12, 23, 2, 11, -1, 45, 56, 67];
// onlyPositive(numbers);

// let name = "sazzad";
// let nam = name.toUpperCase();
// console.log(nam);
// ///////////////////////////////////////////////////////////
// // Event Delegate

// const addItem = document.querySelector(".add-item");
// addItem.addEventListener("click", function () {
//   const createLi = document.createElement("li");
//   createLi.classList.add("item");
//   createLi.innerText = "This is a new Li";

//   const getUl = document.querySelector("#ul-parent");
//   getUl.appendChild(createLi);
// });

// // Remove li items
// const getUl = document.querySelector("#ul-parent");
// getUl.addEventListener("click", function (e) {
//   e.target.parentNode.removeChild(e.target);
// });

// ///////////////////////////////////////////////////////
// //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

// const button1 = document.querySelector(".button-1");
// button1.addEventListener("click", function () {
//   const input1 = document.querySelector(".input-1");
//   const inputValue = input1.value;
//   console.log(inputValue);
//   input1.value = "";
// });

// const button2 = document.querySelector(".button-2");
// button2.addEventListener("click", function () {
//   const input2 = document.querySelector(".input-2");
//   const input2Value = input2.value;
//   console.log(input2Value);
// });

// const button3 = document.querySelector(".button-3");
// button3.addEventListener("click", function () {
//   const input1 = document.querySelector(".input-1");
//   const input1Value = input1.value;

//   const input2 = document.querySelector(".input-2");
//   const input2Value = input2.value;

//   const sentense = input1Value + " " + input2Value;
//   console.log(sentense);
// });
// ////////////////////////////////////////////////
// var calcInput = "Hello TecAdmin!";

// // Remove last character of string
// calcInput = calcInput.substring(0, calcInput.length - 1);

// // Print result string
// console.log(calcInput);

// //////////////////////////////////////////////////////
// //////////////////////////////////////////
// /////////////////////////////

// document.getElementById("create-li").addEventListener("click", function () {
//   const ulParenId = document.getElementById("ul-paren-id");
//   const li = document.createElement("li");
//   li.classList.add("li-item");
//   li.innerText = "This is new List item";
//   ulParenId.appendChild(li);
// });

// // document.getElementById("ul-paren-id").addEventListener("click", function (e) {
// //   e.target.parentNode.removeChild(e.target);
// // });

// document.getElementById("remove-li").addEventListener("click", function (e) {
//   const liItem = document.querySelector(".li-item");
//   liItem.parentNode.removeChild(liItem);
// });
// const colorH1 = document.querySelector(".color");
// colorH1.style.color = "red";

// ///////////////////////////////////////////

// // update input filed's amount
// const btn = document.getElementById("increase-button");
// btn.addEventListener("click", function () {
//   const numberInput = document.getElementById("number-input");

//   if (numberInput.value < 5) {
//     const numberInputValue = parseInt(numberInput.value);
//     numberInput.value = numberInputValue + 1;
//   } else if (numberInput.value <= 5) {
//     btn.disabled = true;
//   } else {
//     alert("You cannot increase the number above 5");

//     numberInput.value = "";
//   }
// });

const jsBook = ["jsBangladesh", "jsBangla", "jsEnglish", "bangla", "english"];
let javascriptBook = [];
for (let js of jsBook) {
  if (js.includes("js")) {
    javascriptBook.push(js.toLowerCase());
  }
}
console.log(javascriptBook);
console.log(jsBook[1].toUpperCase());

const number1 = [10, 9, 5, 15, 1, 4, 2, 3, 7, 5, 19, 20, 6];
const sortNumber = number1.sort(function (a, b) {
  return a - b;
});
console.log(sortNumber);

console.log("------------- 32_5-1 ------------");

const person = {
  name: "Sazzad",
  id: 1,
};

const numbers = [22, 26, 12, 30];
const sentence = `My name is ${person.name} and i am ${numbers[1]} years old`;
console.log(sentence);

const dividingFunction = (num) => {
  return num / 5;
};
console.log(dividingFunction(50));

const toPeramiters = (num1, num2) => {
  const n1 = num1 + 2;
  const n2 = num2 + 2;

  const multiply = n1 * n2;
  return multiply;
};

console.log(toPeramiters(10, 20));

const threePeramiter = (num1, num2, num3) => {
  return num1 * num2 * num3;
};
console.log(threePeramiter(10, 20, 30));

const multiLineFunction = (name, profetion) => {
  return `I am ${name} and I am a ${profetion}`;
};
console.log(multiLineFunction("Sazzad Hossain", "Front-End Web Developer"));

abc();
function abc() {
  console.log("sadfsdafdsf");
}

// newAbc();
const newAbc = function () {
  console.log("sadfsdafdsf");
};

newAbc();

// newAbc1("asdfsdfdsfsdfsdafsdafsdsf");
let newAbc1 = () => {
  console.log("asdfewewewewewewesadfdsf");
};
newAbc1();

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapNumberArray = numbersArray.map((number) => {
  return number * 5;
});
console.log(mapNumberArray);

const mapNumberArrayAgain = numbersArray.map((number) => {
  return number * 100;
});

console.log(mapNumberArrayAgain);

// get odd numbers from the numbersArray
for (let i = 0; i <= numbersArray.length; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
console.log("-------------------");
// Get even number from the numbersArray
for (let i = 0; i <= numbersArray.length; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("-----------------------");
// Get odd number by using filter method
const filterMethod = numbersArray.filter((number) => {
  if (number % 2 === 1) {
    return number;
  }
});
console.log(filterMethod);

const procucts = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];

const findProduct = procucts.find((procuct) => {
  if (procuct.price === 3000) {
    return procuct;
  }
});
console.log(findProduct);

// Destructuring
const ob = {
  name: "water bottle",
  price: 50,
  color: "yellow",
};

const { name } = ob;
console.log(name);

const nm = ["Sazzad", "Hossain", "Tomal", "Mohammad"];
const [thirdName] = [nm[3]];
console.log(thirdName);

// Default peramiters
function defaultPeramiters(num1, num2, num3) {
  if (num3 === undefined) {
    num3 = 100;
  }
  const sum = num1 + num2 + num3;
  return sum;
}

console.log(defaultPeramiters(10, 20));
