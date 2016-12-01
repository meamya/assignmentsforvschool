function parsePokemon(){
    //creat an XHR object
    var xhr = new XMLHttpRequest();
}
    //use xhr to open a request to the API
    xhr.open(GET,"http:api.vschool.io:6543/pokemon.json", true):
    
    //send xhr request
    xhr.send();

    //Check the readystate and status (4-200)
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status ===200){
            //Parse JSON (xhr.responseText) into a js object
            var data = JSON.parse(xhr.responseText);
            var pokemon = data.objects [0].pokemon;
            
            //Loop through the array of data
            pokemon.forEach(function(monster,) {
                console.log(monster.name);
        
            });
                namesUL.innerHTML += "<li>" + data.results [i].name + "/li>";
        }
    }
}
    var type = 
   
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();