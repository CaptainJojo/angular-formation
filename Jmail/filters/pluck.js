var app = angular.module('jmail');

app.filter('pluck', function() {
    return function(input, param) {
        return _.pluck(input, param);
    };
});
