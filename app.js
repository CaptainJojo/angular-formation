var app = angular.module('mofafegoli', []);

app.controller('mofafegoliController', function($scope) {
    $scope.convert = mofafegoli.convert;
    $scope.consonants = mofafegoli.consonants;
    $scope.vowels = mofafegoli.vowels;
    $scope.convertName = '';

    $scope.allumetoi = function(str) {
        return $scope.convertName.indexOf(str) > -1;
    };
});
