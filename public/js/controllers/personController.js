var mainApp = angular.module("mainApp", []);

mainApp.controller("personController", function($scope, $http) {
    
    // Init
    var url = "/api/person";

    $http.get(url).success(function (response) {
        $scope.persons = response;
    });
    
    // Methods
    $scope.sayHello = function (myName) {
        alert('Hello ' + myName);
    }
    
    
});