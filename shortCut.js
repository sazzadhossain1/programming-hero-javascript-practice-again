let myVar = 5;
if (myVar) {
  myVar = myVar * 5;
  console.log(myVar);
} else {
  myVar = 0;
  console.log(myVar);
}

// Ternary operator
// const money = 80;
const money = 800;
const food = money > 100 ? "Biriani" : "cha khamu";
console.log(food);

// convert to string a number.
const num1 = 52;
console.log(String(num1));

const numStr = num1 + "";
console.log(numStr);

// booliyan
const isActive = true;
const showUser = () => console.log("display user");
const hideUser = () => console.log("hide user");

// isActive ? showUser() : hideUser();
// more shortCut
isActive && showUser();
