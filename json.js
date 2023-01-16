const user = {
  id: 11,
  name: "Grib amir",
  job: "actor",
};

const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop = {
  name: "Alia Store",
  address: "Ranbi road",
  products: ["laptop", "mobile", "pepsi"],
  isExpensive: false,
};

const shopStringified = JSON.stringify(shop);
console.log(shopStringified);

const shopParse = JSON.parse(shopStringified);
console.log(shopParse);

alert("dsfdfd");
