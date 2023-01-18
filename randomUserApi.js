const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayBuddies(data));
};
loadBuddies();

const displayBuddies = (data) => {
  const buddies = data.results;
  const buddiesDiv = document.getElementById("buddies");
  for (buddy of buddies) {
    console.log(buddy.name.first);
    const p = document.createElement("p");
    p.innerHTML = `Email: ${buddy.email} Name: ${buddy.name.first} ${buddy.name.last}`;

    buddiesDiv.appendChild(p);
  }
};
