//Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.
function sum67(arr) {
    if (arr.length === 0) {
        return 0;
        var six = array.indexOf(6)
        var seven = array.indexOf(7)
        if (six>= 0) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === 6) {
                return sum;
                else if ([i] === 7) {
                    i++;
                }
                else {
                    sum67 += arr[i];
                }
            }
            return sum;
        }
        sum67([1, 2, 2]) 5
        sum67([1, 2, 2, 6, 99, 99, 7]) 5
        sum67([1, 1, 6, 7, 2]) 4