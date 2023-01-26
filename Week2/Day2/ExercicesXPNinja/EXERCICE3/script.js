/**
 * Prompt the user for a word and save it to a variable.
Delete all the vowels of the word and console.log the result.
Bonus: Replace the vowels with another character and console.log the result
 */

// Prompt the user for a word
let word = prompt("Enter a word:");

// Delete all the vowels from the word
let noVowels = word.replace(/[aeiou]/gi, '');

// Console.log the result
console.log(noVowels);

// Bonus: Replace the vowels with another character
let replaced = word.replace(/[aeiou]/gi, function(match) {
  switch (match) {
    case 'a':
      return 1;
    case 'e':
      return 2;
    case 'i':
      return 3;
    case 'o':
      return 4;
    case 'u':
      return 5;
  }
});

// Console.log the result
console.log(replaced);