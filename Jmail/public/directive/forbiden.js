var app = angular.module('jmail');

app.directive('forbiden', function(md5) {
    return {
        restrict: 'A',
        scope: {
        },
        link: function (scope, elem, attrs, ngModelCtrl) {
          ngModelCtrl.$validators.forbiden = function(modelValue, viewValue) {
                if (viewValue == attrs.forbiden) {
                    return false;
                }
                
                return true;
            }
        },
        require: 'ngModel'
    }
});
