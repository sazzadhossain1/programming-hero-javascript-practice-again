document.querySelector("#login-submit").addEventListener("click", function () {
  const emailField = document.querySelector("#user-email");
  const userEmail = emailField.value;

  // get user password
  const passwordField = document.querySelector("#user-password");
  const userPassword = passwordField.value;

  // Check email and password
  if (userEmail === "sazzad@gmail.com" && userPassword === "aaa") {
    window.location.href = "banking.html";
  } else {
    alert("Rong information");
  }
});
