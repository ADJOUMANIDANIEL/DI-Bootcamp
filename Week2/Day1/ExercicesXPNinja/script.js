/*Exercise 1 : Evaluation */

// Prediction : True, car 5 est supérieur à 1
5 >= 1;

// Prediction : False, car 0 est inférieur à 1
0 === 1; 

// Prediction : False, car 4 n'est pas inferieur à 1
4 <= 1; 

//Prediction : false, car 1 n'est pas different de 1
1 != 1; 

// Prediction : true, car l'emplacement en memoire de A est supérieur à pour B
"A" > "B"; 

// Prediction : true, car l'emplacement en memoire de C est supérieur à pour B
"B" < "C"; 

// Prediction : true, car l'emplacement en memoire de a est supérieur à pour A
"a" > "A"; 

// Prediction : false, car l'emplacement en memoire de b est supérieur à pour A
"b" < "A" 

// Prediction : false
true === false; 

// Prediction : false
true != true;

/*Exercise 2 : Ask For Numbers*/

let userNumber = prompt("Entrez vos nombres séparer d'une vircule");

let userArray =  userNumber.split(",");

let other = (a, b) => parseInt(a) + parseInt(b);
console.log(`La somme de vos différents nombre est ${userArray.reduce(other)}`);

/*Exercise 3 : Find Nemo*/

let userSentence = prompt("Entrez une phrase contenant le mot Nemo");

let position = userSentence.search("Nemo");

console.log(`I found Nemo at ${position}`);

/*Exercise 4 : Boom*/

let num = prompt("Please enter a number:");
const result = "boom"
if (num < 2) {
  console.log("boom");
} else if (num % 2 === 0 && num % 5 === 0) {
  console.log("BOOM!".toUpperCase());
} else if (num % 2 === 0) {
  console.log("boom!".toLowerCase());
} else if (num % 5 === 0) {
  console.log("BOOM");
} 
if(num> 2){
  console.log("B" + "o".repeat(num) + "m");
}