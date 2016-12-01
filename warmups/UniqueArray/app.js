//Write a function that takes 2 arrays for parameters and returns a new array with only the items that are unique to each new array.

myArray1=[happy, sad, worried, empowered, glitter,]
myArray2=[she, happy, not,]

my Array= myArray1.concat(myArray2)

var uniquArray = []

var newArray = myArray.filter(function(item,i) {
    if (myArray.indexOf(item) !==i){
        uniquArray.push(myArray[i]);
    }
});

console.log(uniquArray);

function findUniques(a, b) {
    var args = Array.from(arguments);
    var uniques = [];
    var index;
    args.forEach(function (array){
        array.forEach(function (item){
            index = uniques.indexOf(item);
            if (index === -1) {
                uniques.push(item);
            } else {
                uniques.splice(index, 1);
            }
        })
    })
    return uniques;
}

console.log(findUniques([1, 2, 5], [1, 2, 8, 9, 10]));