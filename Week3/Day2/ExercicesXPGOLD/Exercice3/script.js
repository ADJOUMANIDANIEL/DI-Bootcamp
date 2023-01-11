let divList = document.getElementById("root");

let shoppingList = [];

// creation des elements

let form = document.createElement("form");
let champSaisir = document.createElement("input");
champSaisir.type = "text";

let addItem = document.createElement("button");
addItem.innerHTML = "AddItem";

let clearAll = document.createElement("button");
clearAll.innerHTML = "clearAll";

//Ajout des elements au formulaire 
form.appendChild(champSaisir);
form.appendChild(addItem);
form.appendChild(clearAll);

//ajout du formulaire à la div
divList.appendChild(form);


// Ajouter un element à la liste de shopping
function funAddItem(e) {
  e.preventDefault(e);  
  let item = champSaisir.value;
  shoppingList.push(item);
  console.log(shoppingList);
}



// Supprimer tous les elements de la liste de shopping
function funClearAll(){
    for (let elem of shoppingList){
        elem.remove();
    }
}

addItem.addEventListener("click", funAddItem); //Evennement d'ajout
clearAll.addEventListener("click", funClearAll); //Evennement de suppression



