var readline = require("readline-sync");

var phrase = readline.question ("type a phrase:");
var char = readline.question ("type a character:";
var foundChar = false;
var indexOfChar;
for (var i = 0; i < phrase.length; i++) {
    if (phrase[i]=== char) {
        foundChar = true;
        indexOfChar = i;
        break;
  

if (foundChar === true) {
    console.log(indexOfChar);
} else {
    console.log("Character not found");
    }
}  
    
}

//

var number = 0; Infinity; 
while (number !=="42"){
    number = readline.question ("this is an example of a while loop");
}
console.log(you got it right);


var num;
for (var i = 0; i < 10; i++) {
    num = readline.question ("enter a number: ");
    if (i === 0 || num < lowest) {
        lowest = num;
    }
}
console.log(lowest);