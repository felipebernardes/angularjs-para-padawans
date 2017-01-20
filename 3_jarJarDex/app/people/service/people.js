(function (angular) {

  angular.module('People')

  .factory('PeopleService', ['API', PeopleService]);

  function PeopleService(API) {

    var jedis = [
      { name: 'luke' },
      { name: 'obi' },
      { name: 'yoda' },
      { name: 'anakin' }
    ];

    return {
      jedis: jedis
    };
  }
})(angular);
