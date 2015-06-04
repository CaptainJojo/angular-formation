var app = angular.module('jmail');

app.controller('generateDataTableController', function($rootScope, $scope, generateDataService, $state, $log, gapiService) {
    $scope.col = 'id';
    $scope.reverse = true;
    $scope.orderby = function(col) {
        $scope.col = col;
        $scope.reverse = !$scope.reverse;
    };

    $scope.clickedMail = function (mail) {
        $state.go('mails.list.detail', {id:  mail.id});
    };

    generateDataService.getData()
        .then(function (res) {
            $scope.data = res;
        }).catch(function (err) {
            $log.error(err);
        });
});
