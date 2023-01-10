let recupereH1 = document.getElementsByTagName("h1")
let afficheP = document.querySelectorAll("p")
let supprimerDernierP = afficheP[3].remove();
let afficheH2 = document.getElementsByTagName("h2");
afficheH2[0].addEventListener('click', function(){
    afficheH2[0].style.background = "red"
        })
let masquerH3 = document.getElementsByTagName("h3");
masquerH3[0].addEventListener('click', function(){
    masquerH3[0].style.display="none"
        })
Button.addEventListener("click", informations);
function informations() {
    let myP = document.querySelectorAll('p');
    for(let p of myP){
        p.style.fontWeight = "bold";
    }
}

recupereH1.onmouseover = function() {
    this.style.fontSize = "50px";
}

let para = document.getElementById("p2");
para.addEventListener('mouseover',()=>{
    para.style.animation = "fadeOut 2s"
}),


console.log(recupereH1);/**permet d'afficher le H1 */
console.log(afficheP);
console.log(supprimerDernierP);/**supprime le dernier paragraphe */
console.log(afficheH2);
console.log(masquerH3);