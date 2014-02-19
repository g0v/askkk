askControllers.controller('candidateListCtrl', ['$scope', '$firebaseSimpleLogin', 'candidateService', function($scope, $firebaseSimpleLogin, candidateService){

  semanticMenuReady();
  semanticAccordingReady();

  $scope.candidates = candidateService;
  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));

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
