
    //Exercice 2 : Chihuahua
   
    //1
    _newDog = "Chihuahua";
   
    //2
    newDog.length // 9

    //3
    _newDog = "Chihuahua";
    console.log(_newDog.toLowerCase()); 
    console.log(_newDog.toUpperCase()); 
     
    //4
    /**
    Correcteur: Yannick GOUGUIA
    
    Vous n'avez pas declarrer les variables X et Y. Sur quelle base vous les comparez?
    */
        if (x > y){
            alert("X is the biggest number");
        }
        else {
            alert("Y is the biggest number");
        }


    // Exercice 4 : Discussion De Groupe
    const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
    /**
    Correcteur: Yannick GOUGUIA
    
    ligne 37: il faut toujours mettre les resultats dans une variable

    */
    users.length // 4;
   
   /**
    Correcteur: Yannick GOUGUIA
    je ne commprens pas la lign 43. vous comparez un tableau a un entier. ensuite vous faites users.length dans la condition 
    
    il faut revoir toute cette partie
    */
    if (users == 0) {
        users.length // 0;
        console.log('no one is online');
    } 
    else if (users == 1) {
        users.length // 1;
        console.log('<name_user> is online');
    } 
    else if (users == 2) {
        users.length // 2;
        console.log('<name_user> <name_user> is online');
    } 
    else if (users >= 2) {
        users.length // >=2;
        console.log('name_user1, name_user2 and 3 more are online');
    } 
    else {
        console.log('There are several users');
    }

    
