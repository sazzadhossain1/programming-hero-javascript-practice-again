// function addNumbers() {
//   console.log(arguments[0]);

//   for (const num of arguments) {
//     console.log(num);
//   }
//   const result =
//     arguments[0] + arguments[1] + arguments[2] + arguments[3] + arguments[4];
//   return result;
// }

// console.log(addNumbers(23, 22, 33, 44, 8));

// ==== Another way ==== //

function sumNumber() {
  let sum = 0;
  for (let number of arguments) {
    sum = sum + number;
  }

  return sum;
}

console.log(sumNumber(10, 20, 30, 40, 100));

function getFullName() {
  let fullName = "";
  for (let name of arguments) {
    fullName = fullName + " " + name;
  }
  return fullName;
}
console.log(getFullName("Mohammad", "Sazzad", "Hossain", "Tomal"));

function birdsName() {
  console.log(arguments);
  let allBirds = "";
  for (let birds of arguments) {
    allBirds = allBirds + " " + birds;
  }
  return allBirds;
}
console.log(birdsName("doyel", "moyna", "tiya"));
