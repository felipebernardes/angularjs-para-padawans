(function (angular) {

  angular.module('People')
    .controller('People.IndexCtrl', ['$timeout', IndexCtrl]);

  function IndexCtrl($timeout) {
    console.log("hellooooo, people controller");
  }
})(angular || {});
