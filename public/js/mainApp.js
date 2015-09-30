var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/listPersons', {
            templateUrl: 'views/listPersons.html',
            controller: 'personController'
        }).
        when('/createPerson', {
            templateUrl: 'views/createPerson.html',
            controller: 'PersonController'
        }).
        when('/updatePerson', {
            templateUrl: 'views/updatePerson.html',
            controller: 'PersonController'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);