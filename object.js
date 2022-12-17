const student1 = {
  id: 115,
  name: "Sazzad Hossain",
  marks: 81,
  phone: 0173544,
};

const mobile = {
  color: "blace",
  price: 19000,
  screenSize: 5,
  storage: "16gb",
};
console.log(mobile);

console.log(mobile.storage);
console.log(mobile.color);
console.log(mobile.screenSize);

const changeMobileStorage = (mobile.storage = "32gb");
console.log(changeMobileStorage);

console.log(mobile);
