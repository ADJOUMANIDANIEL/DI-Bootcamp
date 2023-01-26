// EXERCICE 1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
let suppression  = fruits.splice(0,1);
let trie = fruits.sort();
let ajouterFin =fruits.push("Kiwi");
let supprimer =  fruits.splice(0, 1)
let tableauInverse = fruits.reverse();

console.log(fruits);
console.log(suppression);/**['Apples', 'Oranges', 'Blueberries'] */
console.log(trie);/**['Apples', 'Blueberries', 'Oranges'] */
console.log(ajouterFin);/**['Apples', 'Blueberries', 'Oranges', 'Kiwi'] */
console.log(supprimer);/**['Blueberries', 'Oranges', 'Kiwi'] */
console.log(tableauInverse);/***['Kiwi', 'Oranges', 'Blueberries'] */

// EXERCICE 2
const moreFruits = ["Banana",
                    ["Apples", 
                      ["Oranges"], "Blueberries"]
                    ]
console.log(moreFruits[1][1][0]);
