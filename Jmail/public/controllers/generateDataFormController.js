var app = angular.module('jmail');

app.controller('generateDataFormController', function($scope, generateDataService) {
    $scope.toto = "totot";
    $scope.master = {
        'subject': "",
        'to': "",
        'holdersubject': "J'aime les patates",
        'holderto': "patate@gmail.com",
        'body': ""
    };

    $scope.jmail = {
        'subject': "",
        'to': "",
        'holdersubject': "J'aime les patates",
        'holderto': "patate@gmail.com",
        'body': ""
    };

/*    $scope.reset = function() {
        $scope.jmail = angular.copy($scope.master);
    };
*/
    $scope.saveMail = function(form, jmail) {

        if (form.$valid) {

            generateDataService.saveData(jmail).then(function(res) {
                generateDataService.getData()
                    .then(function (res) {
                        $scope.data = res;
                    }).catch(function (err) {
                        $log.error(err);
                    });
            });
    //        $scope.master = angular.copy(jmail);
    //        $scope.reset();
        }


        console.log('pristine :' + form.$pristine);
        console.log('dirty :' + form.$dirty);
        console.log('valid :' + form.$valid);
        console.log('invalid :' + form.$invalid);
    };
});
