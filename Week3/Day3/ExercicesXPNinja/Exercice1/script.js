let container = document.getElementById("grid-container");

container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(10,1fr)";
container.style.gridTemplateRows = "repeat(10,1fr)";
container.style.width = "100%";

let btn = document.createElement("button");
btn.innerHTML = "+";
btn.style.padding = "20px";
container.appendChild(btn);

btn.addEventListener("click", addCard);

function addCard() {
  let newCard = document.createElement("div");
  newCard.style.padding = "20px";
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  newCard.style.background = "#" + randomColor;
  container.appendChild(newCard);
}
