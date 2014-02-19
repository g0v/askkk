askControllers.controller('userListCtrl', ['$scope', 'candidateService', function($scope, candidateService){


  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();


  $scope.candidates = candidateService;
  $scope.categories = global.categories;
  $scope.data = global.responseData;
   
}]);

