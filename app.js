function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  //update total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;

  calculateTotalPrice();
}

//get input value
function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const inputValue = parseInt(productInput.value);
  return inputValue;
}

//total price of products
function calculateTotalPrice() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotalAmount = phoneTotal + caseTotal;
  const taxAmount = subTotalAmount / 10;
  const totalAmount = subTotalAmount + taxAmount;

  //update to html
  document.getElementById("sub-total").innerText = subTotalAmount;
  document.getElementById("tax-amount").innerText = taxAmount;
  document.getElementById("total").innerText = totalAmount;
}

//phone increse  or decrese event
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

//Case increse or decrese event
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
