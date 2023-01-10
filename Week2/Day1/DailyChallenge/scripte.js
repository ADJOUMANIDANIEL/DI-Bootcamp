// ======================= EXERCICE1 =======================

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//1- Remove Banana from the array.
fruits.shift();
console.log(fruits);

//2- Sort the array in alphabetical order.
fruits.sort();
console.log(fruits);

//3- Add “Kiwi” to the end of the array.
fruits.push("kiwi");
console.log(fruits);

//4-Remove “Apples” from the array. Don’t use the same method as in part 1 
fruits.splice(0,1);
console.log(fruits);

//5- Sort the array in reverse order
fruits.reverse();
console.log(fruits);


// ======================= EXERCICE2 =======================

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// Accédez puis console.log « Oranges »
moreFruits[1][1][0];
console.log(moreFruits[1][1][0]);
