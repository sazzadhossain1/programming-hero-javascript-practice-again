// const items = document.querySelectorAll(".item");
// for (let item of items) {
//   item.addEventListener("click", function (event) {
//     // document.querySelector("#item-container").removeChild(item);
//     event.target.parentNode.removeChild(event.target);
//   });
// }

document.querySelector("#add-item").addEventListener("click", function () {
  const createLi = document.createElement("li");
  const getUl = document.querySelector("#item-container");
  createLi.innerText = "Add a new item";
  createLi.classList.add("item");
  getUl.appendChild(createLi);
});

const getUl = document.querySelector("#item-container");
getUl.addEventListener("click", function (e) {
  e.target.parentNode.removeChild(e.target);
});
// 25 number module er 8 number ta ses 9 number ta start
