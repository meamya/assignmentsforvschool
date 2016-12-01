var app = angular.module("MyApp", []);

app.controller("MainController",["$scope", function($scope) {
    
    $scope.myWord= "Hello";
    $scope.name = "";                             
    $scope.submitName = function() {
        $scope.name = $scope.myWord; 
        $scope.myWord = "";
}
                                 
}])