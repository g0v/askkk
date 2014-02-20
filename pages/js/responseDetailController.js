askControllers.controller('responseDetailCtrl', ['$scope', '$firebaseSimpleLogin', 'authService', '$routeParams', 'candidateService', 'questionService', function($scope, $firebaseSimpleLogin, authService, $routeParams, candidateService, questionService){


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
  $scope.data = data = questionService.get($routeParams['responseId']);

  $scope.voteQuestion = function(questionId){
    event.stopPropagation();
    console.log("vote for this detail, id:"+questionId);

  };
  $scope.upVoteResponse = function(responseId){
    questionService.upVoteResponse({
      questionId: $routeParams['responseId'],
      responseId: responseId,
      userId: $scope.user.id
    });
  };
  $scope.downVoteResponse = function(responseId){
    questionService.downVoteResponse({
      questionId: $routeParams['responseId'],
      responseId: responseId,
      userId: $scope.user.id
    });
  };
  $scope.voted = function (responseId) {
    if (!data.response) { return false; }
    return (data.responses[responseId].upVotes && data.responses[responseId].upVotes[$scope.user.id]) || (data.responses[responseId].downVotes && data.responses[responseId].downVotes[$scope.user.id]);
  }
  $scope.goToCandidate = function(id){
     var body = $("html, body");
     var p = $('#response_item_'+id).position();
     var o = $('#response_item_'+id).offset();
     body.animate({scrollTop:o.top}, '500', 'swing');

  };
  $scope.goToTop = function(){

     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };
    
  // for sign peition area keep floating
  var nav = $('#response_detail_right_menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 230) {
            nav.addClass("f-nav");
            nav.removeClass("fr-fix");

        } else {
            nav.removeClass("f-nav");
            nav.addClass("fr-fix");

        }
    });
  
}]);

