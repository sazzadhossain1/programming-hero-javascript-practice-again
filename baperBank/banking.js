// // get input function
// function getInputValue(inputId) {
//   const inputFiled = document.querySelector(inputId);
//   const inputAmountText = inputFiled.value;
//   inputFiled.value = "";
//   const amountValue = parseFloat(inputAmountText);
//   return amountValue;
// }

// // addition function
// function updateTotalField(totalFiledId, amount) {
//   const totalElement = document.querySelector(totalFiledId);
//   const totalText = totalElement.innerText;
//   const previousTotal = parseFloat(totalText);

//   totalElement.innerText = previousTotal + amount;
// }

// document
//   .querySelector("#deposit-button")
//   .addEventListener("click", function () {
//     // function call
//     const depositInputTextNumber = getInputValue("#deposit-input");

//     updateTotalField("#deposit-total", depositInputTextNumber);

//     /////////////////////////////////////////////////
//     // ========================================== //
//     ///////////////////////////////////////////////

//     // Add input amount to Blance part
//     const previousBlance = document.querySelector("#blance-total");
//     const previousBlanceText = previousBlance.innerText;
//     const previousBlanceTextNumber = parseFloat(previousBlanceText);

//     previousBlance.innerText =
//       previousBlanceTextNumber + depositInputTextNumber;
//   });

// ///////////////////////////////////////////////////////
// // ================= Withdraw part ================ //
// /////////////////////////////////////////////////////

// document
//   .querySelector("#withdraw-button")
//   .addEventListener("click", function () {
//     // function call
//     const WithdrawInputTextNumber = getInputValue("#Withdraw-input");

//     updateTotalField("#withdraw-total", WithdrawInputTextNumber);

//     ////////////////////
//     const previousBlance = document.querySelector("#blance-total");
//     const previousBlanceText = previousBlance.innerText;
//     const previousBlanceTextNumber = parseFloat(previousBlanceText);

//     previousBlance.innerText =
//       previousBlanceTextNumber - WithdrawInputTextNumber;
//   });
///////////////////////////////
///////////////////////
////////////////

// /// Clener code
// function getInputValue(fieldId) {
//   const inputfield = document.getElementById(fieldId);
//   const valueInText = inputfield.value;
//   const value = parseFloat(valueInText);
//   inputfield.value = "";
//   return value;
// }
// function updateTotal(fieldId, amount) {
//   const depositTotal = document.getElementById(fieldId);
//   const previousTotal = parseInt(depositTotal.innerText);

//   const newTotal = previousTotal + amount;
//   depositTotal.innerText = newTotal;
// }

// // Update Blancce
// function updateBlance(amount, isPlus) {
//   const blanceTag = document.getElementById("blance-total");
//   const blanceInText = parseFloat(blanceTag.innerText);
//   let newBlance;
//   if (isPlus) {
//     newBlance = blanceInText + amount;
//   } else {
//     newBlance = blanceInText - amount;
//   }
//   blanceTag.innerText = newBlance;
// }

// // Handel deposit
// document
//   .getElementById("deposit-button")
//   .addEventListener("click", function () {
//     const amount = getInputValue("deposit-input");
//     updateTotal("deposit-total", amount);
//     updateBlance(amount, true);
//   });

// // Handel withdraw
// document
//   .getElementById("withdraw-button")
//   .addEventListener("click", function () {
//     const amount = getInputValue("Withdraw-input");
//     updateTotal("withdraw-total", amount);
//     updateBlance(amount, false);
//   });

///////////////////////////////////////

// Get input value
function getInputValue(inputfield) {
  const getInput = document.getElementById(inputfield);
  const getInputValue = parseFloat(getInput.value);
  getInput.value = "";

  return getInputValue;
}

// Get deposit and withdraw amount
function depositAndWithdraw(textAmount, amount) {
  const getTextAmount = document.getElementById(textAmount);
  const numberGetTextAmount = parseFloat(getTextAmount.innerText);
  getTextAmount.innerText = numberGetTextAmount + amount;
}

// Get balance Number
function balanceNumber(inner) {
  const getBalance = document.getElementById(inner);
  const getBalanceText = parseFloat(getBalance.innerText);
  return getBalanceText;
}

// Get Blance Amount
function blanceAmount(amount, isPlus) {
  const blanceTotal = document.getElementById("blance-total");
  const blanceTotalText = parseFloat(blanceTotal.innerText);
  if (isPlus) {
    blanceTotal.innerText = blanceTotalText + amount;
  } else {
    blanceTotal.innerText = blanceTotalText - amount;
  }
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const inputAmount = getInputValue("deposit-input");
    if (inputAmount > 0) {
      depositAndWithdraw("deposit-total", inputAmount);
      blanceAmount(inputAmount, true);
    } else {
      alert("Please input the positive Number");
    }
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const inputAmount = getInputValue("Withdraw-input");
    const getBalance = balanceNumber("blance-total");

    if (inputAmount >= 0) {
      if (inputAmount <= getBalance) {
        depositAndWithdraw("withdraw-total", inputAmount);
        blanceAmount(inputAmount, false);
      } else {
        alert("You do not have enough balance");
      }
    } else {
      alert("Please input the positive Number");
    }
  });
