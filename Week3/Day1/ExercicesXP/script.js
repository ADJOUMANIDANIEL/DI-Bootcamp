///////////////////////////////////////// Exercice 1 ////////////////////////////////////////////

// Récupérez le divet console.log it
let myDiv = document.getElementsByTagName('div');
    console.log(myDiv);

// Changez le nom "Pete" en "Richard".
let element = document.querySelector("ul > li:last-child");
    element.textContent = "Richard";

// Remplacez chaque prénom des deux <ul>'spar votre nom.
let lists = document.querySelectorAll(".list");
    lists.forEach(list => list.firstElementChild.textContent = "Kone");

// Supprimez le <li>qui contient le nœud de texte "Sarah".
    lists[1].children[1].remove();

    // astuce
    // Ajoutez une classe appelée student_list aux deux <ul>'s
lists.forEach(list => list.classList.add("student_list"));

// Ajoutez les classes universityet attendance au premier <ul>.
let firstUl = document.querySelector("ul .list .student_list");
    firstUl.classList.add("university", "attendance");


///////////////////////////////////////// Exercice 2 ////////////////////////////////////////////

//2) Ajoutez une couleur d'arrière-plan "bleu clair" et un peu de rembourrage au fichier <div>.
let myDiv = document.querySelector('div');
    myDiv.style.backgroundColor = "lightblue";
    myDiv.style.padding = "20px";

//3) Ne pas afficher le <li>qui contient le nœud de texte "John".
let John = document.querySelectorAll('li')[0];
    John.style.display = "none";


//4) Ajoutez une bordure au <li>qui contient le nœud de texte "Pete".
let myLi = document.querySelectorAll('li')[1];
    myLi.style.border = "2px solid gray";

//5) Modifiez la taille de la police de tout le corps.
    document.body.style.fontSize = "2em";

//6) Bonus : Si la couleur de fond du div est "bleu clair", alertez "Bonjour x et y" (x et y sont les utilisateurs dans la div).
    const divBackground = getComputedStyle(mydiv).backgroundColor;
    if(divBackground === "rgb(173, 216, 230)")
    {
        console.log("Good morning X and Y");
    }


///////////////////////////////////////// Exercice 3 ////////////////////////////////////////////

//2) Dans le <div>, modifiez la valeur de l'attribut id de navBar à socialNetworkNavigation , à l'aide de la setAttribute méthode .
let myDiv = document.getElementById('navBar');
    myDiv.setAttribute('id', 'socialNetworkNavigation');

//3)
// Tout d'abord, créez une nouvelle <li>balise (utilisez la createElementméthode)
let newLi = document.createElement('li');

    //creation de la balise a
    newA = document.createElement('a');
    newA.href ='http://www.marlins.com';

// Créez un nouveau nœud de texte avec "Déconnexion" comme texte spécifié
let newTextLi = document.createTextNode('Deconnexion');

    //mettre le newTextLi dans le newA
    newA.appendChild(newTextLi);

// Ajoutez le nœud de texte au nœud de liste nouvellement créé ( <li>).
newLi.appendChild(newA);


// Enfin, ajoutez ce nœud de liste mis à jour à la liste non ordonnée ( <ul>), en utilisant la appendChildméthode.
let myUl = document.querySelector('ul') 
    myUl.appendChild(newLi);
    
    console.log(myUl);

//4)
let firstElem = myUl.firstElementChild.textContent;
    console.log(firstElem);

let lastElem = myUl.lastElementChild;
    
    console.log(lastElem);



///////////////////////////////////////// Exercice 4 ////////////////////////////////////////////


