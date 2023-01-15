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
const { name, food } = company.ceo;
console.log(name, food);
const { work, framework } = company.web;
console.log(work, framework);

// Array destructuring
//------------------------
const [p, q] = [34, 23];
console.log(p, q);

const [best, faltu] = [23, 45];
console.log(best, faltu);

const [firstname, lastName] = ["sazzad", "hossain"];
console.log(firstname, lastName);
