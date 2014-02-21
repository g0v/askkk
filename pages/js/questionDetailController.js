askControllers.controller('questionDetailCtrl', ['$scope', '$firebaseSimpleLogin', 'authService', '$routeParams', 'candidateService', 'questionService', 'signService', function($scope, $firebaseSimpleLogin, authService, $routeParams, candidateService, questionService, signService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

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
    authService.get(user.id).then(function (user) {
      $scope.user = user;
    });
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
  $scope.data = questionService.get($routeParams.questionId);

  $scope.signQuestion = function(questionId){
    signService.sign($scope.auth.user.id, questionId);
  };
  $scope.signed = function(questionId) {
    if ($scope.auth.user && $scope.data.signatures) {
      return $scope.data.signatures[$scope.auth.user.id];
    } else {
      return false;
    }
  }
  $scope.signature_threshold = signService.signature_threshold;
  
  $scope.goToTop = function(){
    var body = $("html, body");
    body.animate({scrollTop:0}, '500', 'swing');
  };

  // for sign question area keep floating
  var nav = $('#sign-question');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 230) {
      nav.addClass("f-nav");
      nav.removeClass("f-fix");
    } else {
      nav.removeClass("f-nav");
      nav.addClass("f-fix");
    }
  });
 
}]);

