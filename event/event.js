const redFunction = () => {
  document.querySelector("body").style.backgroundColor = "red";
};

const getBlue = document.querySelector(".blue");
getBlue.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

const green = document.querySelector(".green");
green.onclick = makeGreen;
function makeGreen() {
  document.body.style.backgroundColor = "green";
}
// 25 number module er 2 number ta ses 3 number ta start
