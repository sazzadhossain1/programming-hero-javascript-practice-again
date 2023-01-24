const loadData = () => {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((res) => res.json())
    .then((data) => displeyData(data));
};
loadData();

const displeyData = (data) => {
  // console.log(data);
  const parentDiv = document.getElementById("parent-div");
  data.drinks.forEach((currentData) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div onclick="loadDataById(${currentData.idDrink})" class="col">
        <div class="card ">
          <img src="${
            currentData.strDrinkThumb
          }" class="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title">${currentData.strDrink}</h5>
            <p class="card-text">
              ${currentData.strInstructions.slice(0, 50)}
            </p>
          </div>
        </div>
      </div>
    `;
    parentDiv.appendChild(div);
  });
};

function loadDataById(id) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => displayDataById(data.drinks[0]));
}

function displayDataById(data) {
  console.log(data);
  const displayDiv = document.getElementById("display-div");
  displayDiv.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
  
  <div class="card mx-auto m-5" style="width: 18rem">
        <img src="${data.strDrinkThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
  `;
  displayDiv.appendChild(div);
}
// 36 number module er 8 number ta ses 9 number ta start
