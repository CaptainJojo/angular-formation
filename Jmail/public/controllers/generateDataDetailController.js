var app = angular.module('jmail');

app.controller('generateDataDetailController', function($scope, $stateParams, generateDataService, $log) {
    $scope.clickMsg = "";
    $scope.email = "";
    if ($stateParams.id !== undefined) {
        generateDataService.getOneData($stateParams.id)
            .then(function (ret) {
                $scope.messages = ret.messages;
            })
            .catch(function () {
                $log.error('Error');
            });

        generateDataService.getEmail($stateParams.id)
            .then(function (ret) {
                console.log(ret);
                $scope.email = ret;
            })
            .catch(function () {
                $log.error('Error');
            });
    }
});
