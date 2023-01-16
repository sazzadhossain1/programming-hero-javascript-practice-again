function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

document.getElementById("loadPost").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data[0].title));
});

function displayUsers(data) {
  console.log(data);
}
// 33 number module er 3 number ta ses 4 number ta start
