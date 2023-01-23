const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

if (first === second) {
  console.log("Object are equal");
} else {
  console.log("Object are not equal");
}

if (first === third) {
  console.log("Object are equal");
} else {
  console.log("Object are not equal");
}

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));

if (JSON.stringify(first) === JSON.stringify(second)) {
  console.log("Object are equal");
} else {
  console.log("Object are defferent");
}
