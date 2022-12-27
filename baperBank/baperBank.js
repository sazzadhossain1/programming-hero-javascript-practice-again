document.querySelector("#login-submit").addEventListener("click", function () {
  const emailField = document.querySelector("#user-email");
  const userEmail = emailField.value;

  // get user password
  const passwordfield = document.querySelector("#user-password");
  const userPassword = passwordfield.value;
  console.log(userEmail, userPassword);
});
// 26 number module er 3 number ta ses 4 number ta start
