//Create a function that takes two or more arrays and returns an array of the items that are unique.

//Given two sets (for example set A = [1, 2, 3, 7, 9, “Belly”, 20] and set B = [2, 3, 4, 8, 10, “jelly”]), find the set of elements which are in one of the two sets, but not in both.

//The function should return an array of all the unique items.

var arr1 = [1, 2, 3, 7, 8, 7, 9,"Belly", 20];
var arr2 = [2, 3, 4, 8, 10, "jelly"];    

function findUnique(arrA, arrB) {

//join the two strings
    var input = arrA.concat(arrB);

//one are for the first loop and one array for after the loop
    var uniqueArray = [];
    var repeatArray = [];

//the for loop of the concated string
for (var i = 0; i < input.length; i++) {
//if the new array has no duplicates, return items. If 
        if(uniqueArray.indexOf(input[i]) === -1 || repeatArray.indexOf(input[i]) > -1) {
            uniqueArray.push(input[i]);
           } else {
           repeatArray.push(input[i]);
           uniqueArray.splice(uniqueArray.indexOf(input[i]),1);
           }
}
                                                 
    return uniqueArray;
}
console.log(findUnique(arr1, arr2));














//If you complete this, do the extra credit. 
//Extra Credit: Make it so that the function can accept any number of arrays, or an array of arrays, not just two.