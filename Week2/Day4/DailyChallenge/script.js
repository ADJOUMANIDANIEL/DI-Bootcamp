// red,blue,orange,white,gray,purple

let listeDesMots = prompt("Entrez votre liste de mots avec des virgules comme separateur");
let tableauDesMots = listeDesMots.split(",");
let tableauLength = 0;
let wordStar  = '';
tableauDesMots.forEach((item)=>{
    if(tableauLength < item.length)
    {
      tableauLength = item.length
    }
});
maxStartLength = tableauLength + 4;
wordStar += "*".repeat(maxStartLength);
wordStar += "\n";
let espace = '';
 for(let index=0; index < tableauDesMots.length; index++)
{
    let espaceNumber = maxStartLength - tableauDesMots[index].length - 3 ;
    espace = ' '.repeat(espaceNumber)
    wordStar += "* " + tableauDesMots[index] + espace + "* \n";
}
wordStar = wordStar + "*".repeat(maxStartLength);
console.log(wordStar);