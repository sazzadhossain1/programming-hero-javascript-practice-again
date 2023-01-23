console.log(this);
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
