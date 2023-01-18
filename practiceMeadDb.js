function searchFood() {
  const inputField = document.getElementById("input-field");
  const searchText = inputField.value;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchFood(data.meals));

  inputField.value = "";
}

const displaySearchFood = (foods) => {
  const searchDiv = document.getElementById("search-div");
  searchDiv.textContent = "";
  foods.forEach((food) => {
    const div = document.createElement("div");

    div.classList.add("col");
    div.innerHTML = ` 
    <div onclick="loadMealDetails(${food.idMeal})" class="card">
          <img src="${food.strMealThumb}" class="card-img-top " alt="..." />
          <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">
              ${food.strInstructions.slice(0, 200)}
            </p>
          </div>
        </div>
    `;
    searchDiv.appendChild(div);
  });
};

const loadMealDetails = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDbDetails(data.meals[0]));
};

const displayMealDbDetails = (meal) => {
  console.log(meal);
  const getDetailsDiv = document.getElementById("food-details-by-id");
  getDetailsDiv.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card mx-auto" style="width: 18rem">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">
            ${meal.strInstructions.slice(0, 100)}
          </p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  `;
  getDetailsDiv.appendChild(div);
};
// 34 number module er 7 number ta ses 8 number ta start
