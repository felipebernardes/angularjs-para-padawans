(function (angular) {

  angular.module('People')

  .factory('PeopleService', ['API', PeopleService]);

  function PeopleService(API) {

    var hello = function(name) {
      name = name || "jarjar";

      return "hello " + name;
    };

    return {
      hello: hello
    };
  }
})(angular);
