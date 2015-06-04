var app = angular.module('jmail');

app.directive('sortable', function(md5) {
    return {
        restrict: 'A',
        scope: {
            sorter: '='
        },
        templateUrl: 'sortable.html',
        link: function (scope, elem, attrs) {
            scope.field = attrs.field;
        },
    }
});
