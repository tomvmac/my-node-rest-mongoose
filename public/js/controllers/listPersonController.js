mainApp.controller("listPersonController", function ($scope, $http, $location) {

    // Methods

    // getPersons
    $scope.getPersons = function () {
        var url = "/api/person";

        $http.get(url).success(function (response) {
            $scope.persons = response;
        });
        return $scope.persons;
    };

    // deletePerson
    $scope.deletePerson = function (personObjectId) {

        var url = "/api/person/" + personObjectId;
        if (window.confirm("Are you sure you want to delete this person?")) {
            $http.delete(url).success(function (response) {
                // re-fetch Persons    
                $scope.getPersons();
            });
        }
    };



    // Redirect Routing Methods

    // redirectToEditPerson
    $scope.redirectToUpdatePerson = function (id) {
        $location.path('/updatePerson' + '/' + id);
    };


    // redirectToCreatePerson
    $scope.redirectToCreatePerson = function (id) {
        $location.path('/createPerson');
    };


    // Init
    $scope.getPersons();



});


