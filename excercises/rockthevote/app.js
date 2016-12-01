//Write a function that takes input from users a plus and minus button on political issues. 

//List of political issues

angular.module("Rockthevote"[])
    .service("RocktheVoteService", function ($http) {
    this.allvotes = function (){
        $http.get("/votes")
        .then (function(response){
            return response.data;
        })
    }
    this.updatevote = function(updatedvote){
        return $http.put("/votes/" = updatedvote.id, updatedvote)
        .then(function(response) {
            return response.date;
        }
    }
})
    .controller("MainController", ["$scope", "RocktheVoteService", function ($scope, RocktheVoteService){
        $scope.test = "Hello World!";

        $scope.allvotes = function(){
        
        httpService.getallvotes()
            .then(function(votes){}
            $scope.votes = votes;
            })
        }
        $scope.updatevotes = function(updatevotes, index){
            httpService.updatevotes()
            .then(function(votes) {
                savedBounty = isBeingEdited = False;
                $scope.allvotes[index]= savedvotes;
            }
        }

    }]);


//Each item will have a title
//Each item will have a description
//Each item can be upvoted or downvoted

//Items will be ordered by upvotes (the most being at the top).

//Each item should show the total number of votes

//Web page will have a Post button that allows new posts

//Users can comment on posts (unlimited number of comments per post)
//On the back-end you will store all data in arrays or objects, no databases quite yet
//Use Bootstrap
//Use Angular for the front-end
//Use Node/Express for the back-end
//Clearly you will need the ability to GET, POST, PUT, and DELETE
//
//This is, more or less, a fully functional front-end and back-end application (minus the persistent database).