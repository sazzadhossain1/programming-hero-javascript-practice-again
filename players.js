function setPlayerStyle(player) {
  player.style.border = "solid 1px blue";
  player.style.borderRadius = "10px";
  player.style.margin = "10px";
  player.style.padding = "10px";
}

const players = document.getElementsByClassName("player");
for (let player of players) {
  setPlayerStyle(player);
}

function addPlayer() {
  const playersSection = document.getElementById("players");

  //create Element
  const createDiv = document.createElement("div");
  createDiv.classList.add("player");
  createDiv.innerHTML = `
  <h4 class="player-name">New player </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            quibusdam minima quia, veniam odio unde maxime aut iusto inventore
            ipsa eum, sint ex beatae quisquam, eligendi mollitia minus!
            Cupiditate, numquam?
          </p>`;

  playersSection.appendChild(createDiv);
}

document.getElementById("players").addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() == "div") {
    e.target.style.backgroundColor = "red";
  } else {
    e.target.parentNode.style.backgroundColor = "red";
  }
});
