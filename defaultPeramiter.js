function add(num1, num2 = 30) {
  if (num2 === undefined) {
    num2 = 30;
  }

  const total = num1 + num2;
  return total;
}

const result = add(15, 30);
console.log(result);
