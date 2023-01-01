// function megaFriend(friends) {
//   let mega = friends[0];
//   for (let friend of friends) {
//     if (friend.length > mega.length) {
//       mega = friend;
//     }
//   }
//   return mega;
// }

// const myBigBuddy = ["kutub", "lion", "shamol", "sabbir"];
// console.log(megaFriend(myBigBuddy));

// function megaFriend(friends) {
//   let BigFriend = [];
//   for (let friend of friends) {
//     if (friend.length > BigFriend.length) {
//       BigFriend = friend;
//     }
//   }
//   console.log(BigFriend);
// }

// const friends = ["Sazzad", "hossain", "tomal", "Shah", "Mohammad"];
// megaFriend(friends);

////////////////////////////////////////////////
// ========================================= //
//////////////////////////////////////////////

// const names = ["Shayla", "Akther", "Yeasin", "Jannat", "Mohammad"];
// const bigName = (name) => {
//   let bigNm = [];
//   for (let nam of name) {
//     if (nam.length > bigNm.length) {
//       bigNm = nam;
//     }
//   }
//   console.log(bigNm);
// };

// bigName(names);

/////////////////////////////////////////
////////////////////////////////////////
///////////////////////////////////////

const names = [
  "Shayla",
  "Akther",
  "Yeasin",
  "Jannat",
  "Mohammad",
  "Anwar Hossain Mojnu",
];

const getBigName = (names) => {
  if (Array.isArray(names) === false) {
    return "Please privide an array of strings";
  }
  let bigName = [];
  for (let name of names) {
    if (name.length > bigName.length) {
      bigName = name;
    }
  }
  return bigName;
};
const callFunction = getBigName(names);
console.log(callFunction);
