

var thisApp = angular
    .module('Erki', [
    'ngRoute',
    'MainCtrl',
    'ui.router',
    'NerdService',
    'GeekCtrl',
    'GeekService',
    'NavBarCtrl',
    'duScroll'
    ]);

thisApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('wip', {
            url: '/',
            templateUrl: 'views/wip.html',
            controller: 'MainController'
        })
        .state('iland', {
            url: '/iland',
            templateUrl: 'views/home.html',
            controller: 'MainController'
        });

    $locationProvider.html5Mode(true);
});