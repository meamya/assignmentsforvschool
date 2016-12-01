//Write a function that takes a string input (which contains either spaces, underscores, or hyphens/dashes between words, but no combination of the two) and turn it into the camelCase version of that string.

function camelCase(str) {
    var letterArray = str.split('');
    var newarr = [];
    for (var i = 0; i < letterArray.length; i++) {
        if (letterArray[i] === ' ' || letterArray[i] === '_' || letterArray[i] === '-') {
            var cap = letterArray[i + 1].toUpperCase();
            newarr.push(cap);
            letterArray.splice(i, 1);
        } else {
            newarr.push(letterArray[i]);
        }
    }
    return newarr.join("");
}

console.log(camelCase("hello hi"));
console.log(camelCase("hello-hi"));