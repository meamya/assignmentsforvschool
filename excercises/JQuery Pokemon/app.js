$.get("http://pokeapi.co/api/v1/pokedex/1/", function(data){
    for (var i = 0; i < data.pokemon.length; i++){
         var pokemon = data.pokemon[i].name;
        $(".container").append("<div class=''>" + pokemon + "</div>");
    }
})

    
 //the response is passed to the function

