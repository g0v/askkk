askControllers.controller('indexCtrl', ['$scope', '$firebaseSimpleLogin', 'authService', 'candidateService', function($scope, $firebaseSimpleLogin, authService, candidateService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
 
  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.login = function () {
    $scope.auth.$login('facebook')
    .then(function (user) {
      authService.onLogin(user);
    }, function (error) {
    });
  };
  $scope.logout = function () {
    authService.onLogout($scope.auth.user);
    $scope.auth.$logout();
  };
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
