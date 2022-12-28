// document.querySelector("#deposit-button");
// .addEventListener("click", function () {
//   // Get the amount deposited
//   const depositinput = document.querySelector("#deposit-input");
//   const newDepositAmountText = depositinput.value;
//   const newDepositAmount = parseFloat(newDepositAmountText);
//   console.log(newDepositAmount);

//   ///
//   const depositTotal = document.querySelector("#deposit-total");
//   const previousDepositText = depositTotal.innerText;

//   const previousDepositAmount = parseFloat(previousDepositText);
//   const newDeposittotal = previousDepositAmount + newDepositAmount;

//   depositTotal.innerText = newDeposittotal;
//   // Clear the deposit input field
//   depositinput.value = "";
// });

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

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
    console.log(WithdrawInputTextNumber);

    WithdrawInput.value = "";

    // Get previous withdraw
    const previousWithdraw = document.querySelector("#withdraw-total");
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawTextNumber = parseFloat(previousWithdrawText);
    console.log(previousWithdrawTextNumber);

    previousWithdraw.innerText =
      previousWithdrawTextNumber + WithdrawInputTextNumber;

    // minus fro Blance when i withdraw money
  });
// 26 number module er 6 number ta ses 7 number ta start
