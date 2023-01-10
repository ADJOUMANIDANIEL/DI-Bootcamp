
let selectDernierDiv = document.getElementsByTagName("div");
selectDernierDiv[0].style.background = "lightblue";
selectDernierDiv[0].style.padding = "20px";
let masquerLiJohn = document.querySelectorAll("li")[0];
    masquerLiJohn.style.display="none";
let ajoutBordurePete = document.querySelectorAll("li")[1];
    ajoutBordurePete.style.border="5px solid #0400ff";
let tailleBody = document.querySelector("body").style.font.size = "20px";

console.log(selectDernierDiv);
console.log(masquerLiJohn);
