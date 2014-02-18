askControllers.controller('userListCtrl', ['$scope', 'askKK', function($scope, askKK){


  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();


  askKK.getCandidate(null, function (data) {
    $scope.$apply(function () {
      $scope.candidates = data;
    });
  });
  $scope.categories = global.categories;
  $scope.data = global.responseData;
   
}]);

