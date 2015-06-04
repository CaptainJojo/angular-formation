var app = angular.module('jmail')
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
        })
        .state('mails', {
            url: '/mails',
            templateUrl: 'mail.html',
        })
        .state('mails.list', {
            url: '/list',
            templateUrl: 'table.html',
        })
        .state('mails.composer', {
            url: '/new',
            templateUrl: 'form.html',
        })
        .state('mails.list.detail', {
            url: '/detail/:id',
            templateUrl: 'detail.html',
        });

    $urlRouterProvider.otherwise('/');
});
