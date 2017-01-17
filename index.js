angular.module('App', [])

    .controller('MainCtrl', function ($scope) {
        
        $scope.characters = [
            {"name": "Leia", "jedi": true},
            {"name": "Han Solo", "jedi": true },
            {"name": "Luke Skywalker", "jedi": true},
            {"name": "Darth Vader", "jedi": false},
            {"name": "R2D2", "jedi": true},
            {"name": "C3Po", "jedi": true},
        ];

    });