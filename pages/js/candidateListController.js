askControllers.controller('candidateListCtrl', ['$scope', '$firebaseSimpleLogin', 'conf', 'authService', 'candidateService', function($scope, $firebaseSimpleLogin, conf, authService, candidateService){

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
   

  $scope.candidates = candidateService;
  $scope.auth = $firebaseSimpleLogin(new Firebase(conf.firebase));
  $scope.auth.$getCurrentUser().then(function (user) {
    if (user) {
      authService.get(user.id).then(function (user) {
        $scope.user = user;
      });
    }
  });
  $scope.login = function () {
    //event.preventDefault();
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

  $scope.askCandidateJoin = function(candidateId){
    console.log("ask candidate join, id:"+candidateId);
  };

  // for sign question area keep floating
  var nav = $('#taipei_candidates');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 230) {
            nav.addClass("f-nav");
            nav.removeClass("fc-fix");
        } else {
            nav.removeClass("f-nav");
            nav.addClass("fc-fix");
        }
    });



}]);
