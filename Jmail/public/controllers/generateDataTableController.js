var app = angular.module('jmail');

app.controller('generateDataTableController', function($rootScope, $scope, generateDataService, $state, $log, gapiService) {
    $scope.sorter = {
        col: 'id',
        reverse: true,
        orderby: function(col) {
            this.col = col;
            this.reverse = !this.reverse;
        },
    };

    $scope.clickedMail = function (mail) {
        $state.go('mails.list.detail', {id:  mail.id});
    };
    //$scope.checkboxState = 'nocheck';
    $scope.size = '200';

    generateDataService.getData()
        .then(function (res) {
            $scope.data = res;
        }).catch(function (err) {
            $log.error(err);
        });
});
