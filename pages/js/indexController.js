askControllers.controller('indexCtrl', ['$scope', '$firebaseSimpleLogin', 'conf', 'authService', 'candidateService', 'signService', function($scope, $firebaseSimpleLogin, conf, authService, candidateService, signService){

  semanticMenuReady();
  //semanticAccordingReady();
  semanticSidebarReday();
  $scope.conf = conf;
  $scope.userNameLimitMobile = global.userNameLimitMobile;
  
  /* --- mobile nav set --- */
  $('.body').removeClass("left");
  $('.body').removeClass("pushed");
  mobileNavPosition();
  $("#mobile_nav_button").on("click",function(){
    mobileNavPosition();
  });
  if($(window).width()<400){
    mobileNavSetup();
    mobileSideBarSetup();
  }
  /* ---------------------- */


  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.auth.$getCurrentUser().then(function (user) {
    if (user) {
      authService.get(user.id).then(function (user) {
        $scope.user = user;
      });
    }
  });
  $scope.login = function () {
    event.preventDefault();
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
  $scope.signature_threshold = signService.signature_threshold;
  
  $scope.tabChoose = function(chosed_tab){
  	
  	$(".tab").hide();
  	$(".index_tab").removeClass("index_tab_active");
  	$("#"+chosed_tab).show();
  	$("#"+chosed_tab+"_tab").addClass("index_tab_active");

    //mobiel tab css adjust
    $(".tab_menu").removeClass("tab_menu_active");
    $("#"+chosed_tab+"_mobiletab").addClass("tab_menu_active");

    //dynamically adjust height
    var height = $("#"+chosed_tab).height()+150;
    $("#why_and_how_segment").css("height",height+"px");

    //hide left side bar menu
    $('.body').removeClass("left");
    $('.body').removeClass("pushed");
    $("#menu").removeClass("active");
  }
 
}]);
