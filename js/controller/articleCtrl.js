angular.module('app').controller('articleCtrl', function($scope, articleSrv) {
    $scope.story = articleSrv.getStory();
    
    $scope.xtraArticles = articleSrv.getRecentArticles();
    
})