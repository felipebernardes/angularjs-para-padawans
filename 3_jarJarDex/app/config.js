(function (angular) {

  angular.module('Config', ['ngRoute'])
  .constant('API', '')
  .config(['$routeProvider', configRouter]);

  function configRouter($routeProvider) {
    $routeProvider
      .otherwise({ redirectTo: '/' });
  }

})(angular);
