let gridContainer = document.getElementById("grid-container");
let zoneText = document.getElementById("text");

gridContainer.style.display = "grid";
gridContainer.style.gridTemplateColumns = "repeat(13,1fr)";
gridContainer.style.gridGap = "10px";
gridContainer.style.width = "100%";

zoneText.style.display = "grid";
zoneText.style.gridTemplateColumns = "repeat(13,1fr)";
zoneText.style.width = "100%";
zoneText.style.height = "50vh";
zoneText.style.margin = "30px auto";
zoneText.style.alignItems = "center";
zoneText.style.border = "1px solid black";

let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

for (let elem of alphabet) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = elem;
  newDiv.setAttribute("id", "grid");
  newDiv.style.backgroundColor = "black";
  newDiv.style.color = "white";
  newDiv.style.padding = "30px";
  newDiv.style.textAlign = "center";
  newDiv.setAttribute("draggable", "true");
  newDiv.addEventListener("dragstart", dragStart);
  newDiv.addEventListener("dragend", dragEnd);
  newDiv.addEventListener("mouseout", colorClear);
  gridContainer.appendChild(newDiv);
}

zoneText.addEventListener("dragover", allowDrop);
zoneText.addEventListener("drop", dragDrop);

function dragStart(event) {
  event.currentTarget.style.backgroundColor = "gray";
}

function dragDrop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let box = document.getElementById(data);
  event.target.appendChild(box);
}

function allowDrop(event) {
  event.preventDefault();
}

function dragEnd(event) {
  let _x = event.clientX;
  let _y = event.clientY;
  console.log(event);
  event.target.style.left = _x + "px";
  event.target.style.top = _y + "px";
  event.target.style.position = "absolute"; 
}

function colorClear(event) {
  event.currentTarget.style.backgroundColor = "black";
}


/* Reste à limiter la zone de deplacement  */