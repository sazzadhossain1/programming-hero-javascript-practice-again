const anthem = "Amar sonar Bangla ami tomai valobashi";

// split method
const convertToArray = anthem.split(" ");
// console.log(convertToArray);

const withoutA = anthem.split("a");
// console.log(withoutA);

const smallSlice = anthem.slice(10, 17);
// console.log(smallSlice);

// const valobashiIndex = anthem.indexOf("v");
// console.log(valobashiIndex);
// const valobashiLastIndex = anthem.indexOf("i");
// console.log(valobashiLastIndex);

const valobashi = anthem.slice(28, 37);
// console.log(valobashi);

// skbstr method
const anotherPart = anthem.substr(11, 6);
// console.log(anotherPart);

const anotherAnotherPart = anthem.substring(11, 17);
console.log(anotherAnotherPart);

// concat
const first = "Amader";
const second = "City";

const sentance = first.concat(" ", second, " ", "Dhaka");
console.log(sentance);

// join method
const world = ["alim", "badhon", "cameron", "david"];
const allJoied = world.join(" - ");
console.log(allJoied);
