const divNavbar = document.getElementById("navBar");
let modificationNavbar = divNavbar.setAttribute("id", "socialNetworkNavigation");
let addLi = document.createElement("li")
let deconnexion = document.createTextNode("Logout")
let ajoutDeconnexionLi=  addLi.appendChild(deconnexion);
let idSocialNetworkNavigation = document.getElementById("socialNetworkNavigation")
let ajouter = document.getElementsByTagName("ul")[0].appendChild(addLi)
let addLink = document.createElement('a');
addLink.href="#";
let deplacerLinkDansLi = addLi.appendChild(addLink)
let deplacerLogoutDansLink = addLink.appendChild(deconnexion);
console.log(divNavbar);
console.log(modificationNavbar);
console.log(addLi);
console.log(deconnexion);
console.log(idSocialNetworkNavigation);

