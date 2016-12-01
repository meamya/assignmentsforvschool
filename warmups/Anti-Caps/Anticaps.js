function isCaps(Name) {
    return letter === letter.toUpperCase();
}

function isCaps(Name) {
    return letter === letter.toUpperCase();
}
 
function antiCaps (str){
 for (var i= 0; i< str.length; i++){
     if (isCaps(str[i])){
         newString = newString + str[i].toLowerCase();
     } else {
         newString = newString + sti[i].toUpperCase();
     }
 }   
    return newstring
}
console.log(antiCaps('Hello'))
console.log(antiCaps('raEcare'))
console.log(antiCaps('bAnAnA'))