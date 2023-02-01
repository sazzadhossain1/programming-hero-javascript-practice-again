// const images = [
//   "image/1.jpg",
//   "image/2.jpg",
//   "image/3.jpg",
//   "image/4.jpg",
//   "image/5.jpg",
//   "image/6.jpg",
//   "image/7.jpg",
// ];
// let imageIndex = 0;

// const imgElement = document.getElementById("slider-img");
// setInterval(() => {
//   if (imageIndex >= images.length) {
//     imageIndex = 0;
//   }

//   const imgUrl = images[imageIndex];
//   imgElement.setAttribute("src", imgUrl);
//   imageIndex++;
// }, 1000);

//////////////////////////////////

const images = [
  "image/1.jpg",
  "image/2.jpg",
  "image/3.jpg",
  "image/4.jpg",
  "image/5.jpg",
  "image/6.jpg",
  "image/7.jpg",
];

let imageIndex = 0;
const imagePhone = document.getElementById("slider-img");
setInterval(() => {
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  const imgUrl = images[imageIndex];
  imagePhone.setAttribute("src", imgUrl);
  imageIndex++;
}, 1000);
// // 43_5 number module er 0 number ta ses 1 number ta start
