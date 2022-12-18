const favoriteBook = "Rich dad VS Por dad";
const bookList = ["positioning", "hooked", "Start with why", "Shoe dog"];
console.log(bookList);

if (bookList[1] === "hooked") {
  console.log("I am hooked");
} else {
  console.log("There is no hooked");
}

let i = 0;
while (i <= 15) {
  console.log(i);
  i++;
}

for (let i = 0; i <= 10; i++) {
  console.log(i + 5);
}

console.log("------------ if else break and countinue ---------");

const phones = ["iphone", "shaomi", "samsung", "lg", "htc"];
phones[3] = "walton";
console.log(phones);

if (phones.indexOf("oppo") === -1) {
  console.log("There is no oppo phone");
}

if (phones.indexOf("walton") !== -1) {
  console.log("walton phone is available now");
}

console.log(
  "---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);
let n = 1;
for (let i = 1; i <= 7; i++) {
  //   console.log(i);
  n = n * i;
  console.log(n);
}

function factory(num) {
  let n = 1;
  for (let i = 1; i <= num; i++) {
    n = n * i;
  }
  return n;
}

console.log(factory(5));

console.log("-----------------");
