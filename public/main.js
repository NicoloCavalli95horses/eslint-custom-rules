// ============
// Consts
// ============

const btn = document.querySelector('button');

// Invalid event shall trigger an eslint error. A fix shall be suggested
btn.addEventListener("clck", () => {});

// Invalid css variable shall trigger an eslint error. A fix shall be suggested
btn.style.color = "var(--text-gren)";



