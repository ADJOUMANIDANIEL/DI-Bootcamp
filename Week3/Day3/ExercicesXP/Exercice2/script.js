
let recupereDiv1 = document.getElementById('#animate');//recuperation de l'id de la prémière div
let creationDiv1 = document.createElement('div');// creation de la 1ere div 
let reationDiv2 = document.createElement('div');// creation de la 1ere div 
creationDiv1.classList.add('div1');
reationDiv2.classList.add('div2');
reationDiv2.setAttribute('id','main');//creation des attributs
creationDiv1.appendChild(reationDiv2);//remplacer id de la premiere div par outer
animate.appendChild(creationDiv1);//remplacer id de la deuxieme div par iner
 
//execution de la fonction avec les differents methodes d'animation
function myMove() {
  let elem = document.getElementById("main");
  let  position = 0;//initialisation de la valeur qui permet d'atteindre l'extremité du conteneur
  const id = setInterval(cadre, 1);
    function cadre(){ //setInterval permet de faire deplacer le petit carreau
    if (position >= 350) {//ici 350 est  la valeur qui permet d'atteindre l'extremité du conteneur
      clearInterval(id);//  ici clearInterval permet al a boîte d' atteint l'extrémité droite du conteneur
    }
    else {
      position++;
      elem.style.left = "0 px";
      elem.style.left = position + "px";//position du careau et la valeur qui permet d'atteindre l'extremité du conteneur
    }
  };
}
button.addEventListener('click', myMove);
