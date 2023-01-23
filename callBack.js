function welcomeMessage(greetHandler, name) {
  greetHandler(name);
}

// const names = ["Tom Hanks", "tom brady", "tom cruise"];
// const myObj = {
//   name: "tom chinku",
//   age: 11,
// };

function greedMorning(name) {
  console.log("Good Morning", name);
}

function greedAfterNoon(name) {
  console.log("Good After Noon", name);
}

function greedEvening(name) {
  console.log("Good Evening", name);
}
welcomeMessage(greedMorning, "Sazzad");
welcomeMessage(greedAfterNoon, "Yeasin");
welcomeMessage(greedEvening, "Jannat");
