(function (angular) {

  angular.module('Config', ['ngRoute'])
  .constant('API', 'http://swapi.co/api/')
  .config(['$routeProvider', configRouter]);

  function configRouter($routeProvider) {
    $routeProvider
      .otherwise({ redirectTo: '/' });
  }

})(angular);
