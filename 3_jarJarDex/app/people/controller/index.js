(function (angular) {

  angular.module('People')
    .controller('People.IndexCtrl', ['$timeout', 'PeopleService', IndexCtrl]);

  function IndexCtrl($timeout, PeopleService) {
    this.jedis = PeopleService.jedis;

    PeopleService.list().then(function (people) {
      this.people = people;
      console.log(this.people);
    });

    this.teste = "asoksdokadoak";

    PeopleService.getApiUrl();

    this.jedi = {
      name: "yoda",
      gender: "male"
    };
    console.log("hellooooo, people controller");
  }
})(angular || {});
