// function loadPost() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => displayPosts(data));
// }
// loadPost();

// function displayPosts(posts) {
//   const postContainer = document.getElementById("posts");
//   for (let post of posts) {
//     const div = document.createElement("div");
//     div.innerHTML = ` <h3>${post.title} </h3>
//     <p>${post.body}</p>`;
//     postContainer.appendChild(div);
//   }
// }

function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => disabledPost(data));
}

loadPost();

function disabledPost(data) {
  const section = document.getElementById("posts");

  for (let post of data) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `<h3>${post.title}</h3>
    <p>${post.body} </p>
    <button> See More </button>`;
    section.appendChild(div);
  }
}
// 33 number module er 6 number ta ses 7 number ta start
