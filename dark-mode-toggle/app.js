document.querySelector("input").addEventListener("click", () => {
  const input = document.querySelector("input");

  document.body.style.backgroundColor = input.checked ? "black" : "white";
});
