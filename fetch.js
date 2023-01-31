const student = {
  name: "Salib khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// fetch
// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// Keys, valus
const keys = Object.keys(student);
console.log(keys);
const value = Object.values(student);
console.log(value);

///////////////////////////////////////////////
///////////////////////////////////
/////////////////////////

const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ribon", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const newProduct = { name: "Webcam", price: 700, brand: "lal" };
const newProducts = [...products, newProduct];
console.log(newProducts);

//.......................

const remaining = products.filter((p) => {
  if (p.name !== "phone") {
    console.log(p);
  }
});
