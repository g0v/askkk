askControllers.controller('candidateDetailCtrl', ['$scope', '$firebaseSimpleLogin', '$location', 'questionService', 'authService', '$routeParams', 'candidateService', 

function($scope, $firebaseSimpleLogin, $location, questionService, authService, $routeParams,candidateService){

  semanticMenuReady();
  //semanticAccordingReady();
  semanticSidebarReday();
  $scope.titleLimit=global.titleLimit;
  
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
    $scope.titleLimit=global.titleLimitMobile;
  }
  /* ---------------------- */

  $scope.questions = questionService;
  $scope.data = candidateService.get($routeParams.candidateId);
  $scope.n = candidateService.get($routeParams.candidateId);
  console.log($scope.data);
  
  $scope.candidates = candidateService;
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

  //$scope.n = global.oneCandidate;


  $scope.pending=function(){
    $location.path("/candidate/"+$routeParams.candidateId+"/pending");
  }

  $scope.showQuestionDetail = function(questionId){
    //event.stopPropagation();
    console.log("show question detail, id:"+questionId);
    $location.path("/question/"+questionId);
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

