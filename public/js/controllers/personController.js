mainApp.controller("personController", function ($scope, $http, $location) {

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

    // createPerson
    $scope.createPerson = function () {
        $location.path('/user-creation');
    };



    // Init
    $scope.getPersons();



});