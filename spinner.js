function searchJussBtn() {
  const inputField = document.getElementById("input-field");
  const inputValue = inputField.value;
  inputField.value = "";
  toggleSpinner("block");

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}
`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDrink(data.drinks));
}

/// Display Spinner
const toggleSpinner = (displayStyle) => {
  document.getElementById("spinner").style.display = displayStyle;
};

function displayDrink(data) {
  const drinksDiv = document.getElementById("drinks-div");
  drinksDiv.textContent = "";

  data?.forEach((drink) => {
    // console.log(drink);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="col" onclick="showById(${drink.idDrink})">
          <div class="card">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>`;
    drinksDiv.appendChild(div);
    toggleSpinner("none");
  });
}

function showById(id) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => displayById(data.drinks[0]));
}

function displayById(data) {
  console.log(data);

  const showSection = document.getElementById("show-by-id");
  showSection.textContent = "";

  const div = document.createElement("div");
  div.innerHTML = `
  
  <div class="card mx-auto m-5" style="width: 18rem">
            <img src="${data.strDrinkThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${data.strDrink}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

  `;
  showSection.appendChild(div);
}
