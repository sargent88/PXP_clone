angular.module('app').controller('homeCtrl', function($scope, homeSrv) {
    $scope.articles = homeSrv.getArticles();
    
})