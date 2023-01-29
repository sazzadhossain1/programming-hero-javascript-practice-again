function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

let clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

console.log("========================");

// const bank = (owner) => {
//   blance = 0;
//   return (amount) => {
//     blance = blance + amount;
//     return blance;
//   };
// };
const bank = () => {
  blance = 0;
  return {
    deposit: (amount) => {
      blance += amount;
      return blance;
    },
    withdraw: (amount) => {
      blance -= amount;
      return blance;
    },
  };
};

const mofijBank = bank("Mofij");
console.log(mofijBank.deposit(100));
console.log(mofijBank.deposit(100));
console.log(mofijBank.withdraw(100));
console.log(mofijBank.deposit(500));
