console.log("first");
// setInterval(() => {
//   console.log("tik tik tik tik");
// }, 1000);
console.log("second");

let seconds = 0;
const timeId = setInterval(() => {
  seconds++;
  console.log(seconds);
  if (seconds >= 5) {
    clearInterval(timeId);
  }
}, 1000);
