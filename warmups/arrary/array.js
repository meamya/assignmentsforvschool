//Given an array of ints, return true if the array contains 1, 2, 3 somewhere (in that order).
//array123([1, 1, 2, 3, 1]); // true  
//array123([1, 1, 2, 4, 1]); // false  
//array123([1, 2, 2, 1, 5, 3]); // false  
function array123(arr) {
    for (var i = 0; i < arr.length - 2; i++) {
        console.log(i)
        if (arr[i] === 1 && arr[i + 1] === 2 && arr[i + 2] === 3) {
            return true;
        }
    }
    return false;
}
console.log(array123([1, 1, 2, 3, 1]));
console.log(array123([1, 1, 2, 4, 1]));
console.log(array123([1, 1, 2, 1, 2, 3]));