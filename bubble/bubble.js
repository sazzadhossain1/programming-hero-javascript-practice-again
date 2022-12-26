document.querySelector("#second-item").addEventListener("click", function (e) {
  console.log("second item clicked");
  e.stopImmediatePropagation();
});

// ul
document
  .querySelector("#list-container")
  .addEventListener("click", function () {
    console.log("List container item clicked");
  });

// section
document
  .querySelector("#section-container")
  .addEventListener("click", function () {
    console.log("section clicked");
  });
