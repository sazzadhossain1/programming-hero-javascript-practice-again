document.getElementById("add-border").addEventListener("click", function () {
  const container = document.getElementById("friend-container");
  container.style.border = "5px solid red";
  container.style.padding = "20px";
});

document
  .getElementById("add-background")
  .addEventListener("click", function () {
    const friend = document.getElementsByClassName("friend");
    for (let frnd of friend) {
      frnd.style.backgroundColor = "red";
      frnd.style.margin = "10px";
      frnd.style.padding = "10px";
      frnd.style.color = "white";
    }
  });

document.getElementById("add-friend").addEventListener("click", function () {
  const container = document.getElementById("friend-container");
  const friendDiv = document.createElement("div");
  friendDiv.classList.add("friend");
  friendDiv.innerHTML = `<h3 class="friend-name">New Friend</h3>
    <p>Doloremque, eum!</p>`;

  container.appendChild(friendDiv);
});
// 31 number module er 1 number ta ses 2 number ta start
