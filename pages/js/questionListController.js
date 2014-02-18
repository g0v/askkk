askControllers.controller('questionListCtrl', ['$scope', 'askKK', function($scope, askKK){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

  

  askKK.getCandidate(null, function (data) {
    $scope.$apply(function () {
      $scope.candidates = data;
    });
  });
  $scope.categories = global.categories;
  $scope.data = global.questionData;

  
  $scope.flag = true;
  $scope.$watch(function(){
  return document.body.innerHTML
  }, function(val){
  if($scope.flag && ($(".category_checkbox").length===$scope.categories.length)){
    semanticAccordingReady();
    $scope.flag = false;
  }
  });
  

}]);
