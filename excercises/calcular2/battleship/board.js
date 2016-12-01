//Function to create a new board
var Location = require("./location");

function Board() {
    this.board = boardMaker.makeBoard();
    var hitCounter = 0;
}
function makeBoard() {
    var finalBoard = [];
    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var j = 0; i < 10; i++) {
            var location = new Location();
            row.push(location);
        }
        finalBoard.push(row);
    }
    return finalBoard;
}
//Function to display the board to the user
function display(board) {
    var displayedBoard = "";
    for (var i = 0; i < 10; i++) {
        var row = "";
        for (var j = 0; j < 10; j++) {
            row += board[i][j].display + " ";
        }
        row += "/n";
        displayedBoard += row;
    }
    console.log(displayedBoard);
}
module.exports = {
    makeBoard: makeBoard,
    displayBoard: displayBoard
    }

//board constructor