// Part I
function setTimeoutFunction() {
    alert( "Hello World");
  }
  setTimeout(setTimeoutFunction, 2000);


// Part II
function setTimeoutFunctionDeuxieme(params) {
let afficheDiv = document.getElementById("container")
let addP = document.createElement("p");
let phrase = document.createTextNode("Hello World");
let ajoutPhraseParagraphe=  addP.appendChild(phrase);
let ajouterparagrapheDiv = afficheDiv.appendChild(addP)
console.log(afficheDiv);
}
setTimeout(setTimeoutFunctionDeuxieme, 2000);


// Part III
let interval = setInterval(myCallback, 2000);
function myCallback()
{
let afficheDiv1 = document.getElementById("container")
let addP1 = document.createElement("p");
let phrase1 = document.createTextNode("Hello World");
let ajoutPhraseParagraphe1=  addP1.appendChild(phrase1);
let ajouterparagrapheDiv1 = afficheDiv1.appendChild(addP1)
 console.log(afficheDiv1);
}
function myStopFunction() {
    clearInterval(interval);
  }
