const getElement = document.getElementsByTagName("h3");
console.log(getElement);

for (let h3 of getElement) {
  console.log(h3.innerText);
}

const blogDetails = document.querySelectorAll("p");
console.log(blogDetails);

const colors = ["red", "blue", "green", "orange", "purple"];

blogDetails.forEach(function (parg, i) {
  const color = colors[i];
  parg.style.color = color;
});

const secondTitle = (document.querySelector("#second-title").style.color =
  "white");
const forthTitle = document.querySelector("#forth-title");

forthTitle.innerText = "Title updateed by JS";
forthTitle.style.textAlign = "center";
forthTitle.style.backgroundColor = "red";
forthTitle.style.padding = "20px";

const blogs = document.querySelectorAll(".blog");
console.log(blogs);

for (let blog of blogs) {
  console.log(blog);
}
forthTitle.setAttribute("title", "iam a tuiletip used");

// Create and add element by using Javascript
const ul = document.querySelector("ul");
const li = document.createElement("li");

li.innerText = "This is new Li";

ul.appendChild(li);

// get section
const section = document.querySelector("section");

// Create Element
const article = document.createElement("article");
const h1 = document.createElement("h1");
const p = document.createElement("p");

// Add text
h1.innerText = "My Awesome Blog - 6";
p.innerText =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ipsa laborum ea ex assumenda quam quibusdam nemo voluptates assumenda cupiditate temporibus nostrum expedita voluptas dolorem natus quod eligendi molestias atque, id ullam. Magni.";

// Append Chiled
section.appendChild(article);
article.appendChild(h1);
article.appendChild(p);

// Styling element by Javascript
article.style.margin = "10px";
article.style.padding = "10px";
article.style.borderRadius = "10px";
article.style.backgroundColor = "darkblue";

h1.style.textAlign = "center";
h1.style.backgroundColor = "red";
h1.style.color = "black";
h1.style.padding = "20px";
h1.style.borderRadius = "50px";

p.style.backgroundColor = "white";
p.style.padding = "20px";
p.style.borderRadius = "20px";
