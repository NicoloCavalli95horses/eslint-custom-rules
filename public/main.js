// ============
// Consts
// ============

const btn = document.querySelector("button");

// Invalid event shall trigger an eslint error. A fix shall be suggested
btn.addEventListener("clck", () => {});

// Invalid css variable shall trigger an eslint error. A fix shall be suggested
btn.style.color = "var(--text-grey)";

// Prefer named parameters when 3 or more parameters are required
function calcPayment( price = 100, discount = 20, quantity = 2 ) {
  return (price - ( price * discount / 100 )) * quantity;
}