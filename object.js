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

console.log("=============================");

const phones = [
  { name: "samsung s5", price: 45000, camera: 10, storage: 32 },
  { name: "samsung m32", price: 15000, camera: 8, storage: 8 },
  { name: "samsung m3", price: 12000, camera: 8, storage: 16 },
  { name: "samsung a2", price: 17000, camera: 8, storage: 32 },
  { name: "samsung n95", price: 8000, camera: 8, storage: 4 },
  { name: "samsung h81", price: 25000, camera: 8, storage: 16 },
];

let chepest = phones[0];
for (const phone of phones) {
  if (phone.price < chepest.price) {
    chepest = phone;
  }
}
console.log(chepest);

const products = [
  { name: "laptop", price: 43000 },
  { name: "shirt", price: 500 },
  { name: "watch", price: 3680 },
  { name: "phone", price: 55000 },
];

let totalPrice = 0;
for (let product of products) {
  totalPrice = totalPrice + product.price;
}
console.log(totalPrice);
console.log("===============================");

const cart = [
  { name: "laptop", price: 43000, quantity: 1 },
  { name: "shirt", price: 500, quantity: 4 },
  { name: "watch", price: 3680, quantity: 3 },
  { name: "phone", price: 55000, quantity: 1 },
];

let cartTotal = 0;
for (let i = 0; i < cart.length; i++) {
  const productTotal = cart[i].price * cart[i].quantity;
  cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
