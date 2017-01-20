(function (angular) {

  angular.module('People')

  .factory('PeopleService', ['API', '$http', PeopleService]);

  function PeopleService(API, $http) {

    var getApiUrl = function () {
      console.log('O ENDEREÇO DA API É: ', API);
    };

    var list = function () {
      return $http.get(API+'people').then(function(response) {
                var pessoas = response.data.results;
                var starships = [];

                pessoas = pessoas.forEach(function(pessoa) {
                  pessoa.starships.forEach(function(starshipUrl) {
                    $http.get(starshipUrl).then(function(response) {
                      starships.push(response.data);
                      return pessoa;
                    });
                  });
                });

                return response.data;
             });
    };

    var jedis = [
      { name: 'luke' },
      { name: 'obi' },
      { name: 'yoda' },
      { name: 'anakin' }
    ];

    return {
      jedis: jedis,
      getApiUrl: getApiUrl,
      list: list
    };
  }
})(angular);
