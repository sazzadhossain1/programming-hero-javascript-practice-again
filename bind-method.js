const kibriya = {
  id: 101,
  name: "sazzad",
  money: 5000,
  major: "mathematics",

  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log(this.money);
  },
};

const heroBalam = {
  id: 102,
  meney: 6000,
  name: "Hero Balam",
};

// kibriya.treatDey(100);
const heroTeeatDay = kibriya.treatDey.bind(heroBalam);
heroTeeatDay(500);

///////////////////////////////////////////////////////////
///////////////////// Sumit Vai //////////////////////////
/////////////////////////////////////////////////////////

// const sakib = {
//   name: "Sakib",
//   age: 35,
//   printPlayerName: function () {
//     console.log(this.name);
//   },
// };

// sakib.printPlayerName();

//..........................

// const printPlayerNameFunction = function (obj) {
//   obj.printPlayerName = function () {
//     console.log(this.name);
//   };
// };

// const sakib1 = {
//   name: "Sakib",
//   age: 35,
// };
// const tamim = {
//   name: "Tamim",
//   age: 38,
// };

// printPlayerNameFunction(sakib1);
// printPlayerNameFunction(tamim);

// sakib1.printPlayerName();
// tamim.printPlayerName();

const printPlayerNameFunction = function (obj) {
  obj.printPlayerName = function () {
    console.log(this.name, "is", this.age);
  };
};

const sakib2 = {
  name: "Sakib",
  age: 30,
};
const tamim = {
  name: "tamim",
  age: 35,
};

printPlayerNameFunction(sakib2);
printPlayerNameFunction(tamim);

sakib2.printPlayerName();
tamim.printPlayerName();

console.log("--------------------");

const person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(`${this.name} is ${this.age}`);
    },
    father: {
      name: "Mr xxx",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};

const messy = person("Messy", 34);
messy.printName();

messy.father.printName();

//..........................

const printName = function (v1, v2, v3) {
  console.log(this.name, "is", this.age, v1, v2, "and", v3);
};

const sazzad = {
  name: "Sazzad",
  age: 26,
};

const v1 = "Handsome";
const v2 = "Programmer";
const v3 = "Best Programmer";

const v = [v1, v2, v3];

printName.call(sazzad, v1, v2, v3);
printName.apply(sazzad, v);
const callBind = printName.bind(sazzad, v1, v2, v3);
callBind();
