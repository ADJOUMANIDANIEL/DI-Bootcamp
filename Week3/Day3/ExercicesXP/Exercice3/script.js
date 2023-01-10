function allowDrop(event) {
    event.preventDefault(); // Necessary. Allows us to drop.
  }
  
  //add dashes
  function allowEnter(event) {
    event.target.classList.add('over');
  }
  
  //remove dashes
  function allowLeave(event) {
    event.target.classList.remove('over');
  }
  
  function dragStart(event) {
  console.log("target:",  event.target)
  console.log("id: ",  event.target.id )
  event.dataTransfer.setData("text", event.target.id);
  }
  
  function dragDrop(event) {
  event.preventDefault();

  let data = event.dataTransfer.getData("text");
  console.log("data: ",  data)
    
  let box = document.getElementById(data)
  event.target.appendChild(box);
  }


  let element = document.getElementById("box")
element.setAttribute('draggable','true');

element.addEventListener("dragstart", function(event) {
  console.log ("drag " +  "X: " + event.clientX  + " Y: " +  event.clientY);
});

element.addEventListener("dragend", function(event) {
    let _x = event.clientX;
    let _y = event.clientY;
    console.log(event)
    event.target.style.left = _x + "px";
    event.target.style.top = _y + "px";
    event.target.style.position = "absolute"; 
    console.log ("dragend" + "X: " + event.clientX  + " Y: " +  event.clientY );
  });
  