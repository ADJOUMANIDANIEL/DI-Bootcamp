// Part I

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

//1- Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

//2- Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(myWatchedSeriesSentence);

//3- Console.log a sentence using both of the variables created above
console.log("I watched " + myWatchedSeriesLength + " : " + myWatchedSeriesSentence);


// Part II

//1- Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries[2] = "friend";
console.log(myWatchedSeries);

//2- Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("Titanic");
console.log(myWatchedSeries);

//3- Add, at the beginning of the array, the name of your favorite series
myWatchedSeries.unshift("La cassa de papel");
console.log(myWatchedSeries);

//4- Delete the series “black mirror”.
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

//5- Console.log the third letter of the series “money heist”.
console.log(myWatchedSeries[1].substring(2,3));

//6- Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console;log(myWatchedSeries);