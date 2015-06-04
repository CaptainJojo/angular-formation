var app = angular.module('jmail.average', []);

app.filter('average', function() {
    return function(input) {
        var count = input.length;

        return _.sum(input) / count;
    };
});
