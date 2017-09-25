'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html'
    }).state('article', {
        url: '/',
        templateUrl: 'views/article.html'
    }).state('search', {
        url: '/',
        templateUrl: 'views/search.html'
    }).state('about', {
        url: '/',
        templateUrl: 'views/about.html'
    });
    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope) {});
//# sourceMappingURL=bundle.js.map
