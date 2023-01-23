const pen = {
  brand: "econo",
  price: 10,
  writePoem: function (food) {
    console.log((this.food = food));
  },
};
const key = Object.keys(pen);
console.log(key);
const value = Object.values(pen);
console.log(value);

pen.writePoem("kabab");

// optional
// const aBounded = pen.writePoem.bind("kabab");
// aBounded();

// this key word
// 36 number module er 8 number ta ses 9 number ta start
