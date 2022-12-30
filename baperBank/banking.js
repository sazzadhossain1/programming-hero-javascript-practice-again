// get input function
function getInputValue(inputId) {
  const inputFiled = document.querySelector(inputId);
  const inputAmountText = inputFiled.value;
  inputFiled.value = "";
  const amountValue = parseFloat(inputAmountText);
  return amountValue;
}

// addition function
function updateTotalField(totalFiledId, amount) {
  const totalElement = document.querySelector(totalFiledId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);

  totalElement.innerText = previousTotal + amount;
}

document
  .querySelector("#deposit-button")
  .addEventListener("click", function () {
    // function call
    const depositInputTextNumber = getInputValue("#deposit-input");

    updateTotalField("#deposit-total", depositInputTextNumber);
    /////////////////////////////////////////////////
    // ========================================== //
    ///////////////////////////////////////////////

    // Add input amount to Blance part
    const previousBlance = document.querySelector("#blance-total");
    const previousBlanceText = previousBlance.innerText;
    const previousBlanceTextNumber = parseFloat(previousBlanceText);

    previousBlance.innerText =
      previousBlanceTextNumber + depositInputTextNumber;
  });

///////////////////////////////////////////////////////
// ================= Withdraw part ================ //
/////////////////////////////////////////////////////

document
  .querySelector("#withdraw-button")
  .addEventListener("click", function () {
    // function call
    const WithdrawInputTextNumber = getInputValue("#Withdraw-input");

    // Get previous withdraw
    // const previousWithdraw = document.querySelector("#withdraw-total");
    // const previousWithdrawText = previousWithdraw.innerText;
    // const previousWithdrawTextNumber = parseFloat(previousWithdrawText);
    updateTotalField("#withdraw-total", WithdrawInputTextNumber);

    ////////////////////
    const previousBlance = document.querySelector("#blance-total");
    const previousBlanceText = previousBlance.innerText;
    const previousBlanceTextNumber = parseFloat(previousBlanceText);

    previousBlance.innerText =
      previousBlanceTextNumber - WithdrawInputTextNumber;
  });
