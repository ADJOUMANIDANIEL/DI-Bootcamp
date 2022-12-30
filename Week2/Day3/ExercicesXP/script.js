////////////////////////////////////////////Exercice1//////////////////////////////////////////////////////////////////;

const people = ["Greg", "Mary", "Devon", "James"];
let supprimer =  people.splice(0, 1)
let modification= people[2] = "Jason";
let ajouterFin = people.push("kouakou");
let position =people.indexOf("Mary");
let copieTableau = people.slice(1,3);
let position1 = people.indexOf("Foo");
let last = people.indexOf(1);

//console.log(people);
console.log(supprimer);/**['Mary', 'Devon', 'James'] supprime greg */
console.log(modification);/**['Mary', 'Devon', 'Jason'] remplacer james par jason */
console.log(ajouterFin);/**['Mary', 'Jason', 'James', 'KOUAKOU']  ajouter KOUAKOU*/
console.log(position);/**position 0 */
console.log(copieTableau);/**['Devon', 'Jason'] */
console.log(position1);/**-1  il met -1 parce qu'il ne trouve pas le mot dans le tableau */ 
console.log(last);

for (let i=0; i<copieTableau.length; i++) {/**Mary Devon Jason kouakou */
    console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if(people[i] == "Jason"){
        break;
    }  
}

////////////////////////////////////////////Exercice2//////////////////////////////////////////////////////////////////;

const colors = ["blue", "rouge", "violet", "blanc","marron"];
const suffixe = ["blue", "rouge", "violet", "blanc","marron"];

for (let i = 0; i < colors.length; i++) {
    console.log("Mon choix n° " + colors.indexOf("rouge") +" est " +colors[1]);
    console.log("Mon choix n° " + colors.indexOf("violet") +" est " +colors[2]);
    console.log("Mon choix n° " + colors.indexOf("blanc") +" est " +colors[3]);
    console.log("Mon choix n° " + colors.indexOf("marron") +" est " +colors[4]);
    if (colors.length == colors.length) {
        break;
    }
}

for (let i = 0; i < suffixe.length; i++) {
    console.log(suffixe.indexOf("rouge") +" Mon choix n° " + suffixe.indexOf("rouge") +" est " +suffixe[1]);
    console.log(suffixe.indexOf("violet") + " Mon choix n° " + suffixe.indexOf("violet") +" est " +suffixe[2]);
    console.log(suffixe.indexOf("blanc") +" Mon choix n° " + suffixe.indexOf("blanc") +" est " +suffixe[3]);
    console.log( suffixe.indexOf("marron")+" Mon choix n° " + suffixe.indexOf("marron") +" est " +suffixe[4]);
    if (suffixe.length == suffixe.length) {
        break;
    } 
}


////////////////////////////////////////////Exercice3//////////////////////////////////////////////////////////////////;

let saisie;
do{
    saisie =prompt("saisie un numero"); 
    if (saisie < 10) {
       console.log("recommencez svp "); 
    }else{
        console.log("merci vous avez saisie "+ typeof(saisie)  + " un nombre superieur a 10 bravo");
    }
}
while (!saisie);


////////////////////////////////////////////Exercice4//////////////////////////////////////////////////////////////////;
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
let nombreNumberOfFloors= building.numberOfFloors;
let nombreFirstFloor = building.numberOfAptByFloor.firstFloor;
let nombreThirdFloor = building.numberOfAptByFloor.thirdFloor;
let nomDeuxiemeLocataire = building.nameOfTenants[2];
let davi = building.numberOfRoomsAndRent.david[0];
let sommeSaraDavid = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]
let sommeDan = building.numberOfRoomsAndRent.dan[1];

console.log(nombreNumberOfFloors);/**4 */
console.log("étages 1 nous avons " + nombreFirstFloor + " appartements ");/**étages 1 nous avons 3 appartements  */
console.log("étages 3 nous avons " + nombreThirdFloor + " appartements ");/** étages 3 nous avons 9 appartements */
console.log(nomDeuxiemeLocataire);
console.log(" le nom du deuxième locataire est " + nomDeuxiemeLocataire + " et le nombre de pièces qu'il possède dans son appartement est " + davi);
console.log("la somme du loyer de Sarah et de David est " + sommeSaraDavid);
console.log("la somme du loyer de Dan est "+ sommeDan);

if (sommeSaraDavid > sommeDan) {
    let nouveauSoldeDan = sommeDan + 1200;
    console.log("la somme du nouveau loyer de Dan est " + nouveauSoldeDan);
}else{
    console.log("la somme du loyer de Sarah et de David est inferieur a celui de Dan");
}

////////////////////////////////////////////Exercice5//////////////////////////////////////////////////////////////////;

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  for (let x in person) {
    console.log("les clés de l'objet sont " + x) //fname lname age
    //console.log(person[x]) // John Doe 25
  }

  for (let x in person) {
    console.log("les valeurs de l'objet sont "+ person[x]) // John Doe 25
  }

////////////////////////////////////////////Exercice6//////////////////////////////////////////////////////////////////;

const details = {
    my: 'name ',
    is: 'Rudolf ',
    the: 'raindeer'
  }

  let test = "";
  for(let x in details){
    test +=x+' '+ details[x] + ' ';
  }
  console.log(test);

////////////////////////////////////////////Exercice7//////////////////////////////////////////////////////////////////;
  const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

  let alphabet = names.sort();
  let societeSecret = "";
    for (let i of names) {
    societeSecret += i[0];
    }
    console.log(alphabet);/**['Amanda', 'Bernard', 'Jack', 'Kyle', 'Philip', 'Sarah'] */
    console.log("le nom de la societé est: "+ societeSecret);/**ABJKPS */