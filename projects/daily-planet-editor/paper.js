var enemies = ["Lex","Batman","Darkseid","Braniac","General Zod","Doomsday"];

function whoWins(isThereKryptonite, enemyName) {
    if (!isThereKryptonite) { 
        return "Superman beats" + enemyName + ", of course";
    } else {
        return "depends on how quick Superman can get rid of the Kryptonite." + enemyName + "could possibly win this one.";
    }
};

for (var i = 0;i < enemies.length; i++) {
    var isThereKryptonite = (i % 2 === 0);
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

function HowAttractedIsLoisLaneToMe() { 
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Mat.random()*10)+1);
}

var clarkKent = true;
var superman = false;

while (clarkKent) {
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) { 
        clarkKent = false;
    } else {
        superman = true;
        console.log("Now I'm Superman!");                     
    }
}