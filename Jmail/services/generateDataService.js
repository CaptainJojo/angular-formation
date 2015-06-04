var app = angular.module('jmail');

app.factory('generateDataService', function() {
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

    var data = generateData(5);

    return {
        getData: function() {
            return data;
        },
        saveData: function(jmail) {
            data.push(
                {
                    'id': chance.integer(),
                    'subject': jmail.subject,
                    'to': jmail.to,
                    'from': chance.email(),
                    'body': jmail.body,
                    'read': chance.bool(),
                    'count': chance.natural({min: 1, max: 20})
                }
            );

            return data;
        },
    };
});
