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

console.log(
  "------------------------------------------------------------------------------=-----------NewPractice----------------------------------------------------------------------------------------------------------------------------------------------------------"
);
const business = 450;
const minister = 550;
const army = 600;

if (business > minister) {
  console.log("Business person er pola is bigger");
} else {
  console.log("Minister er pols is bigger");
}

if (business > minister && business > army) {
  console.log("Business is bigger");
} else if (minister > business && minister > army) {
  console.log("Minister is Bigger");
} else if (army > business && army > minister) {
  console.log("Army is Bigger");
}

const max = Math.max(business, minister, army);
console.log(max);

const findFunction = (businessMan, minister, army) => {
  if (businessMan > minister && businessMan > army) {
    console.log("Business man is biggehr");
  } else if (minister > businessMan && minister > army) {
    console.log("Minister is bigger");
  } else if (army > businessMan && army > minister) {
    console.log("Army is bigger then all");
  }
  return businessMan, minister, army;
};

console.log(findFunction(500, 300, 1000));
// 21 number module er 2 number ta ses 3 number ta start
