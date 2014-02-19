askControllers.controller('indexCtrl', ['$scope', 'candidateService', function($scope, candidateService){

  semanticMenuReady();
  semanticAccordingReady();
 

 
  $scope.candidates = candidateService;

  
  $scope.tabChoose = function(chosed_tab){
  	
  	$(".tab").hide();
  	$(".index_tab").removeClass("index_tab_active");
  	$("#"+chosed_tab).show();
  	$("#"+chosed_tab+"_tab").addClass("index_tab_active");
    
    //dynamically adjust height
    var height = $("#"+chosed_tab).height()+150;
    $("#why_and_how_segment").css("height",height+"px");
  }
 
}]);
