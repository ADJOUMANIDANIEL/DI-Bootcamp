 //fonction qui évalue le chiffre et renvoie la sortie
 function equal() 
 { 
     let a = document.getElementById("output").value 
     let b = eval(a) //  eval() fonction qui permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.
     document.getElementById("output").value = b 
 } 
 //fonction qui affiche la valeur
 function number(val) 
 { 
     document.getElementById("output").value+=val 
 } 
  //fonction qui affiche les operateurs
 function operator(val) 
 { 
     document.getElementById("output").value+=val
 } 
