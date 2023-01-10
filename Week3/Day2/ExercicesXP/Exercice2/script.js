let form = document.forms[0];

let inputFnameId = document.getElementById("fname");
let inputLnameId = document.getElementById("lname");
let inputSubmitId = document.getElementById("submit");

let afficheUl = document.getElementsByClassName("ul");


let addLi = document.createElement("li");
let deplacerLiDansUl = document.getElementsByTagName("ul")[0].appendChild(addLi);
let phrase1 = document.createTextNode("first name of the user");
let ajoutPhrase1Li=  addLi.appendChild(phrase1);

let addLi1 = document.createElement("li");
let deplacerLiDansUl1 = document.getElementsByTagName("ul")[0].appendChild(addLi1);
let phrase2 = document.createTextNode("last name of the user");
let ajoutPhrase1L2 = addLi1.appendChild(phrase2);

let inputFnameName =  form.elements.fname;
let inputLnameName = form.elements.lname;
let inputSubmitName = form.elements.submit;
// let récupérerEntree1 = document.getElementById("fname").value;
// let récupérerEntree2 = document.getElementById("lname").value;

document.querySelector("#submit").addEventListener("click", function(event) {
    alert("pourquoi ?")
    event.preventDefault();
  }, false);

    function getValue() {
      // Sélectionner l'élément input et récupérer sa valeur
      let input = document.getElementById("fname").value;
      let input1 = document.getElementById("lname").value;
      // Afficher la valeur
    console.log(input);
    console.log(input1);
  }
console.log(form);
console.log(inputFnameId);
console.log(inputLnameId);
console.log(inputSubmitId);
console.log(inputFnameName);
console.log(inputLnameName);
console.log(inputSubmitName);
console.log(addLi);
console.log(addLi1);