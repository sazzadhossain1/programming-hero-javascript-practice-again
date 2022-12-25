const deleteButton = document.querySelector("#delete-button");

deleteButton.addEventListener("click", function () {
  console.log("sdfasdfsadf");
  const secretInfo = document.querySelector("#secret-info");
  secretInfo.style.display = "none";
});
const deleteConfirm = document.querySelector("#delete-confirm");

deleteConfirm.addEventListener("focus", function () {
  document.body.style.backgroundColor = "red";
});
const blourDeleteConfirm = document.querySelector("#delete-confirm");

blourDeleteConfirm.addEventListener("blur", function () {
  document.body.style.backgroundColor = "white";
});

// Keydown
// const keyDownDeleteConfirm = document.querySelector("#delete-confirm");

// keyDownDeleteConfirm.addEventListener("keydown", function () {
//   const deleteField = document.querySelector("#delete-confirm");
//   console.log(deleteField.value);
// });

// keypress
// const keypressDeleteConfirm = document.querySelector("#delete-confirm");

// keypressDeleteConfirm.addEventListener("keypress", function () {
//   const deleteField = document.querySelector("#delete-confirm");
//   console.log(deleteField.value);
// });

// keyUp
const keyUpDeleteConfirm = document.querySelector("#delete-confirm");

keyUpDeleteConfirm.addEventListener("keyup", function (e) {
  if (e.target.value === "delete") {
    deleteButton.removeAttribute("disabled");
  } else {
    deleteButton.setAttribute("disabled", true);
  }
});
// // change event
// const changeEventDeleteConfirm = document.querySelector("#delete-confirm");

// changeEventDeleteConfirm.addEventListener("change", function () {
//   const deleteField = document.querySelector("#delete-confirm");
//   console.log(deleteField.value);
// });

///////////////////////////////////////////////

const deleteBtn = document.querySelector(".delete-btn");
deleteBtn.addEventListener("click", function () {
  const h3Information = document.querySelector(".h3-information");
  h3Information.style.display = "none";
});

const deleteInput = document.querySelector(".delete-input");
deleteInput.addEventListener("focus", function () {
  document.body.style.backgroundColor = "purple";
});

deleteInput.addEventListener("blur", function () {
  document.body.style.backgroundColor = "white";
});

deleteInput.addEventListener("keyup", function (e) {
  if (e.target.value === "Delete" || e.target.value === "delete") {
    deleteBtn.removeAttribute("disabled");
  } else {
    deleteBtn.setAttribute("disabled", true);
  }
});
