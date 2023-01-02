const numbers = [4, 7, 1, 3, 9, 2, 5];
console.log(numbers.sort());

const letter = ["b", "h", "a", "g", "d", "c", "f", "e", "i", "k", "j"];
const sortLetter = letter.sort();
console.log(sortLetter);

/////////////////////////////////////////
//         Big number sorting         //
///////////////////////////////////////

const bigNumber = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumber = bigNumber.sort(function (a, b) {
  return a - b;
});
console.log(sortedBigNumber);

const bigNumber2 = [
  12, 55, 22, 66, 88, 1000, 122, 100, 500, 1, 2, 4, 3, 2, 66, 22,
];

const bigNumber2Sort = bigNumber2.sort(function (a, b) {
  return a - b;
});

console.log(bigNumber2Sort);

// const removeduplicateNumber = new Set(bigNumber2Sort);
// // console.log(removeduplicateNumber);

let removeNumber = [];
for (let bigNm of bigNumber2) {
  if (removeNumber.indexOf(bigNm) === -1) {
    removeNumber.push(bigNm);
  }
}
console.log(removeNumber);

//////////////////////////////////////////////////////////
//        New sort and revmove duplicate Number        //
////////////////////////////////////////////////////////

const sortNumber = [
  22, 300, 11, 10, 33, 55, 77, 11, 1, 2, 4, 3, 100, 300, 400, 400, 40, 4, 22,
  11,
];

const sortingArray = sortNumber.sort(function (a, b) {
  return a - b;
});
// console.log(sortingArray);

let removeDuplicateAllTheNumber = [];
for (let sortNm of sortNumber) {
  if (removeDuplicateAllTheNumber.indexOf(sortNm) === -1) {
    removeDuplicateAllTheNumber.push(sortNm);
  }
}

console.log(removeDuplicateAllTheNumber);
