mainApp.controller('createPersonController', ['$scope', '$routeParams', '$location', '$http',
  function ($scope, $routeParams, $location, $http) {

        /* callback for ng-click 'updateUser': */
        $scope.createPerson = function () {
            var url = "/api/person";
            $http.post(url, $scope.person).success(function (response) {
                console.log("response = " + response);
            });
            $location.path('/listPersons');
        };

        /* callback for ng-click 'cancel': */
        $scope.cancel = function () {
            $location.path('/listPersons');
        };

}]);