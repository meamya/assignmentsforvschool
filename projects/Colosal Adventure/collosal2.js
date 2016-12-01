//1. all functions of the game

function chooseFriendFaux() {
    var chooseFriendFaux = [
    {
        ffname: 'pessimystica'
        , type: 'faux'
        }
        , {
        ffname: 'energydrainu'
        , type: 'faux'
        }
        , {
        ffname: 'compassionista'
        , type: 'friend'
        }
        , {
        ffname: 'shrewdia'
        , type: 'friend'
        }
        , {
        ffname: 'mr.wisdom'
        , type: 'friend'
        }
        , {
        ffname: 'ms.mischief'
        , type: 'faux'
        }
        , {
        ffname: 'deception'
        , type: 'faux'
        }
        , {
        ffname: 'harmony'
        , type: 'friend'
        }
        , {
        ffname: 'truth'
        , type: 'friend'
        }
        , {
        ffname: 'optimistica'
        , type: 'friend'
        }
];
    return chooseFriendFaux[getRandomInt(0,9)]
}
//2.
function attackPower() {
    
}

function runIntoSomeone(){
    var random = getRandomInt(0,2)
    if (random === 0){
        return true;
    } else {
        return false;
    }
}
//3.
function walk() {
    var user = {};
    user.hp = 10;
    var readline = require('readline-sync');
    console.log("Hello and Welcome to a Lovely Game of Friend or Faux, Enjoy!")
    user.name = readline.question("Let's Get Started, May I Have Your Name? ");
    var walking = readline.question("Hello " + user.name + " You have entered the journey with 10 Help Points, Enter a w to begin.")
   
    var walk;
    while ((user.hp < 20) && (user.hp > 0)) {
        walk = false;
        while (!walk) {
            walking = readline.question("Enter a w to walk.")
            if (walking === "w") {
                console.log("Keep Walking...")
                walk = true;
            }
        }
        if (runIntoSomeone()){
            var someone = chooseFriendFaux();
            if (someone.type === "friend"){
                console.log(" A friend named " + someone.ffname + " has given you a gift of 3 points for your journey");
                user.hp += 3;
                console.log(user.hp)
            }else{ 
                console.log(" Oh no, " + someone.ffname + " a faux, has stolen 5 health points! ");
                user.hp -= 5;
                console.log("do you want to fight back?, walk to fight")
            }  
            console.log("Health Points: " + user.hp)
            
        }
    }//end while
 gameOver(user);
}
//4.
function HP() {}
//5.
function gameOver(user) {    
    if (user.hp > 19) {
        console.log("You Are A Winner!")
    } else if (user.hp < 1) {
        console.log("You May Want Life Coach")
    }}

function startgame() {}

//start game
walk()
