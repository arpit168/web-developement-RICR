const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const arpit = `rgb(${random(100)} ${random(100)} ${random(100)})`;
  document.body.style.backgroundColor = arpit;
});


