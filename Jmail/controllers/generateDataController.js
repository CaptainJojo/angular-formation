var app = angular.module('jmail.generateDataController', []);

app.controller('generateDataController', function($scope) {

    $scope.col = 'id';
    $scope.reverse = true;
    $scope.orderby = function(col) {
        $scope.col = col;
        $scope.reverse = !$scope.reverse;
    };

    var generateData = function (nb) {
        var data = [];

        for (var i = 0; i < nb; i++) {
            var labels = [];
            for (var j = 0; j < (Math.random() * (3 - 1)) + 1; j++) {
                labels.push(chance.pick(['facebook', 'twitter', 'jonathan']));
            }

            data.push(
                {
                    'id': chance.integer(),
                    'subject': chance.string(),
                    'to': chance.email(),
                    'from': chance.email(),
                    'body': chance.sentence(),
                    'read': chance.bool(),
                    'count': chance.natural({min: 1, max: 20}),
                    'labels': labels
                }
            );
        }

        return data;
    };

    $scope.clickMsg = "";
    $scope.clickedMail = function (mail) {
        $scope.clickMsg = mail.body;
    };

    $scope.data = generateData(5);
});
