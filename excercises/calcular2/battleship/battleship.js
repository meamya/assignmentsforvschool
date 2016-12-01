//location constructor with ship boolean yes or no, hit boolean true or false,
//isShip is randomly chosen 1 in every 5locations, if true
function playRound(){
    boardMaker.displayBoard(board);
    
    
var boardMaker = require("./board");

//Create the board //now accessible to any functions
var board = boardMaker.displayBoard(board); 

var x = readline.question("choose an x coordinate (0-9):" );
var y = readline.question("Enter a y coordinate (0-9):");

    var location = board[x][y];
    location.hit = true;
} else {
    console.log("Miss:(");
    location.hit = false;
}
}
playRound();
//run a sing round of a guess from the user
    //Display board to the user
    //Take user input for coordinates
    //check coords for validty (0-9 only);
        //If invalid - start them over (continue)

//check thos coord for a previous guess (hit ===true ||)
//f


//keep track of hits
//while loop