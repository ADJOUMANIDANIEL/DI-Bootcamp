/* Exercice 1 : Your Favorite Food
   ----------
Déclaration de mes variables : favoriteFood et favoriteMeal */

let favoriteFood = "Tchep";
let favoriteMeal = "Yaourt";
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

/* Exercice 2 : Series
   ----------
   Part |
    */
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;
//mise à jour de la ligne 20
let myWatchedSeriesSentence = "J'ai régardé Black panther, un film qui parle des conflits internes d'un pays";
console.log(` J'ai regardé ${myWatchedSeriesLength} Film : ${myWatchedSeriesSentence}`);

/* Exercice 2 : Series
   ----------
   Part ||
    */
myWatchedSeries[2] = "friend";
myWatchedSeries.push("Naruto");
myWatchedSeries.unshift("Ninja");
delete myWatchedSeries[0];
console.log(myWatchedSeries[2][2]);
console.log(myWatchedSeries);

/* Exercice 3 : Le convertisseur de température
   ----------  
*/
let celsiusVariable = 15;
let fahrenheitVariable =  (celsiusVariable / 5) * 9 + 32;
let info = `${celsiusVariable} \xB0C is ${fahrenheitVariable} \xB0F`;
console.log(info)

/* Exercice 4 : Devinez Les Réponses #1
   -----------
*/
let c;
let a = 34;
let b = 21;
console.log(a+b) // First expression
// Prédiction : Le résultat sera 55, car 34 et 21 sont des numbers
// Actual : 55

a = 2;

console.log(a+b) // Second expression
// Prediction : Le resultat sera 23, car la nouvelle valeure de a est 2
// Actual : 23

console.log(3 + 4 + '5') // Analyse the code
// Prediction : Le resultat sera 75, car les entiers sont également des chaînes dont Javascript fait une concaténation
// Actual : 75

/* Exercice 5 : Devinez Les Réponses #2
   ----------
*/
typeof(15)
// Prediction: type out is number
// Actual: number

typeof(5.5)
// Prediction: type out is number
// Actual: number

typeof(NaN)
// Prediction: type out is number
// Actual:number 

typeof("hello")
// Prediction: type out is string
// Actual: string

typeof(true)
// Prediction: type out is string
// Actual: Boolean

typeof(1 != 2)
// Prediction: type out is string
// Actual: boolean

"hamburger" + "s"
// Prediction: type out is string
// Actual: string

"hamburgers" - "s"
// Prediction: type out is string
// Actual: number

"1" + "3"
// Prediction: type out is string
// Actual: string

"1" - "3"
// Prediction: type out is number
// Actual: number

"johnny" + 5
// Prediction: type out is string
// Actual: string

"johnny" - 5
// Prediction: type out is number
// Actual: number

99 * "hello"
// Prediction: type out is NaN
// Actual: number

1 != 1
// Prediction: type out is boolean
// Actual: boolean

1 == "1"
// Prediction: type out is boolean
// Actual: boolean

1 === "1"
// Prediction: type out is boolean
// Actual: boolean


/* Exercice 6 : Devinez Les Réponses #3
   ----------
*/

5 + "34"
// Prediction: le resultat est 534 car javascript fait une concatenation
// Actual:534

5 - "4"
// Prediction: Le resultat est 1 car javascript reconnais automatiquement des nombres pour un calcul
// Actual: 1

10 % 5
// Prediction: car le symbole % renvoie le reste après le resultat
// Actual: 0

5 % 10
// Prediction:
// Actual:

"Java" + "Script"
// Prediction: le resultat est JavaScript car Java et Script sont des chaînes de caratères
// Actual: JavaScript

" " + " "
// Prediction: le resultat sera " "
// Actual: '  '

" " + 0
// Prediction: le resulat sera' 0'
// Actual: ' 0'

true + true
// Prediction: le resulat sera true
// Actual: 2

true + false
// Prediction: le resultat sera 1 car javascript considère true comme un nombre
// Actual: 1

false + true
// Prediction: le resultat sera 1 car javascript considère true = 1
// Actual: 1 

false - true
// Prediction: le resultat sera -1 car javascript considère false = 0
// Actual: -1

!true
// Prediction: le resultat sera false
// Actual: false

3 - 4
// Prediction: le resultat sera -1 car 3 et 4 sont des nombres
// Actual: -1

"Bob" - "bill"
// Prediction: le resultat sera NaN