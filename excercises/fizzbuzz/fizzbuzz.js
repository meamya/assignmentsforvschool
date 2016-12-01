// on multiples of three, console.log ("fizz")
// on multiples of five, console. log ("buzz")
//if both, console.log("fizz buzz")
//1 thru 100,
for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizzbuzz");
    }
    else if (i % 5 == 0) {
        console.log("buzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz!")
    }
    else {
        console.log(i)
    }
}