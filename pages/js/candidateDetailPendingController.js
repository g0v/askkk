askControllers.controller('candidateDetailPendingCtrl', ['$scope', '$firebaseSimpleLogin', ,'$routeParams', 'candidateService', 
  function($scope, $firebaseSimpleLogin, $routeParams, candidateService){

  semanticMenuReady();
  semanticAccordingReady();

  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.candidates = candidateService;
  $scope.data = global.responseData;
  $scope.n = global.oneCandidate;

  $scope.answered=function(){
    window.location = "#/candidate/"+$routeParams.candidateId;
  }

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

