const student = {
  id: 101,
  name: "sazzad",
  money: 5000,
  major: "mathematics",
  isRich: false,
  subjects: ["english", "economics", "math 101", "calculus"],
  bestFriend: {
    name: "kundu",
    major: "mathematics",
  },
  takeExam: function () {
    console.log(this.name, "Taking exam with", this.subjects[0]);
  },

  treatDey: function (expense) {
    this.money = this.money - expense;
    return this.money;
  },
};

student.takeExam();

const remaining = student.treatDey(900);
console.log(remaining);
