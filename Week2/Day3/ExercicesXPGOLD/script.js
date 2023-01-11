/*Exercise 1 : Divisible By Three
Instructions
Loop through the array above and determine whether or not each number is divisible by three.
Each time you loop console.log true or false. */

let numbers = [123, 8409, 100053, 333333333, 7];

for (let elem of numbers) {
  if (elem % 3 == 0) {
    console.log(elem + " is divisible by three");
  } else {
    console.log(elem + " is not divisible by three");
  }
}

/*Exercise 2 : Attendance
Instructions
Given the object above where the key is the student’s name and the value is the country they are from.
Prompt the student for their name.
If the name is in the object, console.log the name of the student and the country they come from.
For example: "Hi! I'm [name], and I'm from [country]."
Hint: You don’t need to use a for loop, just look up the statement if ... in
If the name is not in the object, console.log: "Hi! I'm a guest." */

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};

let studentName = prompt("Please enter your name");

if (studentName in guestList) {
    console.log("Hi ! I'm " + studentName + " is in " + guestList[studentName]);
}else {
    console.log("Hi ! I'm a guest.")
}

/* Exercise 3 : Playing With Numbers
Instructions
Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.
1. Console.log the sum of all the numbers in the age array.
2. Console.log the highest age in the array.
 */

let age = [20,5,12,43,98,55];

let sumAge = 0;
let hightAge= 0;

for (let i = 0; i < age.length; i++) {
    sumAge += age[i];
    if (age[i] > hightAge) {
        hightAge = age[i];
    }
}

console.log("the add of All years is " + sumAge);
console.log("the Old years of All years is " + hightAge);