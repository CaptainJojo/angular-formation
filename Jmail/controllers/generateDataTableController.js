var app = angular.module('jmail');

app.controller('generateDataTableController', function($rootScope, $scope, generateDataService) {
    $scope.col = 'id';
    $scope.reverse = true;
    $scope.orderby = function(col) {
        $scope.col = col;
        $scope.reverse = !$scope.reverse;
    };

    $scope.clickedMail = function (mail) {
        $rootScope.$broadcast('detail', mail.body);
    };

    $scope.data = generateDataService.getData();
});
