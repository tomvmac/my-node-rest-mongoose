mainApp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/listPersons.html',
            controller: 'listPersonController'
        }).
        when('/listPersons', {
            templateUrl: 'views/listPersons.html',
            controller: 'listPersonController'
        }).
        when('/createPerson', {
            templateUrl: 'views/createPerson.html',
            controller: 'createPersonController'
        }).
        when('/updatePerson/:id', {
            templateUrl: 'views/updatePerson.html',
            controller: 'updatePersonController'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);