var add = require("./add");
var subtract = require("./subtract")
var multiply = require("./multiply")
var divide = require("./divide")

function calc(a, b, operation) {
    switch (operation) {
    case "+":
        add(a, b);
        break;
    case "_":
        subtract(a, b);
        break;
    case "x":
        multiply(a, b);
        break;
    case ""
    divide(a, b);
    }
}
module.export = add;