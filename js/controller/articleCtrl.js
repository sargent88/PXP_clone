angular.module('app').controller('articleCtrl', function($scope, articleSrv, homeSrv) {
    $scope.story = articleSrv.getStory();
    
    $scope.xtraArticles = articleSrv.getRecentArticles();

    $scope.articles = homeSrv.getArticles();
})