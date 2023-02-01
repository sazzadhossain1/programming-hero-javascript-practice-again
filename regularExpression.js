function takeEmail() {
  const emailInput = document.getElementById("email-input");
  const emailInputValue = emailInput.value;

  const searchText = emailInputValue.search(/@./i);
  console.log(searchText);
  const getRight = document.getElementById("right");
  const getWrong = document.getElementById("wrong");

  if (searchText === 2) {
    console.log(getRight);
    getRight.style.display = "block";
    getWrong.style.display = "none";
  } else {
    getWrong.style.display = "block";
    getRight.style.display = "none";
  }

  emailInput.value = "";
}
