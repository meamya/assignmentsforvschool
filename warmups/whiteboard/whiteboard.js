//Write a function that takes one array and returns an object with values of arrays. Each value array will be of only it's one type. Example of returned object:
function arrayToObj(array, fn) {
    var obj = {};
    var len = array.length;
    for (var i = 0; i < len; i++) {
        var curVal = array[i];
        var key = fn(curVal, i, array);
        obj[key] = curVal;
    }
    return obj;
} {
    numbers: [1, 4, 3, 23]
    , strings: ["candy", "corn", "is", "the, "
        best "],
    arrays: [[1], ["dogs", 2]]
    , objects: [{
            keys: "values"
            , numbers: 7
        }]
    }
    function changeToObj = (arr) {
        var oriArr = arr.length
        var obj = {};
        for (var i = 0; i < arr.length; i++) {
            sort
        }
        return Object
    }
    console.log([1, 4, 3, 23, "candy", "corn", "is", "the, "
            best ", [1],["
            dogs ", 2], { keys: "
            values ", numbers: 7}])