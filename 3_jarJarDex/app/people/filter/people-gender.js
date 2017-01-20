(function (angular) {

  angular.module('People')

    .filter('peopleGender', [PeopleGenderFilter]);

  function PeopleGenderFilter() {

    var genders = {
      'male': 'Homi',
      'female': 'Muié'
    };

    function filter(gender) {
      return genders[gender] || gender;
    }

    return filter;
  }

})(angular);
