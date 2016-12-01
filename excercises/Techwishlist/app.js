var app = angular.module("MyApp");
app.controller("MainController", ["$scope", function ($scope) {
    $scope.mytechwishlist = [
        {
            Item: "SURFACE STUDIO"
            , Why: "This is what i need for design related/creative works and so that I can develop in both environments.
            , link: http: //.com"
        }
        , {
            Item: "MACBOOK PRO"
            , Description: ""
            , Why: "This is what I need for all of my coding tasks and jobs"
            Price Range: 
            , Link: ""
        , }
        {
            Item: "Amazon Echo"
            , Why: "This is so I can be jamming it out while working"
            Price Range: Link: ""
        }
        {
            Item: "HOME ESSENTIAL OIL DIFFUSER"
            Description: "This is to keep the mood right at all times."
            Link: ""
        }
    ]
}]);