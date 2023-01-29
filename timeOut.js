function doSomething() {
  console.log("I am coding JavaScript");
}
console.log("First: ami sobar age");
console.log("Second: I am the second person");

setTimeout(doSomething, 5000);
setTimeout(function () {
  console.log("I am fifth Number");
}, 2000);

setTimeout(() => {
  console.log("This is arrow function");
}, 3000);
console.log("Third: ami 3 number baccha");
console.log("Fourth: ami ek hali purano korsi");
