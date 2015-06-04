var app = angular.module('jmail');

app.filter('rot13', function() {
    return function(s) {
        if (!s) {
            return '';
        }

        return (s = (s) ? s : this).split('').map(function(_)
          {
            if (!_.match(/[A-Za-z]/)) return _;
            c = _.charCodeAt(0)>=96;
            k = (_.toLowerCase().charCodeAt(0) - 96 + 12) % 26 + 1;
            return String.fromCharCode(k + (c ? 96 : 64));
          }
          ).join('');
    };
});
