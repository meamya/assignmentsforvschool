//create an array of arrays 1 with 10 in it containing a location
//isShip: does location have a ship?
//hit: if guessed, was it a ship?
//If so, set to true
//if not set to false
//default: null
//how should this location look on user facing board
function determineifShip() {
    var random = Math.floor(Math.random() * 5);
    console.log(random === 4);
    return random === 4;
}

function location() {
    this.isShip = determineifShip();
    this.hit = null;
    this.display = "~";
}
module.exports = Location;

function (vari = 0; i 100; i++) {
    var numShips = 0;
    if (determineifShip()) {
        numShips++;
    }
    var location = [
[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
, [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
, [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
, [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
, [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
, [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
, [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
, [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
, [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
, [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],


, [3, 6, 7, 7, 4, 2]
, [9, 4, 6, 2, 3, 1]
, [2, 4, 2, 9, 3, 9]
, [3, 4, 9, 2, 0, 4]
, [3, 3, 8, 7, 4, 2]
, [9, 7, 2, 2, 7, 2]
, [2, 2, 3, 8, 3, 1]
, [3, 2, 8, 1, 1, 3]
, [3, 2, 7, 5, 2, 2]
, ]
    console.log(grid)