document
  .querySelector("#deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.querySelector("#deposit-input");
    const depositInputText = depositInput.value;
    const depositInputTextNumber = parseFloat(depositInputText);

    if (
      depositInput.value === " " ||
      depositInput.value === "" ||
      depositInputTextNumber !== parseFloat(depositInputText)
    ) {
      alert("Please input valide number");
      depositInput.value = "";
    } else {
      // Previous deposit section
      const previousAmount = document.querySelector("#deposit-total");
      const previousAmountText = previousAmount.innerText;
      const previousAmountTextNumber = parseFloat(previousAmountText);
      previousAmount.innerText =
        previousAmountTextNumber + depositInputTextNumber;
      depositInput.value = "";

      /////////////////////////////////////////////////
      // ========================================== //
      ///////////////////////////////////////////////

      // Add input amount to Blance part
      const previousBlance = document.querySelector("#blance-total");
      const previousBlanceText = previousBlance.innerText;
      const previousBlanceTextNumber = parseFloat(previousBlanceText);

      previousBlance.innerText =
        previousBlanceTextNumber + depositInputTextNumber;
    }
  });

///////////////////////////////////////////////////////
// ================= Withdraw part ================ //
/////////////////////////////////////////////////////

document
  .querySelector("#withdraw-button")
  .addEventListener("click", function () {
    const WithdrawInput = document.querySelector("#Withdraw-input");
    const WithdrawInputText = WithdrawInput.value;
    const WithdrawInputTextNumber = parseFloat(WithdrawInputText);
    WithdrawInput.value = "";
    if (
      WithdrawInput.value === " " ||
      WithdrawInput.value === "" ||
      WithdrawInputTextNumber !== parseFloat(WithdrawInputText)
    ) {
      alert("Please input the valid Number");
    } else {
      // Get previous withdraw
      const previousWithdraw = document.querySelector("#withdraw-total");
      const previousWithdrawText = previousWithdraw.innerText;
      const previousWithdrawTextNumber = parseFloat(previousWithdrawText);
      console.log(previousWithdrawTextNumber);

      previousWithdraw.innerText =
        previousWithdrawTextNumber + WithdrawInputTextNumber;

      // Add input amount to Blance part
      const previousBlance = document.querySelector("#blance-total");
      const previousBlanceText = previousBlance.innerText;
      const previousBlanceTextNumber = parseFloat(previousBlanceText);

      previousBlance.innerText =
        previousBlanceTextNumber - WithdrawInputTextNumber;
    }
  });
// 26 number module er 6 number ta ses 7 number ta start
