askControllers.controller('indexCtrl', ['$scope', 'askKK', function($scope, askKK){

  semanticMenuReady();
  semanticAccordingReady();
 

 
  askKK.getCandidate(null, function (data) {
    $scope.$apply(function () {
      $scope.candidates = data;
    });
  });

  $scope.tabChoose = function(chosed_tab){
  	
  	$(".tab").hide();
  	$(".index_tab").removeClass("index_tab_active");
  	$("#"+chosed_tab).show();
  	$("#"+chosed_tab+"_tab").addClass("index_tab_active");
  }
 



}]);
