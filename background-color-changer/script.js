const btn = document.querySelector("button");

const changeBackgroundColor = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
};

btn.addEventListener("click", changeBackgroundColor);
