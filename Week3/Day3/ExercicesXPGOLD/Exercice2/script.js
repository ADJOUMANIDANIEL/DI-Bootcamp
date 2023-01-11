let par = document.getElementById("par");

par.addEventListener("dragstart", dragStart);
par.addEventListener("dragend", dragEnd);

function dragStart(event) {
  event.currentTarget.style.backgroundColor = "gray";
}

function dragEnd(event) {
  let _x = event.clientX;
  let _y = event.clientY;
  console.log(event);
  event.target.style.left = _x + "px";
  event.target.style.top = _y + "px";
  event.target.style.position = "absolute";
  let random = Math.floor(Math.random() * 100);
  event.target.style.fontSize = random + "px";
}
