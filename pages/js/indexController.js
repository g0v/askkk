askControllers.controller('indexCtrl', ['$scope', 'candidateService', function($scope, candidateService){

  semanticMenuReady();
  semanticAccordingReady();
 

 
  $scope.candidates = candidateService;
  $scope.tabChoose = function(chosed_tab){
  	
  	$(".tab").hide();
  	$(".index_tab").removeClass("index_tab_active");
  	$("#"+chosed_tab).show();
  	$("#"+chosed_tab+"_tab").addClass("index_tab_active");
  }
 



}]);
