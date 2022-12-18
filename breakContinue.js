let i = 0;
while (i < 10) {
  console.log(i);
  if (i == 5) {
    break;
  }
  i++;
}

for (let i = 0; i < 10; i++) {
  console.log("this is ", i);

  if (i === 5) {
    break;
  }
}

const numbers = [11, 22, 33, 44, 55, 66, 77, 21, 31, 42, 100];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] === 44) {
    break;
  }
}

console.log("---------- Continue -----------");
console.log("---------- Continue -----------");
console.log("---------- Continue -----------");

const numberArray = [10, 18, 30, 50, 70, 100, 200, 110, 500, 520, 400];
for (let i = 0; i < numberArray.length; i++) {
  if (numberArray[i] > 110) {
    continue;
  }
  console.log(numberArray[i]);
}
