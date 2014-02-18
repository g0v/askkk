askControllers.controller('responseListCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

  $scope.flag = true;
  $scope.$watch(function(){
  return document.body.innerHTML
  }, function(val){
  if($scope.flag && ($(".category_checkbox").length===$scope.categories.length)){
    semanticAccordingReady();
    $scope.flag = false;
  }
  });


  $scope.candidates = global.candidates;
  $scope.categories = global.categories;


  $scope.data = global.responseData;
   

});

