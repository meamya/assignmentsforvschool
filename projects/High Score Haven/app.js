$("#submit").on("click", function () {
    var d = new Date()
    var localeDate = d.toLocaleDateString()
    var user = {
        name: $("#nameid").val(),
        score: $("#scoreid").val(),
        date: localeDate,
        trash: $("#trash").val()
    }
    $('<tr/>', {
        "class": "my-class",
        "html": "<td>" + user.name + "</td>" + "<td>" + user.score + "</td>" + "<td>" + user.date + "</td>" + "<td>" + user.trash + "</td>"
    }).appendTo($("#myTable"));
    $("#nameid").val("")
    $("#scoreid").val("")
    $("#trash").val("")
})


var randomTrash = ["I'm the best!", "Holy Crap You Suck!", "Did You Even Try?"];

var trash = '';

var $fullName = $('#fullName');
var $nameOfGame = $('#nameOfGame');
var $date = $('#dateOfRecord');
var $score = $('#score');


$('#display').click(function () {
    if ($('#checked')) {
        var randomDec = Math.random();
        var parseRandom = Math.floor(randomDec * 3);
        trash = randomTrash[parseRandom];

        var newName = $fullName.val();
        var newGame = $nameOfGame.val();
        var newDate = $date.val();
        var newScore = $score.val();
        var newChecked = trash;
    }
    $('#trashtalkname').append("<p>" + newName + "</p>");
    $('#highestscore').append("<p>" + newScore + "</p>");
    $('#trashtalks').append("<p>" + newChecked + "</p>");
});