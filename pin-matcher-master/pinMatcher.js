function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    // console.log("got 3 digit and calling again", pin);
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.querySelector("#display-pin").value = pin;
}

/////////////////////////////////////////

document.querySelector("#key-padd").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const calcInput = document.querySelector("#typed-numbers");
  if (isNaN(number)) {
    if (number === "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});
// 28 number module er 6 number ta ses 7 number ta start
