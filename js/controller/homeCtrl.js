angular.module('app').controller('homeCtrl', function($scope, homeSrv, articleSrv) {
    $scope.articles = homeSrv.getArticles();

    $scope.story = articleSrv.getStory();
    console.log($scope.story.id)
    
})