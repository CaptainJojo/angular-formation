var app = angular.module('jmail');

app.directive('gravatar', function(md5) {
    return {
        restrict: 'E',
        templateUrl: 'gravatar.html',
        scope: {
            size: '@',
            email: '@'
        },
        link: function (scope, elem, attrs) {
            attrs.$observe('size', function(value) {
                scope.url = 'http://gravatar.com/avatar/' + md5.createHash(attrs.email) + '?size=' + value;
            });

            attrs.$observe('email', function(value) {
                scope.url = 'http://gravatar.com/avatar/' + md5.createHash(value) + '?size=' + attrs.size;
            });

            if (attrs.email) {
                scope.url = 'http://gravatar.com/avatar/' + md5.createHash(scope.email) + '?size=' + scope.size;
            }
        },
    }
});
