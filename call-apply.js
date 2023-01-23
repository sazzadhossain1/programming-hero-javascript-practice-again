const kibriya = {
  id: 101,
  money: 5000,
  name: "Sazzad Hossain",
  treatDey: function (expense, bokshis) {
    this.money = this.money - expense - bokshis;
    console.log("here5555", this);
    return this.money;
  },
};
const kibriyaExpence = kibriya.treatDey(1000);
console.log(kibriyaExpence);

const heroBalam = {
  id: 101,
  money: 6000,
  name: "Hero Balam",
};

const normalGolam = {
  id: 102,
  money: 8000,
  name: "Normal Golam",
};
// Call
// kibriya.treatDey.call(heroBalam, 500, 100);

// Apply
kibriya.treatDey.apply(heroBalam, [500, 100]);
