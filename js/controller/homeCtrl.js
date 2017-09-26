angular.module('app').controller('homeCtrl', function($scope, articleSrv) {
    $scope.articles = articleSrv.getArticles();
    
})