const isFoodReady = true;

if (isFoodReady === true) {
  console.log("mama food is ready");
} else {
  console.log("food is not ready");
}

const phonePrice = 70000;
const myBudget = 9500;

if (myBudget > phonePrice) {
  console.log("i will buy the iphone");
} else {
  console.log("i can't not buy iphone cause i have not budget");
}

if (myBudget === phonePrice) {
  console.log("!YeY i have budget for the iphone");
} else {
  console.log("My budget is low");
}

const chickenPice = 180;
const myMoney = 50;

if (chickenPice < myMoney) {
  console.log("Give me chicken lec pice");
} else {
  console.log("give me linten sup");
}

////////////////////////////////////////////////////////

const gotJob = true;
const moneySave = 250000;
const home = false;

// if (gotJob === true && moneySave === 200000) {
//   console.log("Let's go and get merride");
// } else {
//   console.log("it's ok no problem ");
// }

if (gotJob === true && moneySave > 200000 && home === true) {
  console.log("Let's go and get merride");
} else {
  console.log("it's ok no problem ");
}

if ((gotJob === true && home === true) || moneySave > 200000) {
  console.log("YEY!!!! I will merride");
} else {
  console.log("I don't get merride");
}
