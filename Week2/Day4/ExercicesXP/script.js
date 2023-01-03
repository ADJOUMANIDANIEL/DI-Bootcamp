// Exercice 1 : Informations
    // Instructions
        // Part I : function with no parameters
            // 1. Create a function called infoAboutMe() that takes no parameter.
            // 2. The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
            // 3. Call the function.
                function infoAboutMe () {
                let age = 35;
                let nom = "adjoumani kouadio krah daniel ";
                let loisirs ="lire, sport, internet "
                console.log("mon nom est "+nom+ " j'ai " +age+ " ans mes loisirs sont: " +loisirs+ "etc....");
              }
                infoAboutMe()
        // Part II : function with three parameters
            // 1. Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
                infoAboutPerson("David", 45, "blue")
                infoAboutPerson("Josh", 12, "yellow")    
                function infoAboutPerson(personName, personAge, personFavoriteColor){
                    console.log("Your name is " , personName)
                    console.log("Your are " , personAge, "year old")
                    console.log("Your favorite color is ", personFavoriteColor)
                }

// Exercise 2 : Tips
    // Instructions
            // 1. Create a function named calculateTip() that takes no parameter.
            // 2. Inside the function, use prompt to ask John for the amount of the bill.
            function calculateTip() {
                let montantFacture = Number(prompt("saisie le montant de la facture"));
                let pourboire1 =montantFacture*0.2;
                let pourboire2 = (montantFacture*15)/100;
                let pourboire3 = (montantFacture*10)/100;
                let factureFinal1 = montantFacture + pourboire1;
                let factureFinal2 = montantFacture + pourboire2; 
                let factureFinal3 = montantFacture + pourboire3; 
                if (montantFacture < 50) {
                  console.log("le pourboire de " + montantFacture + "$ est de : " + pourboire1+"$ la facture finale est " + factureFinal1 + "$");
                } else if (montantFacture >= 50 && montantFacture < 200) {
                  console.log("le pourboire de " + montantFacture + "$ est de : " + pourboire2+"$ la facture finale est " + factureFinal2 + "$");
                }else{
                  console.log("le pourboire de " + montantFacture + "$ est de : " + pourboire3+"$ la facture finale est " + factureFinal3 + "$");
                }
              }
              calculateTip();

// Exercise 3 : Find The Numbers Divisible By 23
            // 1.Create a function call isDivisible() that takes no parameter.
            function isDivisible() {
                let somme =0;
                let nobreDivisible ="les nombres divisibles par 23 sont "
            
              for (let parcours = 0; parcours < 500; parcours++) {
                //console.log("the current number is " + i)
                if (parcours% 23 == 0) {
                  somme += parcours;
                  nobreDivisible = nobreDivisible + " " + parcours + " ";
                }
            }
            console.log(` ${nobreDivisible} \n`); // all the numbers divisible by 23.
            console.log(`somme : ${somme}`); // the sum of all numbers that are divisible by 23
            }
            isDivisible();

//Exercise 4 : Shopping List
            const stock = { 
                "banana": 6, 
                "apple": 0,
                "pear": 12,
                "orange": 32,
                "blueberry":1
              }  
              const prices = {    
                "banana": 4, 
                "apple": 2, 
                "pear": 1,
                "orange": 1.5,
                "blueberry":10
              } 
              let shoppingList = {
                "banana": 1,
                "orange": 1,
                "apple": 1,
              }
              console.log(stock);
              function myBill(){
                  let prix = 0;
                  let resultat = ` `;
                  for(let item in shoppingList)
                  {
                    prix += stock[item] * shoppingList[item];
                  if(stock[item] > 0)
                  {
                      stock[item] -= shoppingList[item]
                      resultat += `${item} est disponible. ${item} coûte : ${prices[item]} ; \n `
                  }else
                  {
                    resultat += `${item} est indisponible; \n `
                  }
                }
                  return console.log(`${resultat} \n coût total : ${prix}`);
                }
                myBill();

// 5. Exercise 5 : What’s In My Wallet ?
                function changeEnough(prixArticle, monnaiePoche){
                    const listOfCoefficients = [0.25, 0.10, 0.05, 0.01];
                    let nouveauPrix = 0;
                // Verifier si amountOfChange est un array et a la meme taille que listOfCoefficients
                    if(Array.isArray(monnaiePoche) && listOfCoefficients.length != monnaiePoche.length)
                    {
                        return console.log(`Veuillez fournir tableau de ${listOfCoefficients.length} montant`);
                    }// Verifier si amountOfChange est un array et a la meme taille que listOfCoefficients
                    for (let elt = 0; elt<monnaiePoche.length; elt++ ) {
                        let price = Number(monnaiePoche[elt]);  // recuperer le prix;
                        if (isNaN(price)) {
                            price = 0;   //Verifier si l'element est un nombre sinon on l'attribue 0          
                        }
                        nouveauPrix = nouveauPrix + price * listOfCoefficients[elt];// Calcul du prix avec les coefficients
                }
                if (prixArticle <= nouveauPrix) {
                        return console.log(true);
                }else{
                    return console.log(false); 
                }
                }
                // Run function
                changeEnough(14.11, [2,100,0,0]);

// 6. Exercise 6 : Vacations Costs
                function hotelCost(){
                    const prixParNuit = 140;
                    let numberOfNights = undefined;
                    do {
                        numberOfNights = prompt("nombre de nuits que vous souhaitez séjourner à l'hôtel : ");
                    } while (isNaN(numberOfNights));
                    return console.log("le montant de votre séjour est : " + numberOfNights*prixParNuit+"$");
                }
                function planeRideCost(){
                
                    let destination = "";
                    let checker = true;
                    const londres = 183;
                    const paris = 220;
                    const autre = 300;
                    do {
                        destination =String(prompt("svp votre destination : "));
                        let removeSpace = destination.trim();
                        if(removeSpace.length > 0 && isNaN(removeSpace)){
                            checker = false;
                        }
                    } while (checker);
                
                        if(destination == "Londres") {
                            return console.log("le prix pour la destination de Londres est :" + londres +"$");/**le prix pour la destination Londres est 183$ */
                        } else if(destination == "Paris") {
                        return console.log("le prix pour la destination de Paris est " + paris +"$");/**le prix pour la destination Paris est 200$ */
                        } else {
                        return console.log("le prix pour la destination " + destination + " est " + autre +"$");/**le prix pour la destination Abidjan est 300$ */
                        }
                    }
                function rentalCarCost(){
                    const prixParNuit = 40;
                    let numberOfDays = undefined;
                    let resultat = 0;
                    do {
                        numberOfDays = prompt("le nombre de jours que vous souhaitez louer la voiture : ");
                    } while (isNaN(numberOfDays));
                
                    resultat = numberOfDays * prixParNuit;
                    if (numberOfDays > 10) {
                    resultat -= resultat * 0.05;
                    }
                
                    return console.log(`\n The car cost : ${resultat}$ \n`);
                    }
                function totalVacationCost(){
                    hotelCost();
                    planeRideCost();
                    rentalCarCost();
                }
                totalVacationCost()
              