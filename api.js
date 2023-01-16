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
  const ul = document.getElementById("users");
  console.log(ul);
  for (let user of data) {
    console.log(user.name);

    const li = document.createElement("li");
    li.innerText = `Name: ${user.name}      Email: ${user.email}`;

    ul.appendChild(li);
  }
}

document.getElementById("loadComment").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment(data));
});

function displayComment(data) {
  const ul = document.getElementById("users");

  for (let comment of data) {
    const li = document.createElement("li");
    li.innerText = `Email: ${comment.email}`;
    ul.appendChild(li);
  }
}
