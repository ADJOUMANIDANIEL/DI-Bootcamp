
    // EXERCICE 1 //

    let food = 'Chocolat';
    let meal = 'diner';
    console.log('I eat ' + food + ' at every ' + meal);




    // EXERCICE 2 //

    debugger;

    const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
    /**
        Correcteur: Yannick GOUGUIA

      ligne 22: On te demande de retourner la longueur des elements du tableau myWatchedSeries et nom de definir une valeur
    */

    let myWatchedSeriesLength = 3; 
    let myWatchedSeriesSentence = ('J\'ai regardé black mirror');

    /**
        Correcteur: Yannick GOUGUIA

      ligne 30: il faut afficher les variables
    */
    console.log('I watched 1 serie : black mirror, money heist, and the big bang theory');

    
    myWatchedSeries[0] = "friends"
    console.log(myWatchedSeries) // ["friends", "money heist", "the big bang theory"];

    
    myWatchedSeries.push("black cat"); // ajoute de "black cat" à la fin d'un tableau;
    console.log(myWatchedSeries) // ["black mirror", "money heist", "the big bang theory", "black cat"];

    
    myWatchedSeries.splice(0, 0, "Checkers",); 
    console.log(myWatchedSeries) // ["Checkers", "black mirror", "money heist", "the big bang theory", "black cat"];

    
    myWatchedSeries.shift() 
    console.log(myWatchedSeries) //["black mirror", "money heist", "the big bang theory", "black cat"];

    
    let favorite = myWatchedSeries[3];
    console.log(favorite) // "money heist";

    console.log(myWatchedSeries);





    // exercice 3
    let temperature = 25;
    let temperature1 = " ";
    console.log





    // EXERCICE 4 //

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: It will output 35, because 34 and 21 are numbers
    // Actual: 55


    a = 2;

    console.log(a+b) //second expression
    // Prediction: It will output 23, because 2 and 21 are numbers
    // Actual: 23
    // c= 55

    console.log(3 + 4 + '5'); // Actual : 75;



    // EXERCICE 5 //

    typeof(15)
    // Prediction: Integer
    // Actual: number

    typeof(5.5)
    // Prediction: Float
    // Actual: number

    typeof(NaN)
    // Prediction: Number
    // Actual: boolean

    typeof("hello")
    // Prediction:string
    // Actual:string

    typeof(true)
    // Prediction:boolean
    // Actual:boolean

    typeof(1 != 2)
    // Prediction:boolean
    // Actual:boolean

    "hamburger" + "s"
    // Prediction:food
    // Actual:hamburgers

    "hamburgers" - "s"
    // Prediction:boolean
    // Actual:NaN

    "1" + "3"
    // Prediction: string
    // Actual:13

    "1" - "3"
    // Prediction:number
    // Actual:-2

    "johnny" + 5
    // Prediction:string
    // Actual:johnny5

    "johnny" - 5
    // Prediction:boolean
    // Actual:NaN

    99 * "hello"
    // Prediction:boolean
    // Actual:NaN

    1 != 1
    // Prediction:boolean
    // Actual:false

    1 == "1"
    // Prediction:boolean
    // Actual:true

    1 === "1"
    // Prediction:boolean
    // Actual:false

    



    // EXERCICE 6 //
    5 + "34"
    // Prediction:string
    // Actual:'534'

    5 - "4"
    // Prediction:Number
    // Actual:1

    10 % 5
    // Prediction:
    // Actual:0

    5 % 10
    // Prediction:
    // Actual:5

    "Java" + "Script"
    // Prediction:concat
    // Actual:JavaScript

    " " + " "
    // Prediction:string
    // Actual:'  '

    " " + 0
    // Prediction: concat
    // Actual:' 0'

    true + true
    // Prediction:boolean
    // Actual:2

    true + false
    // Prediction:boolean
    // Actual:1

    false + true
    // Prediction:boolean
    // Actual:1

    false - true
    // Prediction:
    // Actual:-1

    !true
    // Prediction:false
    // Actual:false

    3 - 4
    // Prediction:number
    // Actual:-1

    "Bob" - "bill"
    // Prediction:false
    // Actual:NaN

