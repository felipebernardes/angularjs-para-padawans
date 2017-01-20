(function (angular) {

  angular.module('People')
    .controller('People.IndexCtrl', ['$timeout', 'PeopleService', IndexCtrl]);

  function IndexCtrl($timeout, PeopleService) {
    this.jedis = PeopleService.jedis;

    console.log(this.jedis);

    this.jedi = {
      name: "yoda",
      gender: "male"
    };
    console.log("hellooooo, people controller");
  }
})(angular || {});
