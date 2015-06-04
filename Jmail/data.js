var Chance = require('chance');
module.exports = function() {
    var data = { mails: [] };
    chance = new Chance;
    for (var i = 0; i < 50; i++) {
        var labels = [];
        for (var j = 0; j < (Math.random() * (3 - 1)) + 1; j++) {
            labels.push(chance.pick(['facebook', 'twitter', 'jonathan']));
        }

        data.mails.push(
            {
                'id': chance.natural(),
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
}
