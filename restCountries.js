// const loadCountries = () => {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((data) => displayCountries(data));
// };
// loadCountries();

// const displayCountries = (countries) => {
//   console.log(countries);
//   const countriesDiv = document.getElementById("countries");
//   countries.forEach((country) => {
//     const div = document.createElement("div");
//     div.classList.add("country");
//     div.innerHTML = `
//     <h3>${country.name.common}</h3>
//     <p>${country.capital}</p>
//     <button onclick="loadCountryByName('${country.name.common}')">Details</button>
//     `;
//     countriesDiv.appendChild(div);
//   });
// };

// const loadCountryByName = (name) => {
//   const url = `https://restcountries.com/v3.1/name/${name}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayCountryDetail(data[0]));
// };

// const displayCountryDetail = (country) => {
//   console.log(country);
//   const countryDiv = document.getElementById("country-detail");
//   countryDiv.innerHTML = `<h3>Country Name: ${country.name.common}</h3>
//   <h4>City: ${country.capital[0]}</h4>
//   <h5>Population: ${country.population}</h5>
//   <img width="300px" src="${country.flags.png}">
//   `;
// };

const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

loadCountries();

const displayCountries = (data) => {
  const div = document.getElementById("countries");

  for (let country of data) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("country");
    createDiv.innerHTML = `
    <h3>${country.name.common}</h3>
    <h5>${country.capital}</h5>
    <button onclick="loadCountryByName('${country.name.common}')">Details</button>
    `;
    div.appendChild(createDiv);
    console.log(country);
  }
};

const loadCountryByName = (data) => {
  const url = `https://restcountries.com/v3.1/name/${data}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadDetails(data));
};

const loadDetails = (detail) => {
  console.log(detail[0].flags.png);
  const div = document.getElementById("country-detail");
  div.innerHTML = `
  <h4>City: ${detail[0].capital[0]}</h4>
<h5>Population: ${detail[0].population}</h5>
  <img width="300px" src="${detail[0].flags.png}">`;
};
