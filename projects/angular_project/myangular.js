var app = angular.module("HospitalityApp", []);
app.controller("MainController", ["$scope", myService", function ($scope, deliveryService) {
    $scope.gethospitality = function (booktreats) {
        conciergeService.getRetreatInfo($scope.locationID).then(function (data) {
            $scope.getRetreats = data;
        });
    }
}]);



//service offered at location of the cowork space
app.service("deliveryService", ["$http", function ($http) {
    this.gethospitality = function (id) {
        return $http.get("https://sandbox-api.uber.com/" + id).then(function (response) {
            console.log(response.data)
            console.log(response.data.name)
            var giftproduct = {};
            product.name = response.data.name;
            product.date = response.data.date;
            product.description = response.data.description;
            product.location = response.data.location;
            pokemon.image = (product.name.toLowerCase() + ".gif")
            return quote
        })
    }
     }]);
