const products = [
  "Dell hardcore i29 200GB laptop",
  "iphone 1TB camera flashlight phone",
  "yellow laptop with black camera",
  "1X59 Lenovo commercial yoga laptop",
  "LG supernova laptop",
  "HTC low price Phone",
  "purple color phone with Laptop",
];

const searching = "laptop";

// indexOf
const outPut = [];
for (const product of products) {
  const lowercase = product.toLowerCase();
  if (lowercase.indexOf(searching.toLowerCase()) !== -1) {
    outPut.push(lowercase);
  }
}
console.log(outPut);

// includes method
const outPut1 = [];
for (let product of products) {
  if (product.toLowerCase().includes("Phone".toLowerCase())) {
    outPut1.push(product);
  }
}
console.log(outPut1);

////////////////////////////////////////

const products1 = [
  "Dell hardcore i29 200GB laptop",
  "iphone 1TB camera flashlight phone",
  "yellow laptop with black camera",
  "Dell 1X59 Lenovo commercial yoga laptop",
  "LG supernova laptop Dell",
  "HTC low price Phone",
  "Dell purple color phone with Laptop",
];

// Start With
const outPut2 = [];
for (let product of products1) {
  if (product.toLowerCase().startsWith("Dell".toLowerCase()))
    outPut2.push(product);
}

console.log(outPut2);

//End With
const outPut3 = [];
for (let product of products1) {
  if (product.toLowerCase().endsWith("laptop".toLowerCase())) {
    outPut3.push(product);
  }
}
