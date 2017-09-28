'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    }).state('article', {
        url: '/article/:id',
        templateUrl: 'views/article.html',
        controller: 'articleCtrl'
    }).state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
        controller: 'searchCtrl'
    }).state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
    });
    $urlRouterProvider.otherwise('/');
});
"use strict";
'use strict';

angular.module('app').controller('articleCtrl', function ($scope, articleSrv, homeSrv) {
    $scope.story = articleSrv.getStory();

    $scope.xtraArticles = articleSrv.getRecentArticles();

    $scope.articles = homeSrv.getArticles();
});
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, homeSrv, articleSrv) {
    $scope.articles = homeSrv.getArticles();

    $scope.story = articleSrv.getStory();
    console.log($scope.story.id);
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, $stateParams) {
    console.log($stateParams);
});
"use strict";
'use strict';

angular.module('app').service('articleSrv', function () {
    var recentStory = [{
        "id": 0,
        "title": "ARTICLE TITLE",
        "author": "Author Name",
        "picture": "../img/profile_pic.png",
        "date": "Date Posted",
        "intro": "You may be receiving questions from your patients and colleagues about the ZIKA virus and the use of ultrasound. To help support you, please find below links to a few associations and webinars that provide information and guidance to Healthcare Professionals about ZIKA and ultrasound.",
        "p1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        "middle": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor consequat. Duis aute irure dolor in.",
        "still": "../img/zika.png",
        "p2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
        "facebook": "#",
        "linkedin": "#",
        "twitter": "#",
        "email": "#",
        "more": "#"
    }];

    var recentArticles = [{
        "id": 1,
        "image": "../img/article_4.png",
        "title": "RECENT ARTICLE TITLE",
        "synopsis": "You may be receiving questions from your patients and colleagues"
    }, {
        "id": 2,
        "image": "../img/article_4.png",
        "title": "RECENT ARTICLE TITLE",
        "synopsis": "You may be receiving questions from your patients and colleagues"
    }, {
        "id": 3,
        "image": "../img/article_4.png",
        "title": "RECENT ARTICLE TITLE",
        "synopsis": "You may be receiving questions from your patients and colleagues"
    }];

    this.getStory = function () {
        return recentStory[recentStory.length - 1];
    };

    this.getRecentArticles = function () {
        return recentArticles;
    };
});
'use strict';

angular.module('app').service('homeSrv', function () {
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
