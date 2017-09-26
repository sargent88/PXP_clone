angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .state('article', {
                url: '/',
                templateUrl: 'views/article.html',
                controller: 'articleCtrl'
            })
            .state('search', {
                url: '/',
                templateUrl: 'views/search.html',
                controller: 'searchCtrl'
            })
            .state('about', {
                url: '/',
                templateUrl: 'views/about.html',
                controller: 'aboutCtrl'
            })
        $urlRouterProvider
            .otherwise('/')
    })