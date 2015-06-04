var app = angular.module('jmail');

app.directive('checkbox', function() {
    return {
        restrict: 'A',
        scope: {
            state: '='
        },
        compile: function (tElem, tAttrs) {
            if (!tAttrs.type || tAttrs.type.toLowerCase() !== 'checkbox') {
                return angular.noop;
            }

            return function postLink (scope, elm, attrs) {
                var lastprop = 'nocheck';
                scope.state = 'checked';
                elm.on('click', function(e) {
                    if (lastprop == 'nocheck') {
                        elm.prop('indeterminate', false);
                        elm.prop('checked', true);
                        lastprop = 'checked';
                        scope.state = 'checked';
                    } else if (lastprop == 'checked') {
                        elm.prop('checked', false);
                        elm.prop('indeterminate', true);
                        lastprop = 'indeterminate';
                        scope.state = 'indeterminate';
                    } else if (lastprop == 'indeterminate') {
                        elm.prop('indeterminate', false);
                        elm.prop('checked', false);
                        lastprop = 'nocheck';
                        scope.state = 'nocheck';
                    }
                    scope.$apply();
                });



            };
        }
    }
});
