function startFan() {
  console.log("Walk towards the switch");
  console.log("Press the switch");
}

startFan();

const bringSingara = (taka) => {
  console.log("Shingra er jonno deya hoyeche", taka);

  const singaraPrice = 10;
  const singaraQuantity = taka / singaraPrice;
  console.log(`Ami ${singaraQuantity} shingara paro ${taka} Takay`);
};

const money = 250;
bringSingara(money);

function addNumber(x, y) {
  const additionNumber = x + y;
  return additionNumber;
}
console.log(addNumber(10, 5));

/////////////////////////////////////////////////

const multiplyTwoNumber = function (num1, num2) {
  const result = num1 * num2;
  return result;
};
console.log(multiplyTwoNumber(10, 20));

function minus(num1, num2) {
  const result = num1 - num2;
  return result;
}
console.log(minus(10, 5));

const dividedFunction = (num1, num2) => {
  const result = num1 / num2;
  console.log(result);
};
dividedFunction(100, 2);
// 19 number module er 4 number ta ses 5 number ta start
