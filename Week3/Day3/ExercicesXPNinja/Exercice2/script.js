document.onmousemove = animatedCircles;

function animatedCircles(event) {
  let circle = document.createElement("div");
  circle.style.width = "20px";
  circle.style.height = "20px";
  circle.style.border = "1px solid #000";
  circle.style.position = "absolute";
  circle.style.borderRadius = "15px";
  document.body.appendChild(circle);

  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";
  let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  const colors = "#" + randomColor;
  circle.style.borderColor = colors;

  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft - 20 + "px";
  circle.style.top = circle.offsetTop - 20 + "px";

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
}
