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

const purple = document.querySelector(".purple");
purple.onclick = function () {
  document.body.style.backgroundColor = "purple";
};

///////////////////////////////////////////////////////

// using function
function prgChangeTestFunction() {
  const p = document.querySelector("#clicking-method");
  p.innerText = "Set by using function";
}

// direct
const handleEvent = document.querySelector("#handle-event");
handleEvent.addEventListener("click", function () {
  const p = document.querySelector("#clicking-method");

  p.innerText = "Set by direct event listener";
});

/////////////////////////////////////////////////////////////

const updateBtn = document.querySelector("#updateBtn");
updateBtn.addEventListener("click", function () {
  let input = document.querySelector("input");
  let getValue = input.value;
  console.log(getValue);

  const getp = document.querySelector(".getp");
  console.log(getp);

  getp.innerText = getValue;
  input.value = "";
});

// 25 number module er 4 number ta ses 5 number ta start
