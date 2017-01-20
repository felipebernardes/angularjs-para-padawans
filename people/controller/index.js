(function (angular) {

  angular.module('People')
    .controller('People.IndexCtrl', ['$timeout', 'PeopleService', IndexCtrl]);

  function IndexCtrl($timeout, PeopleService) {
    this.jedis = PeopleService.jedis;

    //PeopleService.list().then(function dsdsd(people) {
    //  this.people = people;
    //  console.log(this.people);
    //});

    this.people = PeopleService.list();

    this.jedi = {
      name: "yoda",
      gender: "male"
    };
    console.log("hellooooo, people controller");
  }
})(angular || {});
