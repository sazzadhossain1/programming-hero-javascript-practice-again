const getElement = document.getElementsByTagName("h3");
console.log(getElement);

for (let h3 of getElement) {
  console.log(h3.innerText);
}

const blogDetails = document.querySelectorAll("p");
console.log(blogDetails);

// const color = ["red", "blue", "green", "orange", "purple"];

for (let p of blogDetails) {
  p.style.color = "white";
}
// 24  number module er 4 number ta ses 5 number ta start
