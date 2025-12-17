const button = document.querySelector("button");

button.addEventListener("click", () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(p => {
    total += Number(p.innerText);
  });

  document.getElementById("ans").innerText = total;
});
