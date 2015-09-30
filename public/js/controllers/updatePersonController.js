
mainApp.controller('updatePersonController', ['$scope', '$routeParams', '$location', '$http',
  function ($scope, $routeParams, $location, $http) {

        /* callback for ng-click 'updateUser': */
        $scope.updatePerson = function () {
            
            $http({
                url: "/api/person/id/" + $scope.person._id,
                data: $scope.person,
                dataType: "json",
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                }
            }).success(function(response){
                $scope.response = response;
                console.log("response = " + response);
            }).error(function(error){
                $scope.error = error;
                console.log("error = " + error);
            });
            
//            $http.put(url, $scope.person).success(function (response) {
//                console.log("response = " + response);
//            });
            $location.path('/listPersons');
        };

        /* callback for ng-click 'cancel': */
        $scope.cancel = function () {
            $location.path('/listPersons');
        };

        // Init  
        var url = "/api/person/id/" + $routeParams.id;

        $http.get(url).success(function (response) {
            $scope.person = response;
        });
  }]);

