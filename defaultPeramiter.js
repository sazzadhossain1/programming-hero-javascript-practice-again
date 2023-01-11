function add(num1, num2 = 30) {
  if (num2 === undefined) {
    num2 = 30;
  }

  const total = num1 + num2;
  return total;
}

const result = add(15, 30);
console.log(result);
// 31 number module er 5 number ta ses 6 number ta start
