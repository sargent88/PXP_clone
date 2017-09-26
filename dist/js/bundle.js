'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    }).state('article', {
        url: '/',
        templateUrl: 'views/article.html',
        controller: 'articleCtrl'
    }).state('search', {
        url: '/',
        templateUrl: 'views/search.html',
        controller: 'searchCtrl'
    }).state('about', {
        url: '/',
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
"use strict";
'use strict';

angular.module('app').controller('articleCtrl', function ($scope, articleSrv) {
    $scope.articles = articleSrv.getArticles();
});
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, articleSrv) {
    $scope.articles = articleSrv.getArticles();
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope) {});
"use strict";
'use strict';

angular.module('app').service('articleSrv', function () {
    var article = [{
        "id": 0,
        "title": "ARTICLE TITLE",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image": '../img/article_1@2x.png'
    }, {
        "id": 1,
        "title": "ARTICLE TITLE",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image": "../img/article_2@2x.png"
    }, {
        "id": 2,
        "title": "ARTICLE TITLE",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image": "../img/article_3@2x.png"
    }, {
        "id": 3,
        "title": "ARTICLE TITLE",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image": "../img/article_4@2x.png"
    }];

    this.getArticles = function () {
        return article;
    };
});
//# sourceMappingURL=bundle.js.map
