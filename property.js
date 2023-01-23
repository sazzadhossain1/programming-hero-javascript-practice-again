const bottle = { color: "yellow", hold: "water", price: 50, isCleaned: true };

// Get all keys from object
const keys = Object.keys(bottle);
console.log(keys);

// Get all objects values
const valus = Object.values(bottle);
console.log(valus);

const pairs = Object.entries(bottle);
console.log(pairs);

bottle.height = 16;

Object.seal(bottle);

bottle.weight = "500gr";

Object.freeze(bottle);
bottle.price = 200;
delete bottle.isCleaned;
console.log(bottle);
