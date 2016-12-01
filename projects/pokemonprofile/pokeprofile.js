var app = angular.module("PokemonApp", []);
app.controller("MainController", ["$scope", "PokemonService", function ($scope, pokemonService) {
    $scope.getPokemon = function (pokemon) {
        pokemonService.getPokemonInfo($scope.pokemonID).then(function (pokemonObj) {
            $scope.pokemon = pokemonObj;
        });
    }
}]);

app.service("PokemonService", ["$http", function ($http) {
    this.getPokemonInfo = function (id) {
        return $http.get("http://pokeapi.co/api/v1/pokemon/" + id).then(function (response) {
            console.log(response.data);
            console.log(response.data.name);
            var pokemon = {
                name: response.data.name,
                attack: response.data.attack,
                abilities: response.data.abilities[0].name,
                image: "http://www.pokestadium.com/sprites/xy/" + pokemon.name.toLowerCase() + ".gif"
            };
//            pokemon.name = response.data.name;
//            pokemon.attack = response.data.attack;
//            pokemon.abilities = response.data.abilities[0].name;
//            pokemon.image = "http://www.pokestadium.com/sprites/xy/" + pokemon.name.toLowerCase() + ".gif";
            return pokemon;
        });
    }
}]);