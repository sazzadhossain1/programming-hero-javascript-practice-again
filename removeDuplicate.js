const names = [
  "sazzad",
  "hossain",
  "tomal",
  "yeasin",
  "sazzad",
  "yeasin",
  "tomal",
];

function removeDuplicate(name) {
  let unique = [];
  for (let element of name) {
    if (unique.indexOf(element) === -1) {
      unique.push(element);
    }
  }
  console.log(unique);
}

removeDuplicate(names);
