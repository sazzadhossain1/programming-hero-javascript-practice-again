function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
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
    } else if (number === "<") {
      calcInput.value = calcInput.value.slice(0, -1);

      console.log(calcInput);
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

//////////////////////////////////////////////////

function verifyPin() {
  const pin = document.querySelector("#display-pin").value;
  const typed = document.querySelector("#typed-numbers");
  const typedNumbers = typed.value;

  const successMessage = document.querySelector("#notify-success");
  const failError = document.querySelector("#notify-fail");

  if (pin === typedNumbers) {
    successMessage.style.display = "block";
    failError.style.display = "none";
  } else {
    failError.style.display = "block";
    successMessage.style.display = "none";
  }

  typed.value = "";
}
