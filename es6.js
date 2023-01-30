const numbers = [89, 35, 98, 12];
const student = {
  name: "Sazzad Hossain",
  age: 26,
  profetion: ["Web developer", "No job"],
};
const about = `My Name is ${student.name} and i am a ${student.profetion[0]}`;
console.log(about);

// arrow function
const getFiftyFive = () => {
  return 55;
};

console.log(getFiftyFive());

// Spread operator
const newNumbers = [...numbers, 55];
console.log(newNumbers);
