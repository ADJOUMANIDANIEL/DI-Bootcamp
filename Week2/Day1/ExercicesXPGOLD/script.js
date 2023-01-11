/*Exercice 1 : Favorite Color 
  --------*/

  let sentence = ["my","favorite","color","is","blue"];
  let secondSentence = sentence.join();
  
  console.log(secondSentence);
  
  /*Exercise 2 : Mixup
    --------*/
    
  // Create 2 variables. The values should be strings. For example:
  let firstVariable = "Ange ";
  let secondVariable = "Tia";
  
  // Slice out and swap the first 2 characters of the two strings from part 1.
  console.log(firstVariable.slice(0,2));
  console.log(secondVariable.slice(0,2));
  
  // Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
  let thirdVarible = firstVariable.concat(secondVariable)
  
  // Finally console.log the new concatenated string.
  console.log(thirdVarible);
  
  /*Exercise 3 : Calculator
    --------*/
    
  let num1 = prompt("Enter your first number");
  console.log(typeof(num1));
  let num2 = prompt("Enter your second number");
  sum = parseInt(num1) + parseInt(num2);
  alert(sum);
  
  /* BONUS
     -----
  soustraction */ 
  sub = parseInt(num1) - parseInt(num2);
  alert(sub);
  // multiplication
  multi = parseInt(num1) * parseInt(num2);
  alert(multi);
  // division
  div = parseInt(num1) / parseInt(num2);
  alert(div);
  