(function (angular) {

  angular.module('People', [])

  .config(['$routeProvider', configRouter]);

  function configRouter($routeProvider) {
    $routeProvider
      .when('/people', {
        controller: 'People.IndexCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'people/view/index.html'
      });
  }

})(angular);
