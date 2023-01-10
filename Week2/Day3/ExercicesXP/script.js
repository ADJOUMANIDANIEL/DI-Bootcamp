// EXERCICE1 
// Part I - Review about arrays
const people = ["Greg", "Mary", "Devon", "James"];

//1) Write code to remove “Greg” from the people array.
people.splice(0, 1);
console.log(people);

//2) Write code to replace “James” to “Jason”
people[2]="Jason";
console.log(people);

//3) Write code to add your name to the end of the people array.
people.push("Marlin's");
console.log(people);

//4) Write code that console.logs Mary’s index
people.indexOf('Mary');
console.log(people.indexOf('Mary'));

// 5)
people.slice(1);
console.log(people.slice(1));

//6) Write code that gives the index of “Foo”.
people.indexOf("Foo");
console.log(people.indexOf("Foo"));

//7) Create a variable called last which value is the last element of the array.
let last = people[2];
    console.log(last);
    // the relationship between the index of the last element of the array and the length of the array
    // Array.length == index.length + 1

    // PART II - LOOPS

//1- Using a loop, iterate through the people array and console.log each person.
for(let i = 0; i < people.length; i++)
{
    console.log(people[i] + "\n");
}

//2- Using a loop, iterate through the people array and exit the loop after you console.log “Jason”
for(let i = 0; i < people.length; i++)
{
    if (people[i] == "Jason") {
        break;
    }
    console.log(people[i] + "\n");
}

// EXERCICE 2 
const colors = ["green", "blue", "yellow", "red", "orange"];
for(let color in colors)
{
    console.log(`My ${Number(color) + 1} is ${colors[color]}`);
}

// EXERCICE 3 

let checker = true;
while(checker)
{
    entry = prompt('Entrer un nombre');
    type = typeof(entry);
    console.log(type);
    number = Number(entry);
    if(!isNaN(number) && number > 10 )
    {
        break
    }
}

// EXERCICE 4
// 1) 
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

//2) Console.log the number of floors in the building.
console.log(building.numberOfFloors);

//3) Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

//4) Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1]);

//5) Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
 sarahAndDavidRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
 danRent = building.numberOfRoomsAndRent.dan[1];
 if (sarahAndDavidRent > danRent) {
    danRent += 1200
}

// EXERCICE 5 
//1) Create an object called family with a few key value pairs.
const family = {
    firstName : "KONE",
    lastName : "ISMAEL"
}

//2) Using a for in loop, console.log the keys of the object.
for(let elt in family)
{
    console.log(elt);
}

//3) Using a for in loop, console.log the values of the object
for(let elt in family)
{
    console.log(family[elt]);
}

// EXERCICE 6 
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

//1) Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let text = "";
for(let detail in details)
{
    text += detail + ' ' + details[detail] + ' ';
}
console.log(text);

// EXERCICE 7 
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let secret = '';
for(let x of names)
{
    secret += x[0]
}
console.log(secret);