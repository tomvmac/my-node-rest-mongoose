var mainApp = angular.module("mainApp", []);

mainApp.controller("personController", function ($scope, $http) {

    // Methods

    // getPersons
    $scope.getPersons = function () {
        var url = "/api/person";
        var tempResponse;

        $http.get(url).success(function (response) {
            $scope.persons = response;
        });
        return $scope.persons;
    };

    // deletePerson
    $scope.deletePerson = function (personObjectId) {

        var url = "/api/person/" + personObjectId;
        alert(url);
        $http.delete(url).success(function (response) {
            // re-fetch Persons    
            $scope.getPersons();
        });

    };



    // Init
    $scope.getPersons();



});