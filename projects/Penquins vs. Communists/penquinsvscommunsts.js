//Create 2 parties (penquins and communists) using a Javascript constructor function
//start with 1,000,000. population
//use the new keyword to instantiate the parties)
function Party(party, population) {
    this.party = party;
    this.population = 1000000;
}
var communist = new Party("Communist", "population");
var penquines = new Party("Penquines", "population");
//Flip a coin (random number between 1 and 2) to see which party attacks first
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Create a function called sendNuke(party, onHit, onMiss) where: the first parameter party is the Javascript object of the party that will be attacked the second parameter onHit is a callback function that will be called if the attack is successful
function flipCoin() {
    var random = getRandomInt(0, 1)
    if (random === 0) {
        return communist;
    }
    else {
        return penquines;
    }
}

function onMiss(party) {
    if (party === "Communist") {
        console.log("communist missed")
    }
    else if (party === "Penquines") {
        console.log("penquines missed")
    }
}

function onHit(party) {
    if (party === "Communist") {
        console.log("communist have been hit")
    }
    else if (party === "Penquines") {
        console.log("Penquines have been hit")
    }
}

function controller() {
    if (flipCoin() === communist) {
        sendNuke(communist);
    }
    else if (flipCoin() === penquines) {
        sendNuke(penquines)
    }
}
while ((communist.population > 0) && (penquines.population > 0)) {
    controller()
}

function sendNuke(party) {
    var randomattack = getRandomInt(0, 1)
    console.log(randomattack);
    if (randomattack === 0) {
        console.log(party);
        console.log(party.population -= 900000);
    }
    else if (randomattack === 1) {
        console.log(party.party, party.population -= 0);
        console.log("you missed");
    }
}
//var sendNuke =
// while ((Party < 1000000) || (Party > 0)) {
//   sendNuke = true;
//  }
//the third parameter onMiss is a callback function that will be called if the attack is unsuccessful the onHit and onMiss functions each take one parameter of type party (just forwarding the party you already passed into sendNuke)
//Print messages in the callbacks that are appropriate - e.g. if the attack missed then it would log "The Penguins' nuke missed the Communists and instead landed in the ocean" or something along those lines
//A random algorithm will be used to determine if the attack is a miss or a hit (this can happen in the sendNuke function
//If an attack is successful initiate a random damage amount
//After an attack is completed (or missed) the opposing party will initiate an attack.
//This process will repeat until one of the parties reaches a 0 population//the third parameter onMiss is a callback function that will be called if the attack is unsuccessful
//the onHit and onMiss functions each take one parameter of type party (just forwarding the party you already passed into sendNuke)
//var readline = require('readline-sync');
//var greeting = readline.question("Welcome to Penquins vs. Communists, Press Enter to start the game by flipping a coin")