const add = (num1, num2) => {
  if (num2 === undefined) {
    num2 = 10;
  }
  const sum = num1 + num2;
  return sum;
};

console.log(add(15));

const multiply = (num1, num2, num3) => {
  return num1 * num2 * num3;
};
console.log(multiply(4, 12, 3));
