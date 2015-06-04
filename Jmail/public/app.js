var app = angular.module('jmail', ['ngMessages', 'ui.router'])
.config(function ($logProvider) {
    $logProvider.debugEnabled(true);
})
.run(function($log){
    $log.log('toto');
    $log.debug('toto');
})
.value("config", {
    api: {
        scopes: [
            "https://www.googleapis.com/auth/gmail.readonly",
            "https://www.googleapis.com/auth/calendar.readonly",
        ],
        client: {
            id: "674505742716-uqgvnu17ao15h7m2cav32jhijsc2rf76.apps.googleusercontent.com"
        }
    }
});
