// ============
// Consts
// ============

const btn = document.querySelector("button");

// Invalid event shall trigger an eslint error. A fix shall be suggested
btn.addEventListener("clck", () => {});

// Invalid css variable shall trigger an eslint error. A fix shall be suggested
btn.style.color = "var(--text-grn)";

// Prefer named parameters if a function needs 3 or more parameters
function calcPayment( price, discount, quantity ) {
  return (price - ( price * discount / 100 )) * quantity;
}


