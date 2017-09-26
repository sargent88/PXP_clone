angular.module('app').controller('articleCtrl', function($scope, articleSrv) {
    $scope.articles = articleSrv.getArticles();
    
})