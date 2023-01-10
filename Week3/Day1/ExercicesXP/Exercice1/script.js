//////////////////////////////////////////exercice 1///////////////////////////////////////////////////
let recupererDiv = document.getElementById("container").innerHTML;
let remplacerPeteAndRichard = document.querySelector(".list").children[1].textContent = "Richard";
const lists = document.querySelectorAll(".list")
const ajoutClassStudentList = lists.forEach(lists=>lists.classList.add("student_list"));
const ajoutDeuxElements= document.querySelector("ul.list.student_list")
const test=  ajoutDeuxElements.classList.add("university", "attendance")
console.log(recupererDiv);
console.log(remplacerPeteAndRichard);/**remplace Pete en Richard  */
lists.forEach(list=>list.firstElementChild.textContent = "Daniel")/**ajout Daniel au debut de chaque liste */
lists[1].children[1].remove()/**supprime Sara */
console.log(lists);
console.log(ajoutClassStudentList);/**ajouter une classe */
console.log(test);