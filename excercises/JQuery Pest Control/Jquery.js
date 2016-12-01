$(document).ready(function(cadd) {
    $('div').mousenter(function() {
        $(this).animate({
    }
}

function cadd() {
    var cnumber = parseInt(document.getElementById("cbox").value);
    console.log (cnumber * 11);
    document.getElementById("addanswerc").innerHTML=cnumber*11;
    addcoins();
}

function badd() {
    var bnumber = parseInt(document.getElementById("bbox").value);
    console.log (bnumber * 5);
    document.getElementById("addanswerb").innerHTML=bnumber*5;
    addcoins();
}

function aadd() {
    var anumber = parseInt(document.getElementById("abox").value);
    console.log (anumber * 8);
    document.getElementById("addanswera").innerHTML=anumber*8;
    addcoins();
}

function addcoins() {
        var cNum = parseInt(document.getElementById("addanswerc").innerHTML);
        var bNum = parseInt(document.getElementById("addanswera").innerHTML);
        var aNum = parseInt(document.getElementById("addanswerb").innerHTML); 
        document.getElementById("addanswer").innerHTML = cNum + bNum + aNum;
}




