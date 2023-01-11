// main function
function playTheGame() {
    let response = confirm("Do you want to play ?");
    if (!response) {
        alert("No problem, Goodbye");
        return;
    }

    let value = prompt("Enter a number between 0 and 10");

    if (isNaN(value)) {
        alert("Sorry Not a number, Goodbye"); 
        return;
    }

    if ( !isNaN(value) && (Number(value) < 0 || Number(value) > 10) ) {
        alert("Sorry it’s not a good number, Goodbye"); 
        return;
    } else {
        let computerNumber  = (Math.random() * (10 - 0) + 0).toFixed(0);
        compareNumbers(value, computerNumber);
    }
}

// function to compare numbers
function compareNumbers(userNumber,computerNumber) {
    let nbChance = 1;

    while (nbChance < 4) {
        if (Number(userNumber) == Number(computerNumber)) {
            alert("WINNER");
            return;
        }

        if (Number(userNumber) > Number(computerNumber)) {
            alert("Your number is bigger then the computer’s, guess again");
        }

        if (Number(userNumber) < Number(computerNumber)) {
            alert("Your number is smaller then the computer’s, guess again");
        }

        let choice = prompt("Enter a new number");
        while ( isNaN(choice) ) {
            choice = prompt("Incorrect value, enter another number");
        }
        userNumber = Number(choice);

        nbChance++;
    }

    // End of the game
    alert("out of chances");
    return;
}