const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ribon", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const brands = products.map((elements) => {
  return elements.brand;
});
// console.log(brands);

const price = products.map((productPrice) => productPrice.price);
// console.log(price);

products.forEach((product) => {
  //   console.log(product.color);
});

// filter
products.filter((product) => {
  if (product.price > 3000) {
    // console.log(product);
  }
});

products.filter((product) => {
  if (product.name.includes("n")) {
    // console.log(product);
  }
});

// find
const specialOne = products.find((product) => product.name.includes("n"));
// console.log(specialOne);

// destrucruting
// // 42 number module er 3 number ta ses 4 number ta start
