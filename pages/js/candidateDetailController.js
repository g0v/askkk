askControllers.controller('candidateDetailCtrl', ['$scope', '$firebaseSimpleLogin', 'authService', '$routeParams', 'candidateService', 

function($scope, $firebaseSimpleLogin, authService, $routeParams,candidateService){

  semanticMenuReady();
  semanticAccordingReady();

  
  $scope.data = global.responseDataCandidate;
  
  $scope.candidates = candidateService;
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

  $scope.n = global.oneCandidate;


  $scope.pending=function(){
    window.location = "#/candidate/"+$routeParams.candidateId+"/pending";
  }

  $scope.showQuestionDetail = function(questionId){
    event.stopPropagation();
    console.log("show question detail, id:"+questionId);
    window.location = "#/question/"+questionId;
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

