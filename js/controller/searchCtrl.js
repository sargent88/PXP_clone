angular.module('app').controller('searchCtrl', function($scope, homeSrv) {
    
    $scope.articles = homeSrv.getArticles();
})