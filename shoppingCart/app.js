function updateProductNumber(product, isIncreasing, price, productTotal) {
  const productInput = document.querySelector(product + "-number");
  let productNumber = productInput.value;

  if (isIncreasing === true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;

  // Update case total
  const productTotalPrice = document.querySelector(productTotal);
  productTotalPrice.innerText = productNumber * price;
}

////////////////////////////////////////////////////////

// Phone increase decrease events
document.querySelector("#phone-plus").addEventListener("click", function () {
  updateProductNumber("#phone", true, 1219, "#phone-total");
});

document.querySelector("#phone-minus").addEventListener("click", function () {
  updateProductNumber("#phone", false, 1219, "#phone-total");
});

///////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////////////////////////////

// handle case increase decrease events
document.querySelector("#case-plus").addEventListener("click", function () {
  updateProductNumber("#case", true, 59, "#case-total");
});

document.querySelector("#case-minus").addEventListener("click", function () {
  updateProductNumber("#case", false, 59, "#case-total");
});
// 28 number module er 3 number ta ses 4 number ta start
