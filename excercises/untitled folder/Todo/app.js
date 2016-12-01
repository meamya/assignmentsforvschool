$scope.submit = function (){
    console.log($scope.selectedName);
    $scope.savedNames.push($scope.selectedName);
}

var todo={
    _id: "",
    todo:"",
    date: "",

}
http.post('http:api-vschool.io/meamya/todo)', todo).then(function(response))
    respons.data