function getInput(inputFiled) {
  const bothInputFiled = document.querySelector(inputFiled);
  const inputText = bothInputFiled.value;
  bothInputFiled.value = "";
  const inputTextNumber = parseFloat(inputText);
  return inputTextNumber;
}

document
  .querySelector("#deposit-button")
  .addEventListener("click", function () {
    depositInputTextNumber = getInput("#deposit-input");

    // Previous deposit section
    const previousAmount = document.querySelector("#deposit-total");
    const previousAmountText = previousAmount.innerText;
    const previousAmountTextNumber = parseFloat(previousAmountText);
    previousAmount.innerText =
      previousAmountTextNumber + depositInputTextNumber;

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
    WithdrawInputTextNumber = getInput("#Withdraw-input");

    // Get previous withdraw
    const previousWithdraw = document.querySelector("#withdraw-total");
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawTextNumber = parseFloat(previousWithdrawText);
    console.log(previousWithdrawTextNumber);

    // Add input amount to Blance part
    const previousBlance = document.querySelector("#blance-total");
    const previousBlanceText = previousBlance.innerText;
    const previousBlanceTextNumber = parseFloat(previousBlanceText);

    WithdrawInputTextNumber <= previousBlanceTextNumber;
    previousWithdraw.innerText =
      previousWithdrawTextNumber + WithdrawInputTextNumber;

    //////////////////

    previousBlance.innerText =
      previousBlanceTextNumber - WithdrawInputTextNumber;
  });
// 27 number module er 4 number ta ses 5 number ta start
