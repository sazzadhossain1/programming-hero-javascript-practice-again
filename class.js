// class Support {
//   name;
//   designation = "Support Web Dev";
//   address = "BD";
//   constructor(name, address) {
//     this.name = name;
//     this.address = address;
//   }
//   startSession() {
//     console.log("Start a support session");
//   }
// }

// const amir = new Support("Amir Khan", "in");
// console.log(amir);

// const salman = new Support("Salman khan", "Usa");
// console.log(salman);

//////////////////////////////////////////////////////////////
///////////////////// Learn with sumit vai //////////////////
////////////////////////////////////////////////////////////

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const car1 = new Car("Toyota", 2017);
console.log(car1);

// student class
class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  play(status) {
    console.log(`${this.name} is playing ${status}`);
  }
}

const yeasin = new Student("Yeasin", 1);
console.log(yeasin);

yeasin.play("well");

const a = new Student("A", 2);
console.log(a);
a.play("Not Good");

//////////////////////////////////////////////////////////////
////////////////////// Jhankar Mahbub vai ///////////////////
////////////////////////////////////////////////////////////
console.log("----------------- Jhankar vai ------------------");
class Support {
  name;
  designation = "Support Web Dev";
  address = "BD";
  constructor(name, designation, address) {
    this.name = name;
    this.designation = designation;
    this.address = address;
  }
  startSession(name) {
    console.log(`${(this.name = name)} start a support seassion`);
  }
}

const sazzad = new Support("Sazzad", "programmer", "Bd");
console.log(sazzad);
const yeasin1 = new Support("Yeasin", "Student", "BD");
console.log(yeasin1);

sazzad.startSession("Sazzad");
yeasin1.startSession("Yeasin");
// 32 number module er 7 number ta ses 8 number ta start
