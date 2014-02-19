askControllers.controller('indexCtrl', ['$scope', '$firebaseSimpleLogin', 'candidateService', function($scope, $firebaseSimpleLogin, candidateService){

  semanticMenuReady();
  semanticAccordingReady();
 
  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
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
