
    // Exercice 1 : //

    const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
    fruits.shift() 
    console.log(fruits) //["Apples", "Oranges", "Blueberries"];

    
    fruits.sort();

    
    fruits.push("Kiwi"); // ajoute de "Kiwi" à la fin du tableau;
    console.log(fruits) // ["Banana", "Apples", "Oranges", "Blueberries", "Kiwi"];

    
    fruits.shift()
    console.log(fruits) // ["Oranges", "Blueberries", "Kiwi"];

    
    fruits.sort();
    fruits.reverse();


    // EXERCICE 2 //

    /*const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
    const found = moreFruits.find(element ={"Orange"} element {"Orange"} "Orange");
    console.log(found);*/