// Object destructuring
//-------------------------
const fish = {
  name: "king Hilsha",
  id: 58,
  price: 9000,
  phone: 017111111111,
  address: "Chandpur",
  dress: "silver",
};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

// console.log(phone);
// console.log(price);
// console.log(dress);
// console.log(id);

const { phone, price, dress, id } = fish;
console.log(phone);

const company = {
  name: "GP",
  ceo: {
    id: 1,
    name: "ajmol",
    food: "fuchka",
  },
  web: {
    work: "website development",
    employee: 22,
    framework: "react",
  },
};
// const { name, food } = company.ceo;
// console.log(name, food);
// const { work, framework } = company.web;
// console.log(work, framework);

// Array destructuring
//------------------------
const [p, q] = [34, 23];
console.log(p, q);

const [best, faltu] = [23, 45];
console.log(best, faltu);

const [firstname, lastName] = ["sazzad", "hossain"];
// console.log(firstname, lastName);

// destrucruting
const numbers = [42, 65, 45, 64, 34, 233];
const [a, , , , , b] = numbers;
// console.log(a, b);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

const [first, second] = boxify(90, 40);

console.log(first, second);

const student = {
  name: "Sazzad Hossain",
  age: 26,
  profetion: ["Web developer", "No job"],
};

const [web, job] = student.profetion;
console.log(web, job);

// object destructuring
const { name, age } = student;
console.log(name, age);

const employee = {
  ide: "Vs Code",
  designation: "developer",
  machine: "Windows",
  language: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "garmin",
    },
  },
};

const { ide, machine } = employee;
console.log(ide, machine);

const { height, weight, address, drink } = employee.specification;
console.log(height, weight, address, drink);

const [h, c, j] = employee.language;
console.log(h, c, j);

const { brand } = employee.specification.watch;
console.log(brand);
