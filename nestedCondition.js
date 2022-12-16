const damishPrice = 50;
const butterBreadPrice = 25;
const toastBiscuitPrice = 10;
const myBudget = 100;
const packedWell = false;
const eagPrice = 100;

// if (damishPrice < myBudget) {
//   console.log("Danish kheye danish jabo");
// } else if (butterBreadPrice < myBudget) {
//   console.log("butter bon diye cha khabo");
// } else if (toastBiscuitPrice < myBudget) {
//   console.log("toast is good ");
// } else {
//   console.log("kichui hoilo na ");
// }

if (damishPrice < myBudget) {
  if (packedWell === true) {
    console.log("Eating");
  } else {
    console.log("Not Good");
  }
}

//////////////////////////////////////
const turPlace = ["Napal", "Vutan", "Maldip"];
turPlace.push("Kashmir");

if (turPlace[3] === "Kashmir") {
  console.log("Hurrr reee I will go to the kashmir");
} else {
  console.log("I don't go anywere");
}

if (eagPrice <= myBudget) {
  console.log("I will buy eags");
} else {
  console.log("i have not budget");
}
