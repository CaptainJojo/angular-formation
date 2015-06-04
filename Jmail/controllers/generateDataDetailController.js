var app = angular.module('jmail');

app.controller('generateDataDetailController', function($scope) {
    $scope.clickMsg = "";

    $scope.$on('detail', function(event, message) {
        $scope.clickMsg = message;
    });
});
