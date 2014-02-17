askControllers.controller('indexCtrl', ['$scope', 'askKK', function($scope, askKK){

  semanticMenuReady();
  semanticAccordingReady();

  askKK.getCandidate(null, function (data) {
    $scope.$apply(function () {
      $scope.candidates = data;
    });
  });

}]);
