const friendsAge = [11, 13, 17];
const murichanacurFee = [34, 55, 221, 3];
const nayikas = ["mahi", "opu", "sabana", "kopila"];
const oddNumber = [1, 3, 5, 7, 9];
const vowels = ["a", "e", "i", "o", "u"];

console.log(friendsAge);
console.log(friendsAge.length);

const bookPages = ["hablu", "gablu", "jablu", "mablu"];
console.log(bookPages);
console.log(bookPages.indexOf("gablu"));
console.log(bookPages.indexOf("gabluuu")); // result hobe -1

///////////////////////////////////////

const numbers = [45, 98, 65, 72, 44, 5, 66, 99];

console.log(numbers);
console.log(numbers.indexOf(44));
console.log(numbers.indexOf(44444)); // result hobe -1

console.log(numbers[1]);
console.log(numbers);
console.log((numbers[1] = 125));
console.log(numbers);

console.log("-------------- Push and Pop ---------------");

const backBanch = ["Sazzad", "Hossain", "Tomal"];
console.log(backBanch);

backBanch.push("Shohan");
console.log(backBanch);

backBanch.pop();
console.log(backBanch);

const age = [23, 33, 44, 52, 23];
console.log(age);

age.push(120, 222);
console.log(age);

age.pop();
console.log(age);

age.splice(3, 1);
console.log(age);

const number = [111, 222, 333, 444, 555, 666, 777, 888, 999];
console.log(number);

number.splice(3, 1);
console.log(number);

console.log("------------ Shift and Unshift -------------");

const friends = ["Shohan", "anik", "mimu"];
console.log(friends);

friends.unshift("Sazzad");
console.log(friends);

friends.shift();
console.log(friends);

friends.splice(1, 1);
console.log(friends);
