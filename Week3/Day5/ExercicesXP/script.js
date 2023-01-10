function playTheGame() {
    const isUserReady = confirm("Vous voulze jouer à ce jeu")
    if (!isUserReady) {
        return alert("Pas de problème, au revoir");
    }
    const computerNumber= generateRandomNumber()

    let answer = prompt("enter a number");
    let numberOfTries = 0
    while (Number(answer) != computerNumber) {
        numberOfTries = numberOfTries + 1
        if (numberOfTries ===3) {
            return alert("Sorry too many trie. The number was " + computerNumber)
        }
        if (!isOnlyNumbres(Number(answer))) {
            alert("Désolé, pas un numéro, au revoir") 
         }
         if (!isBetweenZeroAndTen(answer)) {
             alert("Désolé, ce n'est pas un bon chiffre, au revoir")
         }
         let biggerOrSmaller = (Number(answer) > computerNumber) ? "bigger" : "smaller"
         alert("you number is " + biggerOrSmaller + "than the computer's, guess again")
         answer= prompt("enter another number")
    }

    const finalMessage = "Winner the number was indeed "+ computerNumber + "you found in " + numberOfTries + 1 + "tries "
    alert(finalMessage)
}
function isOnlyNumbres(str){
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
}

function isBetweenZeroAndTen(number) {
    return number > 0 && number <= 10
}

function generateRandomNumber(params) {
    return Math.floor(Math.random()*11)
}

function comparerNumero(userNumber,computerNumber) {
    if (userNumber === computerNumber) {
        alert("winner")
        return
    }  
    if (userNumber > computerNumber) {
        alert("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau")
    }
}