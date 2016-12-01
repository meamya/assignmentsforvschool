angular.module("BountyApp"[])
    .service("httpService", function ($http) {
    this.getAllBounties = function (){
        $http.get("/bounties")
        .then (function(response){
            return response.data;
        })
    }
    this.updateBounty = function(updatedBounty){
        return $http.put("/bounties/" = updatedBounty.id, updatedBounty)
        .then(function (response) {
            return response.date;
        }
    }
})
    .controller("MainController", ["$scope", "httpService", function ($scope, httpService){
        $scope.getAllBounties = "Hello World!";

        $scope.getAllBounties = function(){
        
        httpService.getAllBounties()
            .then(function(bounties){}
            $scope.bounties = bounties;
            })
        }
        $scope.updateBounty = function(updatedBounty, index){
            httpService.updateBounty()
            .then(function(bounties) {
                savedBounty = isBeingEdited = False;
                $scope.bounties[index]= savedbounty;
            }
        }

    }]);