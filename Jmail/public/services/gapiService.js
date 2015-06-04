var app = angular.module('jmail');

app.factory('gapiService', function(config, $http, $log, $q) {
    var gmailDeferred = $q.defer();

    function onAuthorized(authToken) {
        if (authToken.error) {
            $log.error(authToken.error);
            return;
        }
        gapi.client.load("gmail", "v1", function() {
            $log.info('Gmail Load');
            gmailDeferred.resolve(gapi.client.gmail.users);
        });
    }

    function init() {
        gapi.auth.authorize({
            client_id: config.api.client.id,
            scope: config.api.scopes,
            imediate: false,
        }, onAuthorized);
    }

    setTimeout(init, 1000);

    return {
        getGmailClient: function () {
            return gmailDeferred.promise;
        },
        execGmail: function (resource, method, param) {
            return this.getGmailClient().then(function (gmail) {
                var req = gmail[resource][method](param);

                var deferred = $q.defer();
                req.execute(deferred.resolve);

                return deferred.promise;
            });
        },
    }
});
