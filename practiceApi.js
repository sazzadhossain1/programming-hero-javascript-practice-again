// For jsonPlaceHolder start
// const loadData = () => {
//   fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((res) => res.json())
//     .then((data) => displayLoadData(data));
// };

// const displayLoadData = (data) => {
//   const commentDiv = document.getElementById("comment-div");
//   for (let comment of data) {
//     // console.log(comment);
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <div onclick="loadDataById(${comment.id})">
//     <h3>Name: ${comment.name}</h3>
//     <h5>Email: ${comment.email}</h5>
//     <p>Comment: ${comment.body.slice(0, 50)}</p>
//     <p>Id: ${comment.id}</p>
//     </div>
//     `;
//     commentDiv.appendChild(div);
//   }
// };

// const loadDataById = (commentId) => {
//   fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
//     .then((res) => res.json())
//     .then((data) => displayLoadDataById(data));
// };

// const displayLoadDataById = (data) => {
//   console.log(data);
//   const getDiv = document.getElementById("show-div");
//   getDiv.textContent = "";

//   const div = document.createElement("div");
//   div.innerHTML = `

//   <div class="card mx-auto m-5" style="width: 18rem">
//       <div class="card-body">
//         <h5 class="card-title">${data.name}</h5>
//         <p class="card-title">${data.email}</p>
//         <p class="card-text">
//          ${data.body.slice(0, 50)}
//         </p>
//       </div>
//     </div>
//   `;
//   getDiv.appendChild(div);
// };

// JsonPlaceHolder end
//...................................

// mead DB Start
//.................//
const loadApi = () => {
  const inputField = document.getElementById("input");
  const inputText = inputField.value;
  inputField.value = "";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
    .then((res) => res.json())
    .then((data) => displayLoadApi(data.meals));
};

const displayLoadApi = (meals) => {
  const parentDiv = document.getElementById("parent-div");
  parentDiv.textContent = "";

  const getDetailsDiv = document.getElementById("detals-div");
  getDetailsDiv.textContent = "";
  for (let meal of meals) {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card" onclick="loadMeadDetails(${meal.idMeal})">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${meal.strTags}</h5>
            <p class="card-text">
              ${meal.strInstructions.slice(0, 200)}
            </p>
          </div>
        </div>
    `;

    parentDiv.appendChild(div);
  }
};

const loadMeadDetails = (meadId) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meadId}`)
    .then((res) => res.json())
    .then((data) => displayLoadMealDetails(data.meals[0]));
};

function displayLoadMealDetails(mealDetails) {
  console.log(mealDetails);

  const getDetailsDiv = document.getElementById("detals-div");
  getDetailsDiv.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
  <div  class="card" style="width: 18rem">
        <img src="${mealDetails.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${mealDetails.strMeal}</h5>
          <p class="card-text">
            ${mealDetails.strInstructions.slice(0, 50)}
          </p>
          <a href="${
            mealDetails.strYoutube
          }" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  `;
  getDetailsDiv.appendChild(div);
}
