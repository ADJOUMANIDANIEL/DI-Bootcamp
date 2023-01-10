// 1)
let sentence = "I am not a bad boy";

let wordNot = sentence.indexOf("not");

let wordBad = sentence.indexOf("bad");

if (wordBad > wordNot) {
    console.log(sentence.replace('not a bad', 'good'));    
}
else{
    console.log(sentence);
}
