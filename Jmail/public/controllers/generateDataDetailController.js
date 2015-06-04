var app = angular.module('jmail');

app.controller('generateDataDetailController', function($scope, $stateParams, generateDataService, $log) {
    $scope.clickMsg = "";

    if ($stateParams.id !== undefined) {
        generateDataService.getOneData($stateParams.id)
            .then(function (ret) {
                $scope.messages = ret.messages;
            })
            .catch(function () {
                $log.error('Error');
            });
    }
});
