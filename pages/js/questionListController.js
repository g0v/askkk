askControllers.controller('questionListCtrl', ['$scope', 'candidateService', function($scope, candidateService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

  

  $scope.candidates = candidateService;
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
