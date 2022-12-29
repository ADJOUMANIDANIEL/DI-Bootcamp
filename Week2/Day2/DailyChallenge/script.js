
    //1
    $sentence = "The ATOS Bootcamp is not that bad, I like it";

    //2
    $wordNot = sentence.substring(21, 24);

    //3
    $wordBad = sentence.substring(30, 33);

    //4
    $sentence = "The ATOS Bootcamp is not that bad, I like it";
    //$wordBad = sentence.slice(25, 29); // enlever sous chaine "that"
    $wordNot = sentence.replace("not that bad", "good");
    console.log($wordNot);

    //5
    $sentence = "The ATOS Bootcamp is not that bad, I like it";
    $wordBad = sentence.slice(21, 33); // enlever sous chaine "not that bad"
    console.log($wordBad);
