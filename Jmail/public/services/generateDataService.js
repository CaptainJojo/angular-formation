var app = angular.module('jmail');

app.factory('generateDataService', function($http, $log, $q, gapiService) {
    var mails = [];

    return {
        getData: function() {
            /*if (mails.length > 0) {
                return $q.when(mails);
            }*/
            return gapiService.execGmail('threads', 'list', { userId: 'me', labelIds: 'INBOX'})
                .then(function(threads) {
                    return threads.threads;
                });

            /*
            return $http.get('/mails')
                .then(function(result) {
                    mails = result.data;
                    return mails;
                })
                .catch(function() {
                    $log.error('errro');
                });*/
        },
        getOneData: function(id) {
            return gapiService.execGmail('threads', 'get', { userId: 'me', id: id})
                .then(function(thread) {
                    return thread;
                //    return threads.threads;
                });

            /*
            if (mails.length > 0) {
                return $q.when(_.find(mails, {'id': +id}));
            }

            return $http.get('/mails/' + id)
                .then(function(result) {
                    return result.data;
                })
                .catch(function() {
                    $log.error('errro');
                });
            */
        },
        getEmail: function(id) {
            return gapiService.execGmail('threads', 'get', { userId: 'me', id: id})
                .then(function(thread) {
                    var emailFrom = _.find(thread.messages[0].payload.headers, { name: 'From'});
                    var split1 = emailFrom.value.split('<');
                    var split2 = split1[1].split('>');

                    return split2[0];
                });
        },
        saveData: function(jmail) {
            return $http.post('/mails', {
                    'id': chance.natural(),
                    'subject': jmail.subject,
                    'to': jmail.to,
                    'from': chance.email(),
                    'body': jmail.body,
                    'read': chance.bool(),
                    'count': chance.natural({min: 1, max: 20})
                })
                .then(function(result) {
                    return result.data;
                })
                .catch(function() {
                    $log.error('errro');
                });
        },
    };
});
