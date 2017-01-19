(function (angular) {

  angular.module('People')

    .filter('peopleGender', [PeopleGenderFilter]);

  function PeopleGenderFilter() {

    var types = {
      'M': 'Male',
      'F': 'Female'
    };

    function filter(type) {
      return types[type] || type;
    }

    return filter;
  }

})(angular);
