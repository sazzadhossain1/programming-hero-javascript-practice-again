// Using Object literal
const student = { name: "Sakib al hasan", job: "cricketer" };
// Constructor
const person = new Object();
console.log(person);

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const peop = new People("Sazzad", 12);
console.log(peop);

// function
function Manush(name) {
  this.name = name;
}

const man = new Manush("sazzad");
console.log(man);
