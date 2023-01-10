let couleurDifferent = document.getElementById("btn");
let selectDiv = document.querySelector("div");

couleurDifferent.addEventListener("click", clickEvent)
couleurDifferent.addEventListener("mouseover", mouseoverEvent);
couleurDifferent.addEventListener("mouseout", mouseoutEvent);

function clickEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    let text = document.createElement("h1");
    text.innerHTML = "BIENVENU CHEZ ATOS ACADEMY COTE D'IVOIRE  !";
    text.style.color = "#" + randomColor;
    selectDiv.appendChild(text);
}

function mouseoutEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    selectDiv.style.background ="#" + randomColor

}

function mouseoverEvent(){
    selectDiv.style.background = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlX2QJQZc5dOFHCyqdA6js11qf1fC7MPCTI7oyYpw&s)";
    selectDiv.style.backgroundSize = "100%";
    selectDiv.style.backgroundRepeat ="no-repeat";
}