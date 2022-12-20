const greetings = "Hello, how are you?";

function reverseString(text) {
  let reverse = "";
  for (let letter of text) {
    reverse = letter + reverse;
  }
  return reverse;
}

console.log(reverseString(greetings));

// 22 number module er 3 number ta ses 4 number ta start
