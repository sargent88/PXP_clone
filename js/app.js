angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
            })
            .state('article', {
                url: '/',
                templateUrl: 'views/article.html'
            })
            .state('search', {
                url: '/',
                templateUrl: 'views/search.html'
            })
            .state('about', {
                url: '/',
                templateUrl: 'views/about.html'
            })
        $urlRouterProvider
            .otherwise('/')
    })