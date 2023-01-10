let allBoldItems ="";
function getBold_items() {
     allBoldItems = document.querySelectorAll("strong");
    console.log(allBoldItems);
}getBold_items();

function highlight() {
    for(let item of allBoldItems){
        item.style.color = "blue";
    }
}highlight()/**mettre les mot en gras en blue */

function return_normal() {
    for(let items of allBoldItems){
        items.style.color = "black";
    }
}return_normal()/**mettre les mot en blue en noire */


    document.querySelector("p").addEventListener("mouseover", mouseOver);
    function mouseOver() {//from w w  w .  j a v  a  2  s .  c o  m
        document.querySelector("p").style.color = "orange";
    }highlight()

    document.querySelector("p").addEventListener("mouseout", mouseOut);
    function mouseOut() {//from w w  w .  j a v  a  2  s .  c o  m
        document.querySelector("p").style.color = "black";
    }return_normal()
