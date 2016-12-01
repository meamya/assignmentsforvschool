var app = angular.module("main", []);

app.controller("myCtrl",("$scope","$http", function($scope, $http) {  
    $http.get("") 
    .then(function(response) {
        $scope.uglyThings = response.ugly.image;
    })
}))

$scope.ugly.image = {
  300x150: 'https://www.google.com/search?q=snaggletooth+dog&espv=2&biw=1280&bih=604&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjao5j_j-rPAhXIqlQKHUu3CmMQ_AUIBigB#tbm=isch&q=ugly+animals&imgrc=Rjm4f48gH7xv2M%3A',
  600x300: 'https://www.google.com/search?q=snaggletooth+dog&espv=2&biw=1280&bih=604&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjao5j_j-rPAhXIqlQKHUu3CmMQ_AUIBigB#tbm=isch&q=ugly+animals&imgrc=ap3m7ycroh0IRM%3A',
  900x900: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/9/12/1378996017911/A-mudmask-might-help-A-wa-003.jpg?w=720&q=55&auto=format&usm=12&fit=max&s=d8c871611fcfab0d897be30d224c073e'
}

}])